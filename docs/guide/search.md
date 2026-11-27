---
ref: search
---

# Search

The search box in the header searches the pages of the site. It does not use an external service; the browser searches the published pages: when you first enter the search box, it reads the list of pages made at build time, then reads each page.

## How to use it

- Press the `/` key to move to the search box.
- As you type, up to 10 matching pages from titles, headings, and body text appear.
- When results appear, the first page is selected (colored). Use the ↑ and ↓ keys to change the selection, and Enter to open the selected page. Esc closes the results.
- With the Tab key, you can move to the × at the right end of the search box, then to each result page. Press Enter on a result page to open it, and Esc to go back to the search box.
- While you type, the × at the right end of the search box clears the input.

## Supported languages

Search changes how it matches depending on the type of character.

| Type of character | Examples | How it matches |
| --- | --- | --- |
| Han characters, hiragana, katakana, hangul | Japanese, Chinese, Korean | Overlapping pairs of two characters |
| Languages that separate words with spaces, such as the Latin and Cyrillic scripts | English, French, German, Vietnamese, Russian, Arabic and Hebrew (written without vowel marks) | Words |

- Simplified and traditional Chinese characters are treated as different characters. Searching "設置" does not find "设置".
- Russian "й" and "и", and "ё" and "е", are treated as the same letter.
- Languages that do not put spaces between words (such as Thai) are not guaranteed to work. The text between spaces or symbols becomes one whole word, so a search from the middle of a word does not find it.
- Languages that use combining marks such as vowel signs (such as Thai, Hindi, and Arabic or Hebrew written with vowel marks) are not guaranteed to work. Words are cut at the marks, so a page may not be found, or unrelated pages may be mixed in.
- Search has no dictionary for each language. Words are separated only by the type of character.

## Searching Japanese, Chinese, and Korean

Text in Japanese, Chinese, and Korean is matched with overlapping pairs of two characters (for "設定変更", these are "設定", "定変", and "変更"). Because of this, a word in the middle of a sentence is found even without word separators.

A run of Han characters, kana, or hangul typed without spaces must appear **as it is, unbroken,** in the title, a heading, or the body. Searching "東京都" does not find a page that only says "東京と京都".

Before searching, characters are normalized as follows.

- Full-width letters and digits and half-width kana are converted to ordinary characters. "ＡＢＣ" is found by "abc", and "ｶﾞｲﾄﾞ" by "ガイド".
- Katakana and hiragana are not distinguished. "がいど" also finds "ガイド".
- The final long vowel mark "ー" of a katakana word of four or more characters is ignored, so "サーバー" and "サーバ" are the same. The same applies to a word of four or more characters typed in hiragana. Short words such as "コピー" and "キー" are left as they are.
- Upper and lower case letters and accent marks are not distinguished. "café" is found by "cafe".
- Voiced and semi-voiced marks are distinguished. "が" does not find "か".

If you separate several words with spaces, only pages that contain all of the words appear.

When nothing is found, Japanese particles (の, を, に, は, が, で, と, へ, も, や, から, まで, より, など) between Han characters, katakana, or letters and digits are replaced with spaces and the search runs again. "設定の方法" then finds a page that says "設定方法".

## How search works

- What is searched: only pages in the same language (`<html lang>`) as the current page. To split pages by language, see [Multilingual](i18n.md).
- How words are split: Han characters, hiragana, katakana, and hangul are split into overlapping pairs of two characters, as described in "Searching Japanese, Chinese, and Korean" above. Everything else is split into words made of runs of letters and digits. Symbols such as `_`, `-`, and `.` separate words, so `theme_options` becomes the two words `theme` and `options`. The pairs are used for ranking points. To match, the run must appear unbroken, as described above.
- Single-character words: they are not matched as pairs or words. Search finds pages where that one character appears anywhere in the title, headings, or body.
- Prefix match on the last word: for languages matched by word, the last word you type is matched as a prefix. "caf" finds "café".
- One letter off: for languages matched by word, if a word of four or more letters does not match, words one letter off (one letter added, removed, or replaced) are also searched. "serch" finds "search". Swapped letters ("seacrh") are not found.

## Ranking

For each word you type, the points for each place it matches are added up, and pages are ordered by the total, largest first.

| Place | Points |
| --- | --- |
| Title | 10 |
| Heading | 4 |
| Body | 1 (plus 0.2 for each time the word appears, up to 5 times) |

- When the title contains the whole phrase you typed, 5 is added.
- A word that matched one letter off gets half the points.
- When the browser supports `Intl.Segmenter`, matching a word that can be separated as a word adds half the points for that place. The pages that match do not change; only the ranking is affected.
- When the points are equal, shorter titles come first, then the URL order.

## Exclude pages from search

Write `search_exclude: true` in a page's front matter, and the page does not appear in search. To turn off search for the whole site, set `theme_options.search: false`.

Search looks at up to 5000 characters of the body of each page. You can change it with `theme_options.search_content_limit`. The first search reads all pages of the current language, so it takes longer on a site with many pages. A page that cannot be read within 10 seconds is found by its title only.
