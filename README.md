# tiny-md2docs(tm2d)

GitHub Pages で使う、小さな Jekyll のドキュメントテーマです。Markdown を `docs/` に置くだけで、サイドバーと検索のあるドキュメントサイトになります。

- 導入は `docs/_config.yml` の1行だけです。ほかに用意するものはありません。
- GitHub Pages の標準のビルドだけで動きます。ワークフロー、npm、プラグインの追加は要りません。
- 日本語の検索ができます(外部のサービスは使いません)。
- ダークモード、目次、パンくず、コードのコピー、多言語に対応しています。
- サイドバーの階層は深くできます(`nav.yml` の入れ子は48段まで)。本文の折りたたみ(`<details>`)も使えます。
- ボタン、バッジ、ユーティリティクラスを本文で使え、印刷にも対応しています。
- CSS と JS は、合わせて gzip で 16 KB 以下です。

社内のドキュメントを手早く公開したいチームや、ドキュメントの公開に時間をかけたくない個人・OSS・ライブラリの開発者に向いています。

ドキュメント: https://akilasatolu.github.io/tiny-md2docs/ja/

## 導入

1. `docs/_config.yml` に次の1行を書きます。

   ```yaml
   remote_theme: akilasatolu/tiny-md2docs
   ```

2. `docs/` に Markdown のファイルを置きます。
3. リポジトリの Settings → Pages で、ブランチの `/docs` フォルダを公開元にします。

> [!NOTE]
> この設定だけだと、HTML のページと一緒に、元の `.md` ファイルも公開されます。公開したくないときは、[設定](https://akilasatolu.github.io/tiny-md2docs/ja/guide/config.html)を見てください。リポジトリのルートや GitHub Actions で公開する方法は、[公開の方法](https://akilasatolu.github.io/tiny-md2docs/ja/getting-started/publish.html)にあります。

版を固定するときは、`@` のあとに版の名前を書きます。版の一覧は [CHANGELOG.md](CHANGELOG.md) にあります。

```yaml
remote_theme: akilasatolu/tiny-md2docs@v0.1.2
```

## 設定

`docs/_config.yml` の `theme_options` に書きます。省略した項目は既定値になります。

| 項目 | 既定値 | 内容 |
| --- | --- | --- |
| `sidebar` | `true` | `false` でサイドバーを消す |
| `search` | `true` | `false` で検索を消す |
| `dark_mode` | `auto` | `auto`(OS に合わせ、切り替えボタンを出す)、`light`、`dark` |
| `prev_next` | `true` | `false` でページ下の前後リンクを消す |
| `toc` | `true` | `false` で目次を消す |
| `breadcrumb` | `true` | `false` でパンくずを消す |
| `code_copy` | `true` | `false` でコードのコピーのボタンを消す |
| `top_link` | `true` | `false` で本文の下の「ページ先頭へ戻る」を消す |
| `heading_link` | `true` | `false` で見出しのリンクを消す |
| `github_link` | `true` | `false` でヘッダーの GitHub へのリンクを消す |
| `logo` | なし | ヘッダーのロゴ画像のパス |
| `favicon` | なし | ファビコンのパス |
| `search_content_limit` | `5000` | 索引に入れる本文の上限(1ページあたりの文字数) |
| `strings` | なし | 画面の文言の上書き |

`_config.yml` の直下に書く設定は、[リファレンス](https://akilasatolu.github.io/tiny-md2docs/ja/reference/site-config.html)にまとめています。

サイドバーの並びは `docs/_data/nav.yml` で決められます。なければフォルダから自動で並べます。詳しくは[ドキュメント](https://akilasatolu.github.io/tiny-md2docs/ja/guide/sidebar.html)を見てください。

本文で使える書き方は、[表示の一覧](https://akilasatolu.github.io/tiny-md2docs/ja/guide/elements.html)に見本があります。ボタンやバッジなどのクラスは、[UI パーツ](https://akilasatolu.github.io/tiny-md2docs/ja/guide/ui-parts.html)にあります。

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

文字と幅も CSS 変数で変えられます。使える変数は[色とダークモード](https://akilasatolu.github.io/tiny-md2docs/ja/guide/colors.html)にあります。

## フッター

すべてのページの下に「Powered by tiny-md2docs」と、tiny-md2docs のドキュメントサイトへのリンクを表示します。消す設定はありません。文言はどの言語のページでも英語のままです。

## 404 ページ

テーマが `/404.html` を用意するので、自分で置く必要はありません。文言は `theme_options.strings` の `not_found_title` と `not_found_body` で変えられます。

## サイズ

`script/size.sh` で、本番と同じ設定でビルドした CSS と JS を gzip で測ります。

| ファイル | gzip |
| --- | --- |
| style.css | 8377 バイト |
| tm2d.js | 2056 バイト |
| search-core.js | 2812 バイト |
| search-ui.js | 2199 バイト |
| 合計 | 15444 バイト |

## 開発

```bash
bundle install
script/preview.sh serve   # http://localhost:4000 で確認する
npm test                  # 検索のテスト
script/size.sh            # サイズを測る
```

## ライセンス

MIT
