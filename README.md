# tiny-md2docs(tm2d)

GitHub Pages で使う、小さな Jekyll のドキュメントテーマです。Markdown を `docs/` に置くだけで、サイドバーと検索のあるドキュメントサイトになります。

- GitHub Pages の標準のビルドだけで動きます。Actions、npm、プラグインの追加は要りません。
- 日本語の検索ができます(外部のサービスは使いません)。
- ダークモードに対応しています。
- CSS と JS は、合わせて gzip で 10 KB 以下です。

ドキュメント: https://akilasatolu.github.io/tiny-md2docs/

## 導入

`docs/_config.yml` に次の1行を書き、リポジトリの Settings → Pages で、ブランチの `/docs` フォルダを公開元にします。

```yaml
remote_theme: akilasatolu/tiny-md2docs
```

## 設定

`docs/_config.yml` の `theme_options` に書きます。省略した項目は既定値になります。

| 項目 | 既定値 | 内容 |
| --- | --- | --- |
| `sidebar` | `true` | `false` でサイドバーを消す |
| `search` | `true` | `false` で検索を消す |
| `dark_mode` | `auto` | `auto`(OS に合わせ、切り替えボタンを出す)、`light`、`dark` |
| `prev_next` | `true` | `false` でページ下の前後リンクを消す |
| `github_link` | `true` | `false` でヘッダーの GitHub へのリンクを消す |
| `logo` | なし | ヘッダーのロゴ画像のパス |
| `favicon` | なし | ファビコンのパス |
| `search_content_limit` | `5000` | 索引に入れる本文の上限(1ページあたりの文字数) |
| `strings` | なし | 画面の文言の上書き |

サイドバーの並びは `docs/_data/nav.yml` で決められます。なければフォルダから自動で並べます。詳しくは[ドキュメント](https://akilasatolu.github.io/tiny-md2docs/guide/sidebar.html)を見てください。

## 色の変え方

`docs/assets/css/style.scss` を作り、CSS 変数を上書きします。

```scss
---
---

@import "tm2d";

:root {
  --tm2d-accent: #0a7d5a;
}
```

使える変数は[色とダークモード](https://akilasatolu.github.io/tiny-md2docs/guide/colors.html)にあります。

## サイズ

`script/size.sh` で、本番と同じ設定でビルドした CSS と JS を gzip で測ります。

| ファイル | gzip |
| --- | --- |
| style.css | 2852 バイト |
| tm2d.js | 873 バイト |
| search-core.js | 1672 バイト |
| search-ui.js | 1825 バイト |
| 合計 | 7222 バイト |

## 開発

```bash
bundle install
script/preview.sh serve   # http://localhost:4000 で確認する
npm test                  # 検索のテスト
script/size.sh            # サイズを測る
```

## ライセンス

MIT
