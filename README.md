# tiny-md2docs(tm2d)

GitHub Pages で使う、小さな Jekyll のドキュメントテーマです。Markdown を `docs/` に置くだけで、サイドバーと検索のあるドキュメントサイトになります。

- 導入は `docs/_config.yml` の1行だけです。ほかに用意するものはありません。
- GitHub Pages の標準のビルドだけで動きます。ワークフロー、npm、プラグインの追加は要りません。
- 日本語の検索ができます(外部のサービスは使いません)。
- ダークモード、目次、パンくず、コードのコピー、多言語に対応しています。
- `head-custom.html` などで拡張できます([テーマを拡張する](https://akilasatolu.github.io/tiny-md2docs/guide/jekyll.ja.html))。
- サイドバーの階層は深くできます(`nav.yml` の入れ子は48段まで)。本文の折りたたみ(`<details>`)も使えます。
- 印刷に対応しています。
- CSS と JS は、合わせて gzip で 16 KB 以下です。

社内のドキュメントを手早く公開したいチームや、ドキュメントの公開に時間をかけたくない個人・OSS・ライブラリの開発者に向いています。

ドキュメント: https://akilasatolu.github.io/tiny-md2docs/index.ja.html

## 導入

1. `docs/_config.yml` に次の1行を書きます。

   ```yaml
   remote_theme: akilasatolu/tiny-md2docs@v0
   ```

2. `docs/` に Markdown のファイルを置きます。
3. リポジトリの Settings → Pages で、ブランチの `/docs` フォルダを公開元にします。

> [!NOTE]
> この設定だけだと、HTML のページと一緒に、元の `.md` ファイルも公開されます。公開したくないときは、[設定](https://akilasatolu.github.io/tiny-md2docs/guide/config.ja.html)を見てください。リポジトリのルートや GitHub Actions で公開する方法は、[公開の方法](https://akilasatolu.github.io/tiny-md2docs/getting-started/publish.ja.html)にあります。

`@v0` は、新しい版が次のビルドから自動で反映されます。版を固定するときは、`@` のあとに版の名前を書きます。版の一覧は [CHANGELOG.md](CHANGELOG.md) にあります。

```yaml
remote_theme: akilasatolu/tiny-md2docs@v0.2.2
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
| `search_content_limit` | `5000` | 検索で調べる本文の文字数の上限(1ページあたり) |
| `lang_layout` | なし | ページの言語の決め方。指定がなければファイル名(`config.ja.md`)、`folder` は言語のフォルダ(`ja/config.md`。サイトの `lang` の言語は `docs/` の直下) |
| `strings` | なし | 画面の文言の上書き |

`_config.yml` の直下に書く設定は、[リファレンス](https://akilasatolu.github.io/tiny-md2docs/reference/site-config.ja.html)にまとめています。

サイドバーの並びは `docs/_data/nav.yml` で決められます。なければフォルダから自動で並べます。詳しくは[ドキュメント](https://akilasatolu.github.io/tiny-md2docs/guide/sidebar.ja.html)を見てください。

本文で使える書き方は、[表示の一覧](https://akilasatolu.github.io/tiny-md2docs/guide/elements.ja.html)に見本があります。

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

文字と幅も CSS 変数で変えられます。使える変数は[色とダークモード](https://akilasatolu.github.io/tiny-md2docs/guide/colors.ja.html)にあります。

## フッター

すべてのページの下に「Powered by tiny-md2docs」と、tiny-md2docs のドキュメントサイトへのリンクを表示します。消す設定はありません。文言はどの言語のページでも英語のままです。

## 404 ページ

テーマが `/404.html` を用意するので、自分で置く必要はありません。文言は `theme_options.strings` の `not_found_title` と `not_found_body` で変えられます。

## サイズ

`script/size.sh` で、本番と同じ設定でビルドした CSS と JS を gzip で測ります。

| ファイル | gzip |
| --- | --- |
| style.css | 4258 バイト |
| tm2d.js | 2111 バイト |
| search-core.js | 2812 バイト |
| search-ui.js | 2704 バイト |
| 合計 | 11885 バイト |

## 開発

```bash
bundle install
script/preview.sh serve   # http://localhost:4000 で確認する
npm test                  # 検索のテスト
script/size.sh            # サイズを測る
```

版を出すときは、`CHANGELOG.md` と版の表記を直して commit し、版のタグを付けて、`v0` ブランチも同じ commit に進めます。

```bash
git tag -a v0.2.2 -m v0.2.2
git push --atomic origin main v0.2.2 main:v0
```

## ライセンス

MIT
