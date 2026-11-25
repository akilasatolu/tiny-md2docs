# theme_options

`docs/_config.yml` の `theme_options` に書ける項目です。

| 項目 | 既定値 | 内容 |
| --- | --- | --- |
| `sidebar` | `true` | `false` でサイドバーを消す |
| `search` | `true` | `false` で検索窓と索引を消す |
| `dark_mode` | `auto` | `auto`、`light`、`dark` のどれか |
| `prev_next` | `true` | `false` でページ下の前後リンクを消す |
| `toc` | `true` | `false` で目次を消す |
| `breadcrumb` | `true` | `false` でパンくずを消す |
| `code_copy` | `true` | `false` でコードのコピーのボタンを消す |
| `github_link` | `true` | `false` でヘッダーの GitHub へのリンクを消す。リンクはリポジトリの URL が分かるときだけ出る |
| `logo` | なし | ヘッダーのロゴ画像のパス。なければサイト名の文字だけ |
| `favicon` | なし | ファビコンのパス。なければ出さない |
| `search_content_limit` | `5000` | 索引に入れる本文の文字数の上限(1ページあたり) |
| `strings` | なし | 画面の文言の上書き。言語ごとに分けて書くこともできる([多言語](../guide/i18n.md)) |

## 画面の文言

`strings` に書けるキーと、既定の文言(日本語)です。言語が `en` のページでは、英語の文言が既定になります。

| キー | 既定の文言 |
| --- | --- |
| `skip_to_content` | 本文へ移動 |
| `nav_label` | ドキュメント |
| `menu_open` | メニューを開く |
| `menu_close` | メニューを閉じる |
| `search_label` | 検索 |
| `search_placeholder` | ドキュメントを検索 |
| `search_open` | 検索を開く |
| `search_clear` | 検索語を消す |
| `search_no_results` | 見つかりませんでした |
| `search_results_count` | {n} 件(`{n}` が件数になる) |
| `toggle_dark` | ダークモードに切り替え |
| `toggle_light` | ライトモードに切り替え |
| `github` | GitHub |
| `toc_title` | このページの内容 |
| `breadcrumb_label` | 現在の位置 |
| `prev` | 前へ |
| `next` | 次へ |
| `copy` | コピー |
| `copied` | コピーしました |
| `not_found_title` | ページが見つかりません |
| `not_found_body` | お探しのページは、移動したか削除された可能性があります。 |
| `lang_switch` | 言語 |
