# 設定

設定は、すべて `docs/_config.yml` に書きます。最小の設定は `remote_theme` の1行だけです。

## サイトの情報

```yaml
remote_theme: akilasatolu/tiny-md2docs
title: My Docs
description: 製品の使い方をまとめたドキュメント
lang: en
```

- `title` はヘッダーとブラウザのタブに出るサイト名です。
- `description` は検索エンジンや SNS で使われる説明文です。ページごとに front matter の `description` で上書きできます。
- `lang` はサイト全体の言語で、`<html lang>` と画面の文言に使われます。省略すると `en` です。英語以外の言語にするときは、[多言語](i18n.md)を見てください。

## テーマの設定

テーマの動きは `theme_options` の下にまとめて書きます。書かなかった項目は既定値になります。

```yaml
theme_options:
  logo: /assets/images/logo.svg
  favicon: /assets/images/logo.svg
  dark_mode: auto
  search: true
```

ロゴやファビコンのパスは、サイトのルートからのパスで書きます。プロジェクトページ(`https://user.github.io/repo/`)でも、`/repo` を付ける必要はありません。

すべての項目は [theme_options](../reference/theme-options.md) にあります。

## 画面の文言を変える

ボタンや検索窓の文言は、`theme_options.strings` で上書きできます。ここに書いた文言は、言語ごとの文言を書いていない言語のページに使われます。言語ごとに分けるときは、[多言語](i18n.md)を見てください。

```yaml
theme_options:
  strings:
    search_placeholder: キーワードで検索
    next: 次のページ
```

キーの一覧は [theme_options](../reference/theme-options.md) の「画面の文言」にあります。

## 404 ページ

存在しない URL を開くと、テーマが用意した 404 ページ(英語では「Page not found」)が出ます。自分で置く必要はありません。文言は `strings` の `not_found_title` と `not_found_body` で変えられます。
