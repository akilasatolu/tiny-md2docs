// tm2d search box. Loads the index on first focus and shows up to 10 results.
import { createIndex } from './search-core.js';

const root = document.querySelector('[data-tm2d-search]');
if (root) init(root);

function esc(s) {
  return s.replace(/[&<>"']/g, (c) => '&#' + c.charCodeAt(0) + ';');
}

// Escape text[from, to) and wrap matched ranges in <mark>.
function mark(text, ranges, from, to) {
  const rs = ranges.filter((r) => r.end > from && r.start < to).sort((a, b) => a.start - b.start);
  let out = '';
  let p = from;
  for (const r of rs) {
    const s = Math.max(r.start, p);
    const e = Math.min(r.end, to);
    if (e <= s) continue;
    out += esc(text.slice(p, s)) + '<mark>' + esc(text.slice(s, e)) + '</mark>';
    p = e;
  }
  return out + esc(text.slice(p, to));
}

function init(root) {
  const input = root.querySelector('input');
  const list = root.querySelector('[role="listbox"]');
  const status = root.querySelector('[data-tm2d-search-status]');
  let docs = null;
  let index = null;
  let loading = null;
  let timer = 0;
  let active = -1;
  const lang = document.documentElement.lang || undefined;

  function load() {
    if (!loading) {
      loading = fetch(root.dataset.indexUrl)
        .then((r) => r.json())
        .then((data) => {
          docs = new Map(data.map((d) => [d.id, d]));
          const seg = window.Intl && Intl.Segmenter ? new Intl.Segmenter(lang, { granularity: 'word' }) : null;
          index = createIndex(data, { segmenter: seg });
        })
        .catch(() => {
          loading = null;
        });
    }
    return loading;
  }

  function close() {
    list.hidden = true;
    list.innerHTML = '';
    active = -1;
    input.setAttribute('aria-expanded', 'false');
    input.removeAttribute('aria-activedescendant');
  }

  function select(n) {
    const opts = list.querySelectorAll('[role="option"]');
    if (!opts.length) return;
    active = (n + opts.length) % opts.length;
    opts.forEach((o, i) => o.setAttribute('aria-selected', i === active ? 'true' : 'false'));
    input.setAttribute('aria-activedescendant', opts[active].id);
    opts[active].scrollIntoView({ block: 'nearest' });
  }

  async function run() {
    const q = input.value.trim();
    if (!q) {
      close();
      status.textContent = '';
      return;
    }
    await load();
    if (!index || input.value.trim() !== q) return;
    const results = index.search(q, { lang, limit: 10 });
    active = -1;
    input.removeAttribute('aria-activedescendant');
    if (!results.length) {
      list.innerHTML = '<li class="tm2d-search__empty" aria-hidden="true">' + esc(root.dataset.textNone) + '</li>';
      status.textContent = root.dataset.textNone;
    } else {
      list.innerHTML = results
        .map((r, i) => {
          const d = docs.get(r.id);
          const title = d.title || '';
          const content = d.content || '';
          const tm = r.matches.filter((m) => m.field === 'title');
          const cm = r.matches.filter((m) => m.field === 'content');
          let from = 0;
          let to = Math.min(content.length, 80);
          if (cm.length) {
            const first = cm.reduce((a, b) => (b.start < a.start ? b : a));
            from = Math.max(0, first.start - 40);
            to = Math.min(content.length, first.end + 40);
          }
          const snip = (from > 0 ? '…' : '') + mark(content, cm, from, to) + (to < content.length ? '…' : '');
          return (
            '<li role="option" id="tm2d-search-opt-' + i + '" aria-selected="false">' +
            '<a href="' + esc(d.url) + '" tabindex="-1"><span class="tm2d-search__title">' + mark(title, tm, 0, title.length) +
            '</span><span class="tm2d-search__snippet">' + snip + '</span></a></li>'
          );
        })
        .join('');
      status.textContent = root.dataset.textCount.replace('{n}', results.length);
    }
    list.hidden = false;
    input.setAttribute('aria-expanded', 'true');
  }

  const clear = root.querySelector('[data-tm2d-search-clear]');
  if (clear) {
    clear.addEventListener('click', () => {
      clearTimeout(timer);
      input.value = '';
      close();
      status.textContent = '';
      input.focus();
    });
  }
  input.addEventListener('focus', load);
  input.addEventListener('input', () => {
    clearTimeout(timer);
    timer = setTimeout(run, 100);
  });
  input.addEventListener('keydown', (e) => {
    // Keys typed while an IME is composing (e.g. Enter to confirm Japanese) are not ours.
    if (e.isComposing || e.keyCode === 229) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      if (list.hidden) return;
      e.preventDefault();
      select(active + (e.key === 'ArrowDown' ? 1 : -1));
    } else if (e.key === 'Enter') {
      const opts = list.querySelectorAll('[role="option"] a');
      if (list.hidden || !opts.length) return;
      e.preventDefault();
      location.href = opts[Math.max(active, 0)].href;
    } else if (e.key === 'Escape') {
      if (!list.hidden) {
        e.preventDefault();
        e.stopPropagation();
        close();
      }
    }
  });
  document.addEventListener('click', (e) => {
    if (!root.contains(e.target)) close();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key !== '/' || e.ctrlKey || e.metaKey || e.altKey) return;
    const t = e.target;
    if (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)) return;
    e.preventDefault();
    document.dispatchEvent(new CustomEvent('tm2d:search-open'));
    input.focus();
  });
}
