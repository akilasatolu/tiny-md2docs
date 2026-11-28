# 公開の方法

ふつうは、[インストール](install.ja.md)の手順のとおり、ブランチの `docs` フォルダから公開します。ここでは、ほかの2つの方法を説明します。どちらも、リポジトリの Settings → Pages の「Build and deployment」で設定します。

## ブランチのルートから公開する

ドキュメントだけのリポジトリなどで、リポジトリのルートを公開する方法です。

1. `_config.yml` と Markdown のファイルを、`docs/` ではなくリポジトリのルートに置きます。このドキュメントの `docs/` は、リポジトリのルートに読み替えてください。
2. [インストール](install.ja.md)の「3. GitHub Pages を有効にする」と同じように設定します。フォルダだけは、`/docs` ではなく `/(root)` を選びます。

ルートから公開すると、リポジトリのほかのファイルも公開されます。公開したくないファイルやフォルダは、`_config.yml` の `exclude` に書きます。`exclude` を書くと、Jekyll が既定で除いているファイル(`Gemfile`、`node_modules` など)の一覧が置き換わります。次の例のように、既定のものも一緒に書きます。

```yaml
exclude:
  # Jekyll の既定の除外
  - Gemfile
  - Gemfile.lock
  - node_modules
  - vendor/bundle/
  - vendor/cache/
  - vendor/gems/
  - vendor/ruby/
  # 独自のドメインを使うときのファイル
  - CNAME
  # 公開したくないもの
  - README.md
  - src/
```

## GitHub Actions で公開する

ビルドの前に処理を足したいときなど、自分のワークフローで公開する方法です。ワークフローは、GitHub が用意している公式のひな形から作ります。

1. Settings → Pages の「Source」で「GitHub Actions」を選びます。
2. リポジトリの「Actions」を開きます。ワークフローがすでにあるときは、「New workflow」を押します。
3. 「Choose a workflow」のページで「GitHub Pages Jekyll」を探し、「Configure」を押します。
4. 開いたワークフローの `source: ./` を `source: ./docs` に直します。
5. 「Commit changes...」を押して、ワークフローを commit します。

commit すると、ワークフローが動いてサイトが公開されます。そのあとは、既定のブランチに push するたびに公開されます。
