# ページの書き方

ページは、ふつうの Markdown で書きます。ここでは、ページとリンクの書き方と、テーマが用意している表示を紹介します。

本文で使える書き方は、[表示の一覧](elements.md)に見本があります。

## ページとリンク

- front matter(`---` で囲んだ設定)は要りません。ページの名前には、本文の最初の見出しが使われます。
- ページどうしのリンクは、リンク先の `.md` ファイルへの相対パスで書きます。公開するときに、`.html` のページへのリンクに変わります。たとえばこのページ(`docs/ja/guide/writing.md`)から[概要](../index.md)へのリンクは、`../index.md` と書きます。
- `/` で始まるパス(`/guide/config.md` など)は使いません。`docs/` の直下のページ以外では、リンクが変換されずに切れます。
- `.html` へのリンクを直接書くのも避けます。`/` で始まる `.html` のリンクは、プロジェクトのページ(`https://user.github.io/repo/`)で切れます。

## 波かっこの書き方

本文の `{% raw %}{{ }}{% endraw %}` と `{% raw %}{% %}{% endraw %}` は、コードのブロックの中でも Jekyll(Liquid)の命令として扱われます。文字が消えるか、公開に失敗します。そのまま見せるときは、`raw` タグで囲みます。

```markdown
{% raw %}{% raw %}{% endraw %}
{% raw %}{{ message }}{% endraw %}
{{ "{% endraw " }}%}
```

公開に失敗したときは、リポジトリの Actions で Pages のビルドのログを確かめてください。

## 目次

ページに h2 と h3 の見出しが2つ以上あると、目次が出ます。広い画面では本文の右に、狭い画面では本文の上に折りたたんで出ます。

一部の見出しだけを目次から外すときは、見出しの次の行に `{: .no_toc }` を書きます。外した見出しも、検索では見つかります。

```markdown
## 補足
{: .no_toc }
```

## 注意書きの囲み

GitHub の注意書きを書くと、タイトルの付いた色の付いた囲みになります。種類は `NOTE`、`TIP`、`IMPORTANT`、`WARNING`、`CAUTION` の5つです。

```markdown
> [!NOTE]
> 設定を変えたら、数分待ってから確かめます。

> [!WARNING]
> この操作は元に戻せません。
```

> [!NOTE]
> 設定を変えたら、数分待ってから確かめます。

> [!WARNING]
> この操作は元に戻せません。

- 種類は大文字で、引用の1行目にそれだけを書きます。
- GitHub と同じく、リスト、別の引用、`<details>` の中の注意書きは置き換わらず、文字のまま出ます。
- あとの行に `{: .note }` などを書いた引用も、置き換わりません。

### タイトルを選ぶ

タイトルを自分で決めるとき、またはタイトルを出さないときは、引用(`>`)の最後の行の次に `{: .note }` を書きます。種類は `.note`、`.tip`、`.important`、`.warning`、`.caution` です。タイトルを付けるときは `{: .note data-title="メモ" }` のように書きます。

```markdown
> 続ける前にファイルを保存します。
{: .note data-title="メモ" }
```

> 続ける前にファイルを保存します。
{: .note data-title="メモ" }

複数の行や段落も書けます。各行の先頭に `>` を付け、段落を分けるところには `>` だけの行を入れます。続けて書いた行は、表示では1行につながります。

```markdown
> [!TIP]
> 1つ目の段落です。
> 続けて書いた行は、同じ段落になります。
>
> 2つ目の段落です。
>
> - リストも書けます
```

> [!TIP]
> 1つ目の段落です。
> 続けて書いた行は、同じ段落になります。
>
> 2つ目の段落です。
>
> - リストも書けます

## 図と数式

テーマは Mermaid の図と数式を描きません。Mermaid の図はコードとして出て、`$$` で書いた数式は `\(…\)` や `\[…\]` の文字で出ます。描くときは、`docs/_includes/body-custom.html` を次の内容で作ります。ライブラリは、必要なページだけで外部のサーバー(jsDelivr)から読み込みます。

```html
{% raw %}{%- if content contains 'class="language-mermaid"' %}
<script type="module">
import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@12/dist/mermaid.esm.min.mjs";
const nodes = [...document.querySelectorAll("code.language-mermaid")].map((code) => {
  const pre = code.parentElement;
  pre.textContent = code.textContent;
  pre.className = "mermaid";
  return pre;
});
const dark = document.documentElement.getAttribute("data-theme") === "dark";
mermaid.initialize({ startOnLoad: false, theme: dark ? "dark" : "default" });
mermaid.run({ nodes });
</script>
{%- endif %}
{%- if content contains '\(' or content contains '\[' %}
<script defer src="https://cdn.jsdelivr.net/npm/mathjax@4/tex-mml-chtml.js"></script>
{%- endif %}{% endraw %}
```

- 図は、言語名を `mermaid` にしたコードのブロックに書きます。図の色は、ページを開いたときのダークモードに合わせます。切り替えたあとは、ページを読み込み直します。
- 数式は、行を分けるときも文の中でも `$$` で囲みます。`$` 1つは使えません。

## コードのコピー

コードのブロックにマウスを重ねると、右上にコピーのボタンが出ます。タッチ操作の画面では、いつも出ています。Jekyll の `highlight` タグのブロックにも出て、行番号はコピーされません。

```bash
bundle exec jekyll serve
```

## 見出しのリンク

h2 から h6 の見出しにマウスを重ねると、その見出しへの `#` のリンクが出ます。タッチ操作の画面では、いつも出ています。このリンクには JavaScript が必要です。

## 印刷

ページを印刷すると、ヘッダー、サイドバー、目次、前後リンク、コピーのボタンなどを除き、明るい色で出ます。
