// tm2d search core. No DOM, fetch or window: runs in browsers and in Node tests.

const COMBINING = /[゙゚ﾞﾟ̀-ͯ]/;
const CJK = /(?:(?=\p{L})[\p{scx=Han}\p{scx=Hira}\p{scx=Kana}\p{scx=Hang}])+/u;
const TOKEN = /((?:(?=\p{L})[\p{scx=Han}\p{scx=Hira}\p{scx=Kana}\p{scx=Hang}])+)|((?:(?![\p{scx=Han}\p{scx=Hira}\p{scx=Kana}\p{scx=Hang}])[\p{L}\p{N}])+)/gu;
// Particles between Han, katakana or ASCII; dropped only when nothing matches.
const PARTICLE = /(?<=[\p{sc=Han}\p{sc=Kana}ーA-Za-z0-9])(?:から|まで|より|など|[のをにはがでとへもや])+(?=[\p{sc=Han}\p{sc=Kana}A-Za-z0-9])/gu;
// A final long vowel mark of a 4+ letter word typed in hiragana. Applied before katakana is folded.
const LONG_HIRA = /(?<![ぁ-ゖァ-ヺー])([ぁ-ゖー]{3,})ー(?![ぁ-ゖァ-ヺー])/g;
const FIELDS = ['title', 'headings', 'content'];
const WEIGHT = { title: 10, headings: 4, content: 1 };

// Normalize text and keep a map from each normalized code unit to the original range.
// The final long vowel mark of a katakana run of 4+ letters is dropped; the letter before it covers it.
function normalizeMap(text) {
  text = String(text || '');
  let out = '';
  const start = [];
  const end = [];
  let i = 0;
  let kana = 0;
  // Drop the final long vowel mark of a katakana run of 4+ letters; the previous letter covers it.
  const trim = () => {
    if (kana >= 4 && out.endsWith('ー')) {
      out = out.slice(0, -1);
      start.pop();
      const e = end.pop();
      end[end.length - 1] = e;
    }
    kana = 0;
  };
  while (i < text.length) {
    const s = i;
    i += text.codePointAt(i) > 0xffff ? 2 : 1;
    while (i < text.length && COMBINING.test(text[i])) i++;
    let g = text.slice(s, i).normalize('NFKC').toLowerCase();
    if (/^[ァ-ヺー]+$/.test(g)) kana += g.length;
    else trim();
    g = g.replace(/[ァ-ヶ]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0x60));
    g = g.normalize('NFD').replace(/[̀-ͯ]/g, '').normalize('NFC');
    for (let k = 0; k < g.length; k++) {
      start.push(s);
      end.push(i);
    }
    out += g;
  }
  trim();
  return { text: out, start, end };
}

export function normalize(text) {
  return normalizeMap(text).text;
}

// Split normalized text: CJK runs become overlapping bigrams, the rest become words.
function split(norm) {
  const terms = [];
  for (const m of norm.matchAll(TOKEN)) {
    if (m[1]) {
      const cs = Array.from(m[1]);
      if (cs.length === 1) terms.push(cs[0]);
      for (let k = 0; k + 1 < cs.length; k++) terms.push(cs[k] + cs[k + 1]);
    } else {
      terms.push(m[2]);
    }
  }
  return terms;
}

export function tokenize(text, options) {
  return split(normalize(text));
}

function count(hay, needle, max) {
  let n = 0;
  let p = hay.indexOf(needle);
  while (p !== -1 && n < max) {
    n++;
    p = hay.indexOf(needle, p + needle.length);
  }
  return n;
}

// True when a and b differ by one edit (insert, delete or replace).
function near(a, b) {
  if (Math.abs(a.length - b.length) > 1) return false;
  let i = 0;
  while (i < a.length && a[i] === b[i]) i++;
  const x = a.slice(i + 1);
  return x === b.slice(i + 1) || x === b.slice(i) || a.slice(i) === b.slice(i + 1);
}

// Words from options.segmenter (Intl.Segmenter); used only to add score.
function segWords(segmenter, norm) {
  const out = new Set();
  if (!segmenter) return out;
  for (const s of segmenter.segment(norm)) {
    if (s.isWordLike && Array.from(s.segment).length > 1) out.add(s.segment);
  }
  return out;
}

function hasTerm(f, term, prefix) {
  if (Array.from(term).length === 1) return f.norm.includes(term);
  if (f.terms.has(term)) return true;
  if (prefix) {
    for (const t of f.terms) if (t.startsWith(term)) return true;
  }
  return false;
}

export function createIndex(docs, options) {
  const segmenter = (options && options.segmenter) || null;
  const items = (docs || []).map((doc) => {
    const f = {};
    for (const name of FIELDS) {
      let raw = doc[name] || '';
      if (Array.isArray(raw)) raw = raw.join('\n');
      const m = normalizeMap(raw);
      f[name] = { raw, norm: m.text, start: m.start, end: m.end, terms: new Set(split(m.text)), words: segWords(segmenter, m.text) };
    }
    return { doc, f };
  });

  // Search as typed; when nothing matches, drop particles and search again.
  function search(query, opts) {
    const res = find(query, opts);
    if (res.length) return res;
    const text = String(query || '').normalize('NFKC');
    const loose = text.replace(PARTICLE, ' ');
    return loose === text ? res : find(loose, opts);
  }

  function find(query, opts) {
    const o = opts || {};
    const q = normalize(String(query || '').normalize('NFKC').replace(LONG_HIRA, '$1')).trim();
    const terms = split(q);
    if (!terms.length) return [];
    const runs = Array.from(q.matchAll(TOKEN), (m) => m[1]).filter(Boolean);
    const qWords = segWords(segmenter, q);
    const out = [];
    for (const it of items) {
      if (o.lang && it.doc.lang !== o.lang) continue;
      let score = 0;
      // Each CJK run must appear unbroken in one field.
      let ok = runs.every((r) => FIELDS.some((name) => it.f[name].norm.includes(r)));
      const matches = [];
      terms.forEach((term, k) => {
        if (!ok) return;
        const prefix = k === terms.length - 1 && !CJK.test(term);
        let hit = false;
        const mark = (f, name, t) => {
          let p = f.norm.indexOf(t);
          for (let n = 0; p !== -1 && n < 3; n++) {
            matches.push({ field: name, start: f.start[p], end: f.end[p + t.length - 1] });
            p = f.norm.indexOf(t, p + t.length);
          }
        };
        for (const name of FIELDS) {
          const f = it.f[name];
          if (!hasTerm(f, term, prefix)) continue;
          hit = true;
          score += WEIGHT[name];
          if (name === 'content') score += 0.2 * count(f.norm, term, 5);
          if (!CJK.test(term)) mark(f, name, term);
        }
        // Fuzzy: a word of 4 or more letters with no hit may match a word one edit away, at half score.
        if (!hit && !CJK.test(term) && term.length >= 4) {
          for (const name of FIELDS) {
            const f = it.f[name];
            for (const t of f.terms) {
              if (!near(term, t)) continue;
              hit = true;
              score += WEIGHT[name] / 2;
              mark(f, name, t);
              break;
            }
          }
        }
        if (!hit) ok = false;
      });
      if (!ok) continue;
      // Highlight CJK runs as a whole, not by pairs.
      for (const r of runs) {
        for (const name of FIELDS) {
          const f = it.f[name];
          let p = f.norm.indexOf(r);
          for (let n = 0; p !== -1 && n < 3; n++) {
            matches.push({ field: name, start: f.start[p], end: f.end[p + r.length - 1] });
            p = f.norm.indexOf(r, p + r.length);
          }
        }
      }
      if (it.f.title.norm.includes(q)) score += 5;
      for (const w of qWords) {
        for (const name of FIELDS) if (it.f[name].words.has(w)) score += WEIGHT[name] / 2;
      }
      out.push({ id: it.doc.id, score, matches, title: it.f.title.raw, url: it.doc.url || '' });
    }
    out.sort((a, b) => b.score - a.score || a.title.length - b.title.length || (a.url < b.url ? -1 : a.url > b.url ? 1 : 0));
    const res = out.map(({ id, score, matches }) => ({ id, score, matches }));
    return o.limit ? res.slice(0, o.limit) : res;
  }

  return { search };
}
