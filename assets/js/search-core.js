// tm2d search core. No DOM, fetch or window: runs in browsers and in Node tests.

const COMBINING = /[゙゚ﾞﾟ̀-ͯ]/;
const CJK = /(?:(?=\p{L})[\p{scx=Han}\p{scx=Hira}\p{scx=Kana}\p{scx=Hang}])+/u;
const TOKEN = /((?:(?=\p{L})[\p{scx=Han}\p{scx=Hira}\p{scx=Kana}\p{scx=Hang}])+)|((?:(?![\p{scx=Han}\p{scx=Hira}\p{scx=Kana}\p{scx=Hang}])[\p{L}\p{N}])+)/gu;
const FIELDS = ['title', 'headings', 'content'];
const WEIGHT = { title: 10, headings: 4, content: 1 };

// Normalize text and keep a map from each normalized code unit to the original range.
function normalizeMap(text) {
  text = String(text || '');
  let out = '';
  const start = [];
  const end = [];
  let i = 0;
  while (i < text.length) {
    const s = i;
    i += text.codePointAt(i) > 0xffff ? 2 : 1;
    while (i < text.length && COMBINING.test(text[i])) i++;
    let g = text.slice(s, i).normalize('NFKC').toLowerCase();
    g = g.replace(/[ァ-ヶ]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0x60));
    g = g.normalize('NFD').replace(/[̀-ͯ]/g, '').normalize('NFC');
    for (let k = 0; k < g.length; k++) {
      start.push(s);
      end.push(i);
    }
    out += g;
  }
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

function hasTerm(f, term, prefix) {
  if (Array.from(term).length === 1) return f.norm.includes(term);
  if (f.terms.has(term)) return true;
  if (prefix) {
    for (const t of f.terms) if (t.startsWith(term)) return true;
  }
  return false;
}

export function createIndex(docs, options) {
  const items = (docs || []).map((doc) => {
    const f = {};
    for (const name of FIELDS) {
      let raw = doc[name] || '';
      if (Array.isArray(raw)) raw = raw.join('\n');
      const m = normalizeMap(raw);
      f[name] = { raw, norm: m.text, start: m.start, end: m.end, terms: new Set(split(m.text)) };
    }
    return { doc, f };
  });

  function search(query, opts) {
    const o = opts || {};
    const q = normalize(query).trim();
    const terms = split(q);
    if (!terms.length) return [];
    const out = [];
    for (const it of items) {
      if (o.lang && it.doc.lang !== o.lang) continue;
      let score = 0;
      let ok = true;
      const matches = [];
      terms.forEach((term, k) => {
        if (!ok) return;
        const prefix = k === terms.length - 1 && !CJK.test(term);
        let hit = false;
        for (const name of FIELDS) {
          const f = it.f[name];
          if (!hasTerm(f, term, prefix)) continue;
          hit = true;
          score += WEIGHT[name];
          if (name === 'content') score += 0.2 * count(f.norm, term, 5);
          let p = f.norm.indexOf(term);
          for (let n = 0; p !== -1 && n < 3; n++) {
            matches.push({ field: name, start: f.start[p], end: f.end[p + term.length - 1] });
            p = f.norm.indexOf(term, p + term.length);
          }
        }
        if (!hit) ok = false;
      });
      if (!ok) continue;
      if (it.f.title.norm.includes(q)) score += 5;
      out.push({ id: it.doc.id, score, matches, title: it.f.title.raw, url: it.doc.url || '' });
    }
    out.sort((a, b) => b.score - a.score || a.title.length - b.title.length || (a.url < b.url ? -1 : a.url > b.url ? 1 : 0));
    const res = out.map(({ id, score, matches }) => ({ id, score, matches }));
    return o.limit ? res.slice(0, o.limit) : res;
  }

  return { search };
}
