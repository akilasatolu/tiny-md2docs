# サイドバー

サイドバーには、ドキュメントのページが並びます。並びは2通りの方法で決められます。

## nav.yml で並べる

`docs/_data/nav.yml` を置くと、その順と名前で並びます。

```yaml
- title: はじめに
  children:
    - title: 概要
      url: /
    - title: インストール
      url: /getting-started/install.html
- title: よくある質問
  url: /faq.html
```

- `url` を持たない項目はグループになり、`children` の項目をまとめます。
- `children` の中にもう1段グループを作れます。深さは2段までです。
- `url` はサイトのルートからのパスで書き、末尾は `.html` にします。トップページは `/` です。

## フォルダから自動で並べる

`nav.yml` がないときは、`docs/` の中のフォルダの構成から、サイドバーを自動で作ります。

たとえば、次のようにファイルを置いたとします。

```text
docs/
  index.md              # 見出しは「概要」
  faq.md                # 見出しは「よくある質問」
  getting-started/
    index.md            # front matter に title: はじめに
    install.md          # 見出しは「インストール」
  guide/
    config.md           # 見出しは「設定」
    advanced/
      cache.md          # 見出しは「キャッシュ」
```

サイドバーは、次のように並びます。

```text
概要
よくある質問
はじめに
  インストール
guide
  設定
  advanced
    キャッシュ
```

- フォルダの段は、`docs/` から数えます。`docs/` の直下のページは、グループに入れずに先頭に並べます。トップページ(`index.md`)が最初です。
- `docs/` の直下のフォルダがグループ、その中のフォルダがサブグループになります。それより深いフォルダのページは、サブグループの中に並びます。
- フォルダの `index.md` は項目に出ず、その `title` がグループ名になります。`index.md` がなければ、フォルダ名がグループ名です(上の例の `guide` と `advanced`)。
- 項目の名前は、front matter の `title`、なければ本文の最初の見出しです。
- 順番は front matter の `nav_order` の小さい順で、同じならファイルのパスの順です。グループの順番は、フォルダの `index.md` の `nav_order` の小さい順で、同じならフォルダ名の順です。グループの中では、ページがサブグループより先に並びます。

```markdown
---
nav_order: 2
---

# インストール
```

サイドバーに出したくないページには `nav_exclude: true` を書きます。

言語ごとのフォルダを分けたときの並び方は、[多言語](i18n.md)を見てください。

## 前後のリンク

ページの下には、サイドバーの並びでの前後のページへのリンクが出ます。`theme_options.prev_next: false` で消せます。

## サイドバーを消す

`theme_options.sidebar: false` で、すべてのページのサイドバーを消せます。狭い画面のメニューボタンも消えます。
