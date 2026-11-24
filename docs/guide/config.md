# 設定

設定は、すべて `docs/_config.yml` に書きます。最小の設定は `remote_theme` の1行だけです。

## サイトの情報

```yaml
remote_theme: akilasatolu/tiny-md2docs
title: My Docs
description: 製品の使い方をまとめたドキュメント
lang: ja
```

- `title` はヘッダーとブラウザのタブに出るサイト名です。
- `description` は検索エンジンや SNS で使われる説明文です。ページごとに front matter の `description` で上書きできます。
- `lang` はページの言語で、`<html lang>` に入ります。省略すると `ja` です。

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

ボタンや検索窓の文言は、`theme_options.strings` で上書きできます。

```yaml
theme_options:
  strings:
    search_placeholder: キーワードで検索
    next: 次のページ
```

キーの一覧は [theme_options](../reference/theme-options.md) の「画面の文言」にあります。
