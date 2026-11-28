# 変更履歴

## v0.3.3

- 列の多い日本語の表が1文字ずつ折れるのと、長い URL で画面が横にはみ出すのを修正
- サイドバーの自動の並びで、`index.md` のないフォルダは `README.md` の見出しをグループ名にする
- サイドバーの自動の並びで、各フォルダの先頭を `index.md`(なければ `README.md`)にした。名前が前のファイルがあるフォルダは、順と前後のリンクが変わる
- 波かっこの書き方、トップページ、使えない書き方などを文書に追記

## v0.3.2

- 検索窓の×ボタンのホバーの背景が、枠線にかからないように修正
- CSS と JS の合計の上限を 10 KB にした

## v0.3.1

- JavaScript のコメントの行と字下げを除き、容量を減らした
- ダークモードの切り替えボタンを押すとエラーが出て、ボタンの読み上げ用の名前が変わらない不具合を直した

## v0.3.0

互換性がなくなる変更があります。必要な機能に絞りました。

- 多言語は、言語のフォルダ(`docs/ja/` など)で分ける方式だけにしました。ファイル名の方式(`x.ja.md`)は使えません。移し方は次のとおりです。
  - `docs/x.ja.md` を `docs/ja/x.md` にする。ページ間のリンクと画像のパス、`nav.<lang>.yml` の URL を直す(`/x.ja.html` は `/ja/x.html`)。公開される URL も変わります
  - `lang_layout` の行は消してかまいません
  - `it/` や `id/` のような2文字の名前のフォルダは、言語とみなされます
- 設定の `sidebar`、`search`、`prev_next`、`toc`、`breadcrumb`、`code_copy`、`top_link`、`heading_link`、`github_link`、`search_content_limit`、`lang_layout` を削除。指定しても無視され、部品は常に出ます
- パンくず、「ページ先頭へ戻る」、目次の読んでいる見出しの強調、`Intl.Segmenter` による検索の順位の補正を削除
- 前の版のままにするときは `remote_theme: akilasatolu/tiny-md2docs@v0.2.2` と指定します

## v0.2.2

- `_includes/head-custom.html` と `_includes/body-custom.html` で、`<head>` と `</body>` の直前に足せる
- `@import "{{ site.theme }}";` で読み込める
- `post` レイアウトを追加。投稿(`_posts`)がテーマの画面で表示される
- `{% highlight %}` のコードにもコピーのボタンを出す(行番号はコピーしない)
- テーマのロゴ画像(`/assets/images/tm2d-mark.svg`、`tm2d-wordmark.svg`)は配らない

## v0.2.1

- `theme_options.lang_layout: folder` を追加。言語のフォルダ(`docs/ja/` など)で多言語にする形も選べる。サイトの `lang` の言語は `docs/` の直下に置く。指定がなければ、今までどおりファイル名で決まる
- `v0.1.5` 以前のフォルダ構成から移るときは、`lang_layout: folder` を足し、`_config.yml` の `defaults` の `lang` を消す。翻訳どうしは、`ref` ではなく、言語のフォルダを除いたパスが同じファイルになる。ページごとの設定(`nav_order` など)は戻らない

## v0.2.0

互換性がなくなる変更があります。

- ページの言語は、ファイル名で決める方式に変更。`config.md` はサイトの `lang`、`config.ja.md` は日本語。同じフォルダで言語を除いた名前が同じファイルは、翻訳どうしになる
- ページごとの設定の `nav_order`、`nav_exclude`、`search_exclude`、`toc`、`description`、`image`、`lang`、`ref` を削除。`defaults` で指定しても効かない。順番を決めるには `nav.yml` を使う
- これまで検索や自動のサイドバーから外していたページも出る
- 言語ごとのフォルダ(`docs/ja/` など)を使うサイトは、次のように移してください。`docs/ja/x.md` を `docs/x.ja.md` にする。`_config.yml` の `defaults` の `lang` を消す。ページ間のリンクと画像のパス、`nav.<lang>.yml` の URL を直す(`/ja/x.html` は `/x.ja.html`)。公開される URL も変わります
- 前の版のままにするときは `remote_theme: akilasatolu/tiny-md2docs@v0.1.5` と指定します

## v0.1.5

互換性がなくなる変更があります。

- 導入の指定を `@v0` に変更。`@v0` を指定すると、新しい版が次のビルドから反映される
- 本文用のクラスを削除
  - ボタン: `.button`、`.button-*`、`.disabled`
  - バッジ: `.badge`、`.badge-*`
  - 表示結果の枠: `.preview`
  - 装飾: `.font-size-*`、`.font-weight-*`、`.font-family-mono`、`.line-height-*`、`.letter-spacing-*`、`.text-transform-uppercase`、`.heading-*`、`.align-*`、`.color-*`、`.background-*`、`.display-*`、`.float-*`、`.visually-hidden`、`.justify-content-*`、`.vertical-align-*`、`.margin-*`、`.padding-*`、`.from-768-*`、`.from-1200-*`
- 色の CSS 変数 `--tm2d-color-*` を削除
- 「UI パーツ」のページを削除
- これらを使っているサイトは、`docs/assets/css/style.scss` で `@import "tm2d";` の後ろに同じ名前のクラスを定義すると、本文を直さずに使えます。前の版のままにするときは `remote_theme: akilasatolu/tiny-md2docs@v0.1.4` と指定します

```scss
.margin-top-4 { margin-top: 1rem !important; }
```

## v0.1.4

- 検索の本文は、検索窓に入ったときに各ページから読み込む方式に変更
- `assets/js/search-ui.js` を上書きしているサイトは、新しい版に合わせる必要がある(合わせないと本文を検索できない)
- 画面の文言と `lang` の出力、CI の設定を調整

## v0.1.3

- タッチ画面で検索欄を押しても画面が拡大しないように、入力欄の文字を 16px に変更

## v0.1.2

- 狭い画面で検索欄を開いても本文が隠れないように、本文を欄の下に表示

## v0.1.1

- 言語の切り替えは、地球のアイコンを押すと開く一覧に変更
- ヘッダーのボタンは、GitHub、言語の順に変更
- 狭い画面でも GitHub のアイコンを表示
- 狭い画面で入りきらないサイト名は省略して表示

## v0.1.0

最初の版。

- `remote_theme` の1行で使える、GitHub Pages 向けの Jekyll テーマ
- サイドバー(`nav.yml` か、フォルダからの自動の並び)、前後リンク、パンくず、目次
- 日本語に対応したサイト内検索(あいまい検索、Intl.Segmenter による順位の補正)
- ダークモード(`auto`、`light`、`dark`)
- CSS 変数による色、文字、幅の変更
- 注意書きの囲み、コードのコピー、404 ページ
- 多言語(言語ごとのフォルダ、`nav.<lang>.yml`、言語の切り替え、言語ごとの文言の上書き)
- 既定の言語と画面の文言は英語(ほかの言語の文言は `theme_options.strings` に書く)
- フッターの「Powered by tiny-md2docs」の表示
- 自動の並びで、フォルダの `index.md` もサイドバーの項目に表示
- 注意書きの囲みのタイトル(`data-title`)
- UI パーツ(ボタン、バッジ、表示結果の枠、色・文字・配置・余白・画面幅のユーティリティクラス)
- 「ページ先頭へ戻る」と見出しのリンク
- 印刷用のスタイル、h5・h6 の見出し
- サイドバーとパンくずの階層は、段数の制限なし(`nav.yml` の入れ子は48段まで)
- 本文の折りたたみ(`<details>`)のスタイル
- タスクリストと定義リストのスタイル
- 目次から見出しを外す `no_toc`
- 移動先のあるグループは、パンくずがリンク
- 日本語の検索で、続いて入力した語は続いた形で照合し、カタカナ語の末尾の長音の違いと、0件のときの助詞を吸収
