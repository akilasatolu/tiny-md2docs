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

最初の2行(空の front matter)と `@import "tm2d";` は必ず書きます。このファイルがテーマの `style.scss` の代わりに使われます。

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

`theme_options.dark_mode` で決めます。

| 値 | 動き |
| --- | --- |
| `auto`(既定) | OS の設定に合わせます。ヘッダーに切り替えボタンが出て、選んだ方を覚えます |
| `light` | いつもライトモードです。ボタンは出ません |
| `dark` | いつもダークモードです。ボタンは出ません |
