# インストール

## 1. 設定ファイルを置く

公開したいリポジトリに `docs/_config.yml` を作り、次の1行を書きます。

```yaml
remote_theme: akilasatolu/tiny-md2docs
```

サイトの名前を出したいときは、`title` も書きます。

```yaml
remote_theme: akilasatolu/tiny-md2docs
title: My Docs
```

## 2. ページを書く

`docs/` の下に Markdown のファイルを置きます。ファイル同士のリンクは、リンク先を `.md` のまま書けます。たとえばこのページから[概要](../index.md)へのリンクは、`../index.md` と書いています。

## 3. GitHub Pages を有効にする

リポジトリの Settings → Pages で、公開元に「Deploy from a branch」を選び、ブランチと `/docs` フォルダを指定します。

数分たつと、サイトが公開されます。
