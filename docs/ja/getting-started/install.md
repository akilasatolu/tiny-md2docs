# インストール

## 1. 設定ファイルを置く

公開したいリポジトリに `docs/_config.yml` を作り、次の1行を書きます。

```yaml
remote_theme: akilasatolu/tiny-md2docs@v0
```

`@v0` は、新しい版が次のビルドから自動で反映されます。版を固定するときは、`@` のあとに版の名前を書きます。

> **メモ** この設定だけだと、HTML のページと一緒に、元の `.md` ファイルも公開されます。公開したくないときは、[設定](../guide/config.md)の「元の .md ファイルを公開しない」を見てください。
{: .note }

## 2. ページを書く

`docs/` の下に Markdown のファイルを置きます。トップページは `docs/index.md` です。書き方は[ページの書き方](../guide/writing.md)を見てください。

## 3. GitHub Pages を有効にする

1. リポジトリの Settings → Pages を開きます。
2. 「Build and deployment」の「Source」(公開元)で、「Deploy from a branch」を選びます。
3. 「Branch」で、公開するブランチと `/docs` フォルダを選び、「Save」を押します。

数分たつと、サイトが公開されます。リポジトリのルートや GitHub Actions で公開する方法は、[公開の方法](publish.md)を見てください。

AI にページを作らせるときは、[AI に渡す情報](ai.md)をコピーして使えます。
