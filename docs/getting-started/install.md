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
# ページの言語。<html lang> と画面の文言に使われる。省略すると ja。不要なら削除
lang: ja
# 元の .md ファイルを公開しない(HTML のページだけを公開する)。.md も公開してよければ、この2行を削除
optional_front_matter:
  remove_originals: true
```

テーマ独自の設定(`theme_options`)は、[設定](../guide/config.md)を見てください。

## 2. ページを書く

`docs/` の下に Markdown のファイルを置きます。ファイル同士のリンクは、リンク先を `.md` のまま書けます。たとえばこのページから[概要](../index.md)へのリンクは、`../index.md` と書いています。

## 3. GitHub Pages を有効にする

リポジトリの Settings → Pages で、公開元に「Deploy from a branch」を選び、ブランチと `/docs` フォルダを指定します。

数分たつと、サイトが公開されます。
