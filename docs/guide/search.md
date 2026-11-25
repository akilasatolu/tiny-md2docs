---
ref: search
---

# Search

The search box in the header searches the pages of the site. It does not use an external service; the browser searches an index built at build time.

## How to use it

- Press the `/` key to move to the search box.
- As you type, up to 10 matching pages from titles, headings, and body text appear.
- When results appear, the first page is selected (colored). Use the ↑ and ↓ keys to change the selection, and Enter to open the selected page. Esc closes the results.
- With the Tab key, you can move to the × at the right end of the search box, then to each result page. Press Enter on a result page to open it, and Esc to go back to the search box.
- While you type, the × at the right end of the search box clears the input.

## Searching Japanese, Chinese, and Korean

Text in Japanese, Chinese, and Korean is matched with overlapping pairs of two characters (for "設定変更", these are "設定", "定変", and "変更"). Because of this, a word in the middle of a sentence is found even without word separators.

Before searching, characters are normalized as follows.

- Full-width letters and digits and half-width kana are converted to ordinary characters. "ＡＢＣ" is found by "abc", and "ｶﾞｲﾄﾞ" by "ガイド".
- Katakana and hiragana are not distinguished. "がいど" also finds "ガイド".
- Upper and lower case letters and accent marks are not distinguished. "café" is found by "cafe".
- Voiced and semi-voiced marks are distinguished. "が" does not find "か".

If you separate several words with spaces, only pages that contain all of the words appear.

## Ranking

Pages that match in the title rank above pages that match only in the body.

## Exclude pages from search

Write `search_exclude: true` in a page's front matter, and the page does not appear in search. To turn off search for the whole site, set `theme_options.search: false`.

The body text put in the index is limited to 5000 characters per page. You can change it with `theme_options.search_content_limit`. If you have many pages and the index is heavy, make it smaller.
