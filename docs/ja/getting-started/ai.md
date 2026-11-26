---
ref: ai
search_exclude: true
---

# AI に渡す情報

AI にドキュメントを作らせるときに渡す情報を、下の枠にまとめています。枠の右上のコピーのボタンで、全文をコピーできます。

1. 下の枠の全文をコピーして、AI に貼ります。
2. 続けて、作りたいドキュメントの内容(製品やプロジェクトの説明、対象の読者、言語、載せたいページ)を書いて送ります。
3. AI が作ったファイルをリポジトリに置き、[インストール](install.md)の「3. GitHub Pages を有効にする」の手順で公開します。

{% raw %}
````text
# tiny-md2docs(tm2d)でドキュメントを作る

あなたは、GitHub Pages 向けの Jekyll テーマ tiny-md2docs(tm2d)を使うドキュメントを作ります。次の仕様に従ってください。

## 進め方
- 製品の内容、対象の読者、言語、載せるページが分からないときは、推測で書かずに質問してください。
- 作るファイルは、パスと中身の全文を示してください。
- テーマが用意するもの(レイアウト、サイドバー、検索、目次、404 ページ)は作りません。_layouts と _includes も要りません。

## ファイルの置き方
- すべて docs/ の下に置きます。
- docs/_config.yml: 設定(必須)
- docs/index.md: トップページ
- docs/**/*.md: ページ。公開すると .md が .html の URL になります。
- docs/_data/nav.yml: サイドバーの並び(任意)
- docs/assets/css/style.scss: 色などの変更(任意)
- 画像などは docs/assets/images/ などに置きます。
- 公開は、リポジトリの Settings → Pages で「Deploy from a branch」を選び、ブランチと /docs フォルダを指定します。

## docs/_config.yml
最小は次の1行です。

```yaml
remote_theme: akilasatolu/tiny-md2docs
```

よく使う形:

```yaml
remote_theme: akilasatolu/tiny-md2docs
title: My Docs
description: 製品の使い方をまとめたドキュメント
lang: en
optional_front_matter:
  remove_originals: true
theme_options:
  logo: /assets/images/logo.svg
  favicon: /assets/images/logo.svg
  dark_mode: auto
```

- 日本語だけのサイトでは lang: ja にして、画面の文言を theme_options.strings に書きます(下の「多言語」のキー)。言語が1つのときは、次のように strings の直下に書けます。

```yaml
lang: ja
theme_options:
  strings:
    search_placeholder: ドキュメントを検索
    next: 次へ
```

直下の設定:
- remote_theme: テーマ。@ のあとにブランチ、タグ、コミットを書くと版を固定できます。
- title: サイト名。省略するとリポジトリ名かアカウント名です。
- description: サイトの説明。省略するとリポジトリの説明です。
- image: SNS で共有したときの画像の既定値。
- lang: サイト全体の言語。省略すると en です。
- theme_options: テーマの設定(下の表)。
- defaults: フォルダごとの front matter の値。多言語で使います。
- optional_front_matter: remove_originals: true で、元の .md ファイルを公開しません。enabled: false にすると front matter のない Markdown はページになりません。
- readme_index: index.md のないフォルダでは README.md がトップページになります。remove_originals、enabled、with_frontmatter を指定できます。
- exclude: 公開しないファイル。書くと Jekyll の既定の一覧(Gemfile、Gemfile.lock、node_modules、vendor/bundle/、vendor/cache/、vendor/gems/、vendor/ruby/)と CNAME が置き換わるので、一緒に書きます。

theme_options(省略した項目は既定値):

| 項目 | 既定値 | 内容 |
| --- | --- | --- |
| sidebar | true | false でサイドバーを消す |
| search | true | false で検索を消す |
| dark_mode | auto | auto、light、dark |
| prev_next | true | false で前後リンクを消す |
| toc | true | false で目次を消す |
| breadcrumb | true | false でパンくずを消す |
| code_copy | true | false でコピーのボタンを消す |
| top_link | true | false で「ページ先頭へ戻る」を消す |
| heading_link | true | false で見出しのリンクを消す |
| github_link | true | false で GitHub へのリンクを消す |
| logo | なし | ロゴ画像のパス(サイトのルートから。/repo は付けない) |
| favicon | なし | ファビコンのパス(同上) |
| search_content_limit | 5000 | 索引に入れる本文の上限(1ページの文字数) |
| strings | なし | 画面の文言の上書き |

## ページの書き方
- Markdown(GitHub Pages の kramdown、GFM)で書きます。
- front matter は省略できます。ページの名前は title、なければ本文の最初の見出しです。各ページは「# 見出し」で始めます。
- ページどうしのリンクは、リンク先の .md ファイルへの相対パスで書きます。例: [使い方](guide/usage.md)、[戻る](../overview.md)。/ で始まるパスや .html への直接のリンクは書きません。
- 画像は相対パスで書きます。例: ![図](../assets/images/figure.png){: width="480" }
- h2 と h3 の見出しが合わせて2つ以上あると、目次が出ます。見出しを目次から外すには、見出しの次の行に {: .no_toc } を書きます。
- 本文に二重の波かっこや「波かっこと %」を書くと、Liquid の命令として処理されます。そのまま見せるときは、raw タグ({% raw %} と、対になる endraw タグ)で囲みます。

front matter の項目(どれも任意):

| 項目 | 内容 |
| --- | --- |
| title | ページの名前 |
| description | ページの説明 |
| image | SNS で共有したときの画像 |
| nav_order | 自動の並びでの順番(小さいほど先) |
| nav_exclude | true でサイドバーと前後リンクに出さない |
| search_exclude | true で検索に出さない |
| toc | false で目次を出さない |
| ref | 翻訳どうしで同じ値を書くと、言語の切り替えが出る |

## サイドバー
docs/_data/nav.yml があれば、その順と名前で並びます。

```yaml
- title: はじめに
  children:
    - title: 概要
      url: /
    - title: インストール
      url: /getting-started/install.html
- title: よくある質問
  url: /faq.html
```

- url のない項目はグループで、children にまとめます。url と children の両方を持つグループは、パンくずがリンクになります。
- url はサイトのルートからのパスで、末尾は .html、トップページは / です。
- 入れ子は48段までです。

nav.yml がなければ、フォルダの構成から自動で並びます。フォルダがグループになり、グループ名はそのフォルダの index.md の title(なければフォルダ名)です。順番は nav_order、同じならパスの順です。

## 本文で使える表示
- 見出し、太字、斜体、打ち消し、表、番号つきと番号なしのリスト、タスクリスト(- [ ] と - [x])、引用、区切り線、脚注([^1])、定義リスト(用語の次の行に「: 説明」)、略語(*[HTML]: HyperText Markup Language)
- コードのブロックは言語名を付けます。コピーのボタンが自動で付きます。
- 注意書きの囲みは note と warning の2種類です。

```markdown
> **メモ** 設定を変えたら、数分待ってから確かめます。
{: .note }

> この操作は元に戻せません。
{: .warning data-title="注意" }
```

- 折りたたみ:

```markdown
<details markdown="1">
<summary>詳しく見る</summary>

隠れている**文章**です。

</details>
```

- 本文の中の目次: 「* toc」の次の行に「{:toc}」

## UI パーツのクラス
段落などの次の行に {: .クラス名 } と書くか、文字のすぐ後ろに続けて書きます。HTML の class にも書けます。例: [はじめる](usage.md){: .button .button-primary }

- ボタン: `.button`、`.button-outline`、`.button-primary`、`.button-green`、`.button-purple`、`.button-red`、`.button-plain`(button 要素の装飾をなくす)、`.disabled`。`.button-*` の色と枠は `.button` と一緒に書きます。
- バッジ: `.badge`、`.badge-blue`、`.badge-green`、`.badge-purple`、`.badge-red`、`.badge-yellow`
- 表示の見本を囲む枠: `.preview`(中に Markdown を書くときは markdown="1")
- 文字の大きさ: `.font-size-1` から `.font-size-10`
- 太さ: `.font-weight-300`、`.font-weight-400`、`.font-weight-500`、`.font-weight-600`、`.font-weight-700`
- 書体と間隔: `.font-family-mono`、`.line-height-0`、`.line-height-body`、`.line-height-tight`、`.letter-spacing-0`、`.letter-spacing-wide`、`.letter-spacing-wider`、`.text-transform-uppercase`
- 見出しの見た目: `.heading-1` から `.heading-6`
- 文字の位置: `.align-left`、`.align-center`、`.align-right`
- 色: .color-色-1、.color-色-2、.background-色-1、.background-色-2。色は blue、green、yellow、red、purple、gray。1 は背景向き、2 は文字向き。
- 表示: `.display-block`、`.display-flex`、`.display-inline`、`.display-inline-block`、`.display-none`、`.float-left`、`.float-right`、`.visually-hidden`
- 配置: `.justify-content-start`、`.justify-content-end`、`.justify-content-space-between`、`.justify-content-space-around`、`.vertical-align-baseline`、`.vertical-align-bottom`、`.vertical-align-middle`、`.vertical-align-text-bottom`、`.vertical-align-text-top`、`.vertical-align-top`
- 余白(N に 4px を掛けた幅。N は 0、1、2、3、4、5、6、8、10、12、16): .margin-N、.padding-N、.margin-top-N(right、bottom、left、x、y も同じ。padding も同じ)、.margin-x-negative-N、`.margin-x-auto`
- 画面幅ごと: 表示と余白のクラスの先頭に from-768- か from-1200- を付けると、その幅以上でだけ効きます(例: .from-768-display-none)。

## 色、文字、幅の変更
docs/assets/css/style.scss を作ります。最初の2行と @import は必須です。

```scss
---
---

@import "tm2d";

:root {
  --tm2d-accent: #0a7d5a;
  --tm2d-dark-accent: #5fd0a8;
}
```

- 色: --tm2d-accent、--tm2d-accent-weak、--tm2d-bg、--tm2d-text、--tm2d-muted、--tm2d-subtle、--tm2d-border、--tm2d-link
- ダークモードの色は別の変数です: --tm2d-dark-accent、--tm2d-dark-accent-weak、--tm2d-dark-bg、--tm2d-dark-text、--tm2d-dark-muted、--tm2d-dark-subtle、--tm2d-dark-border。--tm2d-link にはダークモード用の変数がなく、既定では accent の色に合わせて変わります。
- 文字と幅: --tm2d-font-body、--tm2d-font-heading、--tm2d-font-mono、--tm2d-font-size、--tm2d-line-height、--tm2d-sidebar-width、--tm2d-toc-width、--tm2d-content-max-width
- 文字と背景のコントラストは 4.5:1 以上にします。

## 多言語
- サイト全体の言語のページはそのまま docs/ に置き、ほかの言語は docs/ja/ のように言語名のフォルダに置きます。フォルダ名と lang の値は同じにします。

```yaml
lang: en
defaults:
  - scope:
      path: ja
    values:
      lang: ja
theme_options:
  strings:
    ja:
      search_placeholder: ドキュメントを検索
      next: 次へ
```

- テーマの画面の文言は英語だけです。ほかの言語では theme_options.strings に言語ごとに書きます。
- 翻訳どうしのページには、同じ ref を front matter に書きます。
- 並びを手で決めるときは docs/_data/nav.ja.yml のように言語ごとに置きます。
- サイドバーと検索は、今のページと同じ言語のページだけが対象です。

strings のキー(かっこ内は英語の既定の文言):
skip_to_content (Skip to content)、nav_label (Documentation)、menu_open (Open menu)、menu_close (Close menu)、search_label (Search)、search_placeholder (Search the docs)、search_open (Open search)、search_clear (Clear search)、search_no_results (No results)、search_results_count ({n} results)、toggle_dark (Switch to dark mode)、toggle_light (Switch to light mode)、github (GitHub)、toc_title (On this page)、breadcrumb_label (Breadcrumb)、prev (Previous)、next (Next)、copy (Copy)、copied (Copied)、not_found_title (Page not found)、not_found_body (The page you are looking for may have been moved or deleted.)、top_link (Back to top)、heading_link (Link to this section)、lang_switch (Language)

## 使えないことと制限
- GitHub Pages の標準のビルドで動くものだけを使います。独自のプラグインは使えません。
- Mermaid の図は描かれません。
- 注意書きの囲みは note と warning だけです。
- フッターの「Powered by tiny-md2docs」は消せません。
- 言語をまたいだ検索はできません。
- README.md、LICENSE.md などは、front matter がないとページになりません(README.md は、index.md のないフォルダのトップページになる場合を除きます)。
````
{% endraw %}
