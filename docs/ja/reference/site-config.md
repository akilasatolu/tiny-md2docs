# _config.yml

`docs/_config.yml` の直下に書く設定のうち、テーマが読み取るものと、テーマを使うときに関係するものです。Jekyll のすべての設定ではありません。テーマを読み込む `remote_theme` のほかは、省略できます。

「決めているもの」は、設定の意味を決めているものです。「このテーマ」はこのテーマだけの設定、「このテーマの使い方」はこのテーマが意味を決めている名前です。

## テーマが読み取る設定

| 項目 | 既定値 | 内容 | 決めているもの |
| --- | --- | --- | --- |
| `title` | プロジェクトのページはリポジトリの名前、ユーザーのページはアカウントの名前 | サイト名 | Jekyll でよく使う名前(省略時は `jekyll-github-metadata` が補う) |
| `description` | リポジトリの説明(About) | サイトの説明 | Jekyll でよく使う名前(省略時は `jekyll-github-metadata` が補う) |
| `image` | なし | SNS で共有したときの画像 | このテーマの使い方 |
| `lang` | `en` | 言語のフォルダにないページの言語([多言語](../guide/i18n.md)) | このテーマの使い方 |
| `theme_options` | なし | テーマの設定([theme_options](theme-options.md)) | このテーマ |

## 使うときに関係する設定

| 項目 | 既定値 | 内容 | 決めているもの |
| --- | --- | --- | --- |
| `remote_theme` | なし | `akilasatolu/tiny-md2docs` と書く。`@` のあとにブランチ、タグ、コミットを書くと版を固定できる | `jekyll-remote-theme` |
| `optional_front_matter` | `enabled: true`、`remove_originals: false` | front matter のない Markdown の扱い。`enabled: false` でページにしない。`remove_originals: true` で元の `.md` を公開しない。front matter のない `README.md` や `LICENSE.md` などは、ページにならない([設定](../guide/config.md)) | `jekyll-optional-front-matter` |
| `readme_index` | `enabled: true`、`remove_originals: false`、`with_frontmatter: false` | index のないフォルダでは `README.md` をトップページにする。`with_frontmatter: true` で front matter のある README も対象にする | `jekyll-readme-index` |
| `exclude` | `Gemfile`、`Gemfile.lock`、`node_modules`、`vendor/bundle/`、`vendor/cache/`、`vendor/gems/`、`vendor/ruby/`、`CNAME` | 公開しないファイル。書くと既定の一覧は置き換わる([公開の方法](../getting-started/publish.md)) | Jekyll(`CNAME` は GitHub Pages が足す) |
