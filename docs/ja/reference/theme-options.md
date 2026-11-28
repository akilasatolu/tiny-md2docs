# theme_options

`docs/_config.yml` の `theme_options` に書ける項目です。

| 項目 | 既定値 | 内容 |
| --- | --- | --- |
| `dark_mode` | `auto` | `auto`、`light`、`dark` のどれか |
| `logo` | なし | ヘッダーのロゴ画像のパス。なければサイト名の文字だけ |
| `favicon` | なし | ファビコンのパス。なければ出さない |
| `strings` | なし | 画面の文言の上書き。言語ごとに分けて書くこともできる([多言語](../guide/i18n.md)) |

## 画面の文言

`strings` に書けるキーと、既定の文言(英語)です。テーマが持っている文言は英語だけです。英語以外の言語では、言語ごとに書きます([多言語](../guide/i18n.md))。

| キー | 既定の文言 |
| --- | --- |
| `skip_to_content` | Skip to content |
| `nav_label` | Documentation |
| `menu_open` | Open menu |
| `menu_close` | Close menu |
| `search_label` | Search |
| `search_placeholder` | Search the docs |
| `search_open` | Open search |
| `search_clear` | Clear search |
| `search_no_results` | No results |
| `search_results_count` | {n} results(`{n}` が件数になる) |
| `toggle_dark` | Switch to dark mode |
| `toggle_light` | Switch to light mode |
| `github` | GitHub |
| `toc_title` | On this page |
| `prev` | Previous |
| `next` | Next |
| `copy` | Copy |
| `copied` | Copied |
| `not_found_title` | Page not found |
| `not_found_body` | The page you are looking for may have been moved or deleted. |
| `heading_link` | Link to this section |
| `lang_switch` | Language |
