---
ref: config
---

# 設定

設定は、すべて `docs/_config.yml` に書きます。最小の設定は `remote_theme` の1行だけです。

設定の一覧は [_config.yml](../reference/site-config.md) にあります。

## サイトの情報

```yaml
remote_theme: akilasatolu/tiny-md2docs@v0
title: My Docs
description: 製品の使い方をまとめたドキュメント
lang: en
```

- `title` はヘッダーとブラウザのタブに出るサイト名です。
- `description` は検索エンジンや SNS で使われる説明文です。ページごとに front matter の `description` で上書きできます。
- `lang` はサイト全体の言語で、`<html lang>` と画面の文言に使われます。省略すると `en` です。英語以外の言語にするときは、[多言語](i18n.md)を見てください。
- `title` を書かないと、プロジェクトのページ(`https://user.github.io/repo/`)ではリポジトリの名前が、ユーザーのページ(`https://user.github.io/`)ではアカウントの名前が、サイト名になります。`description` を書かないと、リポジトリの説明(About)が使われます。

## 元の .md ファイルを公開しない

`remote_theme` の1行だけだと、HTML のページと一緒に、元の `.md` ファイルも公開されます(例: `/guide/config.html` と `/guide/config.md`)。中身は同じですが、公開したくないときは、次の2行を足します。

```yaml
optional_front_matter:
  remove_originals: true
```

- front matter のあるページは、この設定がなくても、元の `.md` が公開されません。
- `README.md`、`LICENSE.md`、`CONTRIBUTING.md` など、決まった名前のファイルは、front matter がないとページにならず、この設定を書いても `.md` のまま公開されます。ページにするときは、先頭に空の front matter(`---` の2行)を書きます。
- `README.md` は、同じフォルダに `index.md` がなければ、そのフォルダのトップページにもなります。このときの元の `README.md` も公開しないときは、次も足します。

```yaml
readme_index:
  remove_originals: true
```

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

## フッター

すべてのページの下に「Powered by tiny-md2docs」と、tiny-md2docs のドキュメントサイトへのリンクが出ます。消す設定はありません。文言はどの言語のページでも英語のままです。

## 404 ページ

存在しない URL を開くと、テーマが用意した 404 ページ(英語では「Page not found」)が出ます。自分で置く必要はありません。文言は `strings` の `not_found_title` と `not_found_body` で変えられます。
