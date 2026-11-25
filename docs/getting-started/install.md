# インストール

## 1. 設定ファイルを置く

公開したいリポジトリに `docs/_config.yml` を作り、次のように書きます。必須は `remote_theme` の1行だけです。ほかの行は Jekyll と GitHub Pages の一般の設定で、要らなければ行ごと削除します。

```yaml
# 使うテーマ(必須)
remote_theme: akilasatolu/tiny-md2docs
# サイト名。ヘッダーとブラウザのタブに出る。不要なら削除
title: My Docs
# サイトの説明。検索エンジンや SNS で使われる。不要なら削除
description: 製品の使い方をまとめたドキュメント
# サイト全体の言語。<html lang> と画面の文言に使われる。省略すると en。
# en 以外にするときは、画面の文言を theme_options.strings に書く(「多言語」のページ)。不要なら削除
lang: en
# 元の .md ファイルを公開しない(HTML のページだけを公開する)。.md も公開してよければ、この2行を削除
optional_front_matter:
  remove_originals: true
```

テーマ独自の設定(`theme_options`)は、[設定](../guide/config.md)を見てください。

## 2. ページを書く

`docs/` の下に Markdown のファイルを置きます。ページの先頭の front matter(`---` で囲んだ設定)は、なくてもかまいません。ページの名前には、本文の最初の見出しが使われます。

ページどうしのリンクは、リンク先の `.md` ファイルへの相対パスで書きます。公開するときに、`.html` のページへのリンクに変わります。たとえばこのページ(`docs/getting-started/install.md`)から[概要](../index.md)へのリンクは、`../index.md` と書いています。

- `/` で始まるパス(`/guide/config.md` など)は使いません。`docs/` の直下のページ以外では、リンクが変換されずに切れます。
- `.html` へのリンクを直接書くのも避けます。`/` で始まる `.html` のリンクは、プロジェクトのページ(`https://user.github.io/repo/`)で切れます。

## 3. GitHub Pages を有効にする

リポジトリの Settings → Pages を開き、「Build and deployment」の「Source」で公開元(公開の方法)を選びます。どの方法でも、数分たつとサイトが公開されます。

### ブランチの docs フォルダから公開する

ふつうはこの方法を使います。

1. 「Source」で「Deploy from a branch」を選びます。
2. 「Branch」で、公開するブランチと `/docs` フォルダを選び、「Save」を押します。

### ブランチのルートから公開する

ドキュメントだけのリポジトリなどで、リポジトリのルートを公開する方法です。

1. `_config.yml` と Markdown のファイルを、`docs/` ではなくリポジトリのルートに置きます。このドキュメントの `docs/` は、リポジトリのルートに読み替えてください。
2. 「Source」で「Deploy from a branch」を選びます。
3. 「Branch」で、公開するブランチと `/(root)` フォルダを選び、「Save」を押します。

ルートから公開すると、リポジトリのほかのファイルも公開されます。公開したくないファイルやフォルダは、`_config.yml` の `exclude` に書きます。`exclude` を書くと、Jekyll が既定で除いているファイル(`Gemfile`、`node_modules` など)の一覧が置き換わります。次の例のように、既定のものも一緒に書きます。

```yaml
exclude:
  # Jekyll の既定の除外
  - Gemfile
  - Gemfile.lock
  - node_modules
  - vendor/bundle/
  - vendor/cache/
  - vendor/gems/
  - vendor/ruby/
  # 独自のドメインを使うときのファイル
  - CNAME
  # 公開したくないもの
  - README.md
  - src/
```

### GitHub Actions で公開する

ビルドの前に処理を足したいときなど、自分のワークフローで公開する方法です。

1. 「Source」で「GitHub Actions」を選びます。
2. 次のワークフローを `.github/workflows/pages.yml` に置き、公開するブランチに push します。`branches` は公開するブランチの名前にします。

```yaml
name: Deploy docs to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Pages
        uses: actions/configure-pages@v5
      - name: Build with Jekyll
        uses: actions/jekyll-build-pages@v1
        with:
          source: ./docs
          destination: ./_site
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v5
```
