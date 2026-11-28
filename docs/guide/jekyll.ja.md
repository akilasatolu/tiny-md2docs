# テーマを拡張する

Jekyll の標準の仕組みで、テーマに足したり、部品を置き換えたりできます。

## head と body に足す

アクセス解析のスクリプトなど、足したいものは次のファイルに書きます。テーマの更新はそのまま受け取れます。

| ファイル | 入る場所 |
| --- | --- |
| `docs/_includes/head-custom.html` | `<head>` の末尾 |
| `docs/_includes/body-custom.html` | `</body>` の直前 |

## テーマの部品を置き換える

`docs/_includes/` や `docs/_layouts/` に同じ名前のファイルを置くと、テーマのファイルの代わりに使われます。自分の部品には、次と違う名前を付けてください。置き換えたファイルには、テーマの更新が届きません。

- `_includes`: `body-custom.html`、`breadcrumb.html`、`footer.html`、`head.html`、`head-custom.html`、`header.html`、`headings.html`、`lang.html`、`nav-order.html`、`nav-tree.html`、`pager.html`、`search.html`、`sidebar.html`、`t.html`、`toc.html`、`translations.html`、`url-key.html`
- `_layouts`: `default.html`、`page.html`、`post.html`、`404.html`

404 ページを自分で書くときは、`docs/assets/404.html` を次のように作ります。ヘッダーとサイドバーは、テーマのものが出ます。

```html
---
layout: default
permalink: /404.html
---

<article class="tm2d-content">
<h1>見つかりません</h1>
</article>
```

## 投稿

`docs/_posts/` の投稿は、テーマの画面で表示されます。サイドバー、検索、前後のリンク、言語の切り替えには出ません。投稿の言語の対応は保証しません(たとえば `2026-01-31-release.ja.md` という投稿は、サイト全体の言語で表示されます)。

## 保証しないもの

コレクションを使う、プラグインを足す、`markdown` などの Jekyll の設定を変える場合の表示と動きは、テーマでは保証しません。
