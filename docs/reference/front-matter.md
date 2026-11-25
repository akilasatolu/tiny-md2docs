# front matter

ページの先頭に書ける項目です。どれも省略できます。front matter 自体を書かなくてもかまいません。

```markdown
---
title: インストール
description: tm2d を使い始める手順
nav_order: 1
---
```

| 項目 | 内容 |
| --- | --- |
| `title` | ページの名前。省略すると、本文の最初の見出しが使われる |
| `description` | ページの説明文。省略するとサイトの `description` |
| `image` | SNS で共有したときの画像。省略するとサイトの `image` |
| `nav_order` | 自動の並びでの順番。小さいほど先 |
| `nav_exclude` | `true` でサイドバーと前後リンクに出さない |
| `search_exclude` | `true` で検索に出さない |
| `toc` | `false` で目次を出さない |
| `ref` | 翻訳どうしで同じ値を書くと、ヘッダーに言語の切り替えが出る |
