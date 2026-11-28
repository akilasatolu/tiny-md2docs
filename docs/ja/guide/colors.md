# 色とダークモード

## 色を変える

色は CSS 変数で決めています。変えるときは、`docs/assets/css/style.scss` を作り、次のように書きます。

```scss
---
---

@import "tm2d";

:root {
  --tm2d-accent: #0a7d5a;
  --tm2d-accent-weak: #e3f4ee;
}
```

最初の2行(空の front matter)と `@import` の行は必ず書きます。GitHub の文書にある {% raw %}`@import "{{ site.theme }}";`{% endraw %} も使えます(別の名前のリポジトリにフォークした場合を除きます)。このファイルがテーマの `style.scss` の代わりに使われます。

使える変数は次のとおりです。

| 変数 | 使われる場所 | 既定値 |
| --- | --- | --- |
| `--tm2d-accent` | リンク、今のページの強調、フォーカスの枠 | `#1E5AA8` |
| `--tm2d-accent-weak` | 今のページの背景 | `#E8F0FA` |
| `--tm2d-bg` | 背景 | `#FFFFFF` |
| `--tm2d-text` | 文字 | `#1A1D21` |
| `--tm2d-muted` | 補足の文字 | `#5B6168` |
| `--tm2d-subtle` | コードや引用の背景 | `#F5F6F4` |
| `--tm2d-border` | 区切りの線 | `#E4E6E1` |
| `--tm2d-link` | リンク(既定は accent と同じ) | `--tm2d-accent` |

文字と背景のコントラストが 4.5:1 以上になる色を選んでください。

## ダークモードの色

ダークモードの色は、別の名前の変数(`--tm2d-dark-accent` など)で持っています。`--tm2d-accent` を変えても、ダークモードの色は変わりません。ダークモードの色も変えるときは、同じ `:root` の中に書きます。

```scss
:root {
  --tm2d-accent: #0a7d5a;
  --tm2d-dark-accent: #5fd0a8;
}
```

## ダークモードの切り替え

OS の設定に合わせます。ヘッダーに切り替えボタンが出て、選んだ方を覚えます。

## 文字と幅を変える

文字と幅も、同じ `:root` の中で CSS 変数を上書きして変えます。

| 変数 | 使われる場所 | 既定値 |
| --- | --- | --- |
| `--tm2d-font-body` | 本文の書体 | システムの書体 |
| `--tm2d-font-heading` | 見出しの書体 | `--tm2d-font-body` と同じ |
| `--tm2d-font-mono` | コードの書体 | システムの等幅の書体 |
| `--tm2d-font-size` | 本文の文字の大きさ | `16px` |
| `--tm2d-line-height` | 本文の行の高さ | `1.8` |
| `--tm2d-sidebar-width` | サイドバーの幅 | `264px` |
| `--tm2d-toc-width` | 右の目次の幅 | `220px` |
| `--tm2d-content-max-width` | 本文の最大の幅 | なし(`none`) |

本文の幅に上限を付けたいときは、`--tm2d-content-max-width` に `760px` などを指定します。

テーマは、外部から書体を読み込みません。Noto Sans JP などの Web フォントを使うときは、自分の `style.scss` で読み込み、`--tm2d-font-body` を上書きします。

```scss
---
---

@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap");
@import "tm2d";

:root {
  --tm2d-font-body: "Noto Sans JP", sans-serif;
}
```
