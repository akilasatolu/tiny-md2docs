// The "Information for AI" pages are written by hand. These tests keep them up to date.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const read = (p) => readFileSync(resolve(root, p), 'utf8');
const LANGS = ['', '.ja', '.ko'];

// The text a reader copies: the only ````text block of the page.
function block(page) {
  const found = [...page.matchAll(/^````text\n([\s\S]*?)\n````$/gm)];
  assert.equal(found.length, 1);
  return found[0][1];
}

// Names the reference pages of one language define: settings, strings, front matter
// and CSS variables.
function names(lang) {
  const out = [];
  const doc = (p) => read(`docs/${p.replace(/\.md$/, `${lang}.md`)}`);
  for (const p of ['reference/theme-options.md', 'reference/site-config.md']) {
    out.push(...[...doc(p).matchAll(/^\| `([a-z_]+)` \|/gm)].map((m) => m[1]));
  }
  out.push(...[...doc('guide/colors.md').matchAll(/^\| `(--tm2d-[a-z-]+)` \|/gm)].map((m) => m[1]));
  return [...new Set(out)];
}

// Names that do not appear as a whole word in the page's block.
function missing(page, list) {
  const text = block(page);
  return list.filter((n) => !new RegExp(`(?<![A-Za-z0-9_-])${n}(?![A-Za-z0-9_-])`).test(text));
}

for (const lang of LANGS) {
  const path = `docs/getting-started/ai${lang}.md`;

  test(`${path}: one block wrapped in raw`, () => {
    const page = read(path);
    assert.match(page, /\{% raw %\}\n````text\n[\s\S]*\n````\n\{% endraw %\}/);
    const text = block(page);
    assert.ok(!text.includes('{{'));
    assert.deepEqual(text.match(/\{%[^}]*%\}/g), ['{% raw %}']);
    assert.equal(text.split('{%').length, 2);
  });

  test(`${path}: lists every documented setting and variable`, () => {
    const list = names(lang);
    assert.ok(list.length > 50, String(list.length));
    const page = read(path);
    assert.deepEqual(missing(page, list), []);
    assert.deepEqual(missing(page.replaceAll('search_content_limit', ''), list), ['search_content_limit']);
  });

  test(`${path}: dark variables exist in the theme`, () => {
    const used = block(read(path)).match(/--tm2d-dark-[a-z-]+/g);
    const sass = read('_sass/tm2d/_variables.scss');
    assert.ok(used.length > 0);
    assert.deepEqual(used.filter((v) => !sass.includes(`${v}:`)), []);
  });

  // jekyll-relative-links rewrites links to existing files, even inside code blocks.
  test(`${path}: sample links point to files that do not exist`, () => {
    const links = [...block(read(path)).matchAll(/\]\(([^)]+?\.(?:md|png|svg))\)/g)].map((m) => m[1]);
    assert.ok(links.length > 0);
    assert.deepEqual(links.filter((l) => existsSync(resolve(root, dirname(path), l))), []);
  });
}
