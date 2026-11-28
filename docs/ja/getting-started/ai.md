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
- テーマが用意するもの(レイアウト、サイドバー、検索、目次、404 ページ)は作りません。_layouts と _includes も要りません。スクリプトを足すときの _includes/head-custom.html と _includes/body-custom.html は作れます。

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
remote_theme: akilasatolu/tiny-md2docs@v0
```

よく使う形:

```yaml
remote_theme: akilasatolu/tiny-md2docs@v0
title: My Docs
description: 製品の使い方をまとめたドキュメント
lang: en
optional_front_matter:
  remove_originals: true
logo: /assets/images/logo.svg
favicon: /assets/images/favicon.svg
```

- テーマの画面の文言は英語だけです。

直下の設定:
- remote_theme: テーマ。@ のあとにブランチ、タグ、コミットを書くと版を固定できます。
- title: サイト名。省略するとリポジトリ名かアカウント名です。
- description: サイトの説明。省略するとリポジトリの説明です。
- image: SNS で共有したときの画像の既定値。
- lang: 言語のフォルダにないページの言語。省略すると en です。
- logo: ヘッダーのロゴ画像のパス(サイトのルートから。/repo は付けない)。
- favicon: ファビコンのパス(同上)。
- optional_front_matter: remove_originals: true で、元の .md ファイルを公開しません。enabled: false にすると front matter のない Markdown はページになりません。
- readme_index: index.md のないフォルダでは README.md がトップページになります。remove_originals、enabled、with_frontmatter を指定できます。
- exclude: 公開しないファイル。書くと Jekyll の既定の一覧(Gemfile、Gemfile.lock、node_modules、vendor/bundle/、vendor/cache/、vendor/gems/、vendor/ruby/)と CNAME が置き換わるので、一緒に書きます。

## ページの書き方
- Markdown(GitHub Pages の kramdown、GFM)で書きます。
- front matter は要りません。ページの名前は本文の最初の見出しです。各ページは「# 見出し」で始めます。
- ページどうしのリンクは、リンク先の .md ファイルへの相対パスで書きます。例: [使い方](guide/usage.md)、[戻る](../overview.md)。翻訳したページでも相対パスで書きます。同じ言語のフォルダの中に移ります。/ で始まるパスや .html への直接のリンクは書きません。
- 画像は相対パスで書きます。例: ![図](../assets/images/figure.png){: width="480" }
- h2 と h3 の見出しが合わせて2つ以上あると、目次が出ます。見出しを目次から外すには、見出しの次の行に {: .no_toc } を書きます。
- 本文に二重の波かっこや「波かっこと %」を書くと、Liquid の命令として処理されます。そのまま見せるときは、raw タグ({% raw %} と、対になる endraw タグ)で囲みます。

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

- url のない項目はグループで、children にまとめます。
- url はサイトのルートからのパスで、末尾は .html、トップページは / です。
- 入れ子は48段までです。

nav.yml がなければ、フォルダの構成から自動で並びます。フォルダがグループになり、グループ名はそのフォルダの index.md(なければ README.md)の最初の見出し(どちらもなければフォルダ名)です。順番はファイルのパスの順(各フォルダでは index.md、なければ README.md が先頭)です。順番を変えるときやページを出したくないときは nav.yml を使います。

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
- サイト全体の言語のページは docs/ の直下に、翻訳は言語の名前のフォルダに置きます: docs/guide/config.md と docs/ja/guide/config.md。設定は要りません。サイト全体の言語のフォルダは作りません。
- 言語のフォルダの名前は ISO 639-1 の2文字で、地域も付けられます(zh-CN)。この形の名前のフォルダは、いつも言語とみなされます。
- 言語のフォルダを除いたパスが同じファイルが翻訳で、翻訳のあるページに言語の切り替えが出ます。共通の画像へのパスは、言語のフォルダの中では ../ が1つ多くなります。

- 並びを手で決めるときは docs/_data/nav.ja.yml のように言語ごとに置きます。URL は /ja/guide/config.html のように書きます。
- 言語ごとのトップページは <言語>/index.md です(URL は /<言語>/)。
- サイドバーと検索は、今のページと同じ言語のページだけが対象です。

## 使えないことと制限
- GitHub Pages の標準のビルドで動くものだけを使います。独自のプラグインは使えません。
- Mermaid の図は描かれません。
- 注意書きの囲みは note と warning だけです。
- フッターの「Powered by tiny-md2docs」は消せません。
- 言語をまたいだ検索はできません。
- README.md、LICENSE.md などは、front matter がないとページになりません(README.md は、index.md のないフォルダのトップページになる場合を除きます)。
- 余白、色、文字、ボタン、バッジ、表示の見本の枠のクラスはありません。必要なら docs/assets/css/style.scss に定義します。
````
{% endraw %}
