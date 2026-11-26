import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createIndex, normalize, tokenize } from '../assets/js/search-core.js';

const root = fileURLToPath(new URL('..', import.meta.url));

function ids(index, q) {
  return index.search(q).map((r) => r.id);
}

test('normalize: width, kana, case and accents', () => {
  assert.equal(normalize('ＡＢＣ'), 'abc');
  assert.equal(normalize('ｶﾞｲﾄﾞ'), 'がいど');
  assert.equal(normalize('ガイド'), 'がいど');
  assert.equal(normalize('Café'), 'cafe');
  assert.equal(normalize('が'), 'が');
});

test('tokenize: overlapping bigrams and words', () => {
  assert.deepEqual(tokenize('設定変更'), ['設定', '定変', '変更']);
  assert.deepEqual(tokenize('設'), ['設']);
  assert.deepEqual(tokenize('theme_options の設定'), ['theme', 'options', 'の設', '設定']);
  assert.deepEqual(tokenize('「設定」、'), ['設定']);
});

const docs = [
  { id: 0, title: '新設定', headings: [], content: 'あ', lang: 'ja' },
  { id: 1, title: 'ｶﾞｲﾄﾞ', headings: [], content: '', lang: 'ja' },
  { id: 2, title: 'ＡＢＣ', headings: [], content: '', lang: 'ja' },
  { id: 3, title: 'café', headings: [], content: '', lang: 'en' },
  { id: 4, title: 'か', headings: [], content: '', lang: 'ja' },
  { id: 5, title: 'その他', headings: [], content: 'ここで設定を変える', lang: 'ja' },
  { id: 6, title: '設定の例', headings: ['検索'], content: '', lang: 'ja' },
];
const index = createIndex(docs);

test('overlapping bigrams find a word inside a longer word', () => {
  assert.ok(ids(index, '設定').includes(0));
});

test('half-width kana is found by katakana and hiragana', () => {
  assert.ok(ids(index, 'ガイド').includes(1));
  assert.ok(ids(index, 'がいど').includes(1));
});

test('full-width letters and accents', () => {
  assert.ok(ids(index, 'abc').includes(2));
  assert.ok(ids(index, 'cafe').includes(3));
});

test('voiced marks are kept', () => {
  assert.ok(!ids(index, 'が').includes(4));
  assert.ok(ids(index, 'か').includes(4));
});

test('single character query', () => {
  assert.deepEqual(ids(index, '例'), [6]);
});

test('all terms must match (AND)', () => {
  assert.deepEqual(ids(index, '設定 検索'), [6]);
});

test('title match ranks above content match', () => {
  const r = ids(index, '設定');
  assert.ok(r.indexOf(0) < r.indexOf(5));
  assert.ok(r.indexOf(6) < r.indexOf(5));
});

test('prefix match on the last word', () => {
  assert.ok(ids(index, 'caf').includes(3));
});

test('lang filter', () => {
  assert.deepEqual(index.search('cafe', { lang: 'ja' }), []);
  assert.equal(index.search('cafe', { lang: 'en' }).length, 1);
});

test('match positions point into the original text', () => {
  const [r] = index.search('ガイド');
  const m = r.matches.find((x) => x.field === 'title');
  assert.equal(docs[1].title.slice(m.start, m.end), docs[1].title);
});

// Build a corpus from docs/**/*.md, the same fields as assets/search.json.
function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    if (name.startsWith('_')) return [];
    if (statSync(p).isDirectory()) return walk(p);
    return name.endsWith('.md') ? [p] : [];
  });
}

function toDoc(file, id) {
  const rel = relative(join(root, 'docs'), file).split('\\').join('/');
  let url = '/' + rel.replace(/\.md$/, '.html');
  url = url.replace(/(^|\/)index\.html$/, '$1');
  const src = readFileSync(file, 'utf8').replace(/^---\n[\s\S]*?\n---\n/, '');
  const title = (src.match(/^# (.+)$/m) || [, rel])[1];
  const headings = [...src.matchAll(/^#{2,3} (.+)$/gm)].map((m) => m[1]);
  const content = src
    .replace(/^#+ /gm, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[`*|>]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const first = rel.split('/')[0];
  const lang = first === 'ja' || first === 'ko' ? first : 'en';
  return { id, title, url, headings, content, lang };
}

const corpus = walk(join(root, 'docs')).map(toDoc);
const corpusIndex = createIndex(corpus);
const cases = JSON.parse(readFileSync(join(root, 'test/search-cases.json'), 'utf8'));

test('evaluation cases from docs/', () => {
  assert.ok(cases.length >= 20 && cases.length <= 50);
  const failed = [];
  for (const c of cases) {
    const top = corpusIndex.search(c.q, { limit: c.top || 1, lang: c.lang }).map((r) => corpus[r.id].url);
    if (!top.includes(c.expect)) failed.push(`${c.q} -> ${top.join(', ') || '(none)'} (expected ${c.expect})`);
  }
  assert.deepEqual(failed, []);
});

test('fuzzy: one edit away for words of 4+ letters, at half score', () => {
  const ix = createIndex([
    { id: 0, title: 'search', headings: [], content: '' },
    { id: 1, title: 'other', headings: [], content: 'search' },
    { id: 2, title: 'cat', headings: [], content: '' },
  ]);
  assert.deepEqual(ids(ix, 'serch'), [0, 1]);
  assert.deepEqual(ids(ix, 'seacrh'), []);
  assert.deepEqual(ids(ix, 'ca'), [2]);
  assert.deepEqual(ids(ix, 'cot'), []);
  const exact = ix.search('search')[0].score;
  const fuzzy = ix.search('serch')[0].score;
  assert.ok(fuzzy < exact);
});

test('segmenter words add score but do not change what matches', () => {
  const docsSeg = [
    { id: 0, title: '設定', headings: [], content: '東京都の設定' },
    { id: 1, title: '設定', headings: [], content: '京都の設定' },
  ];
  const plain = createIndex(docsSeg);
  const seg = createIndex(docsSeg, { segmenter: new Intl.Segmenter('ja', { granularity: 'word' }) });
  assert.deepEqual(ids(plain, '京都').sort(), [0, 1]);
  assert.deepEqual(ids(seg, '京都').sort(), [0, 1]);
  const s = seg.search('京都');
  assert.equal(s[0].id, 1);
});

// An index of body-only documents, for the Japanese matching tests.
function bodies(...contents) {
  return createIndex(contents.map((content, id) => ({ id, title: '', headings: [], content })));
}

function marked(ix, q, content) {
  const r = ix.search(q)[0];
  return r.matches.map((m) => content.slice(m.start, m.end));
}

test('CJK runs must appear unbroken', () => {
  assert.deepEqual(ids(bodies('東京と京都'), '東京都'), []);
  assert.deepEqual(ids(bodies('設定する。鑑定変わる。変更する。'), '設定変更'), []);
  const text = '設定を変更する';
  assert.deepEqual(ids(bodies(text), '設定 変更'), [0]);
  assert.deepEqual(ids(bodies(text), '設定変更'), []);
  assert.deepEqual(marked(bodies(text), '設定 変更', text), ['設定', '変更']);
});

test('final long vowel mark of 4+ letter katakana words is ignored', () => {
  for (const content of ['サーバー', 'サーバ']) {
    for (const q of ['サーバー', 'サーバ', 'ｻｰﾊﾞｰ', 'さーばー']) assert.deepEqual(ids(bodies(content), q), [0], q + ' ' + content);
  }
  assert.equal(normalize('コピー'), 'こぴー');
  assert.equal(normalize('キー'), 'きー');
  const text = 'サーバーを起動する';
  assert.deepEqual(marked(bodies(text), 'サーバ', text), ['サーバー']);
  assert.deepEqual(ids(bodies('ファイルのコピペ'), 'のコピー'), []);
  assert.deepEqual(ids(bodies('このコピペ'), 'このコピー'), []);
});

test('particles are dropped only when nothing matches', () => {
  assert.deepEqual(ids(bodies('設定の方法', '設定方法'), '設定の方法'), [0]);
  assert.deepEqual(ids(bodies('設定方法'), '設定の方法'), [0]);
  assert.deepEqual(ids(bodies('色は自由に変えるとよい'), '色を変える'), [0]);
  assert.deepEqual(ids(bodies('はじめて使う'), 'はじめに'), []);
});
