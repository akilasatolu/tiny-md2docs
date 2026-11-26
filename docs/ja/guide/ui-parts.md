---
ref: ui-parts
---

# UI パーツ

本文で使えるクラスの一覧です。コードを自分の `.md` ファイルに書き写せます。コードの下の枠が、表示の結果です。

- クラス名は、自分で書いた CSS のクラス名と重なることがあります。
- クラスは、段落などの次の行に `{: .クラス名 }` と書くか、文字のすぐ後ろに続けて書きます。HTML の `class` にも書けます。

## ボタン

{% capture ex %}
[既定](https://pages.github.com/){: .button } [枠線](https://pages.github.com/){: .button .button-outline } [主な操作](https://pages.github.com/){: .button .button-primary }

[緑](https://pages.github.com/){: .button .button-green } [紫](https://pages.github.com/){: .button .button-purple } [赤](https://pages.github.com/){: .button .button-red }

<button type="button" class="button" disabled>無効</button> <button type="button" class="button-plain">装飾なし</button>
{% endcapture %}
{% include example.html md=ex %}

| クラス | 内容 |
| --- | --- |
| `.button` | ボタンの形にする |
| `.button-outline` | `.button` と一緒に書き、枠線だけにする |
| `.button-primary` | `.button` と一緒に書き、テーマの色にする |
| `.button-green`、`.button-purple`、`.button-red` | `.button` と一緒に書き、緑、紫、赤にする |
| `.button-plain` | `button` 要素の装飾をなくす |

押せないボタンは、`button` 要素に `disabled` を付けるか、`.disabled` を足します。

## バッジ

{% capture ex %}
青
{: .badge }

緑
{: .badge .badge-green }

紫
{: .badge .badge-purple }

赤
{: .badge .badge-red }

黄
{: .badge .badge-yellow }
{% endcapture %}
{% include example.html md=ex %}

| クラス | 内容 |
| --- | --- |
| `.badge`、`.badge-blue` | 青のバッジ |
| `.badge-green`、`.badge-purple`、`.badge-red`、`.badge-yellow` | `.badge` と一緒に書き、色を変える |

続けて書いたバッジの段落は、横に並びます。

## 表示結果の枠

{% capture ex %}
<div class="preview" markdown="1">
**太字**
</div>

```markdown
**太字**
```
{% endcapture %}
{% include example.html md=ex %}

`.preview` は、表示の見本を囲む枠です。直後にコードのブロックを置くと、つながって表示されます。中に Markdown を書くときは `markdown="1"` を付けます。

## 文字

{% capture ex %}
大きくて細い文字
{: .font-size-8 .font-weight-300 }

見出し 3 と同じ見た目
{: .heading-3 }

等幅の文字
{: .font-family-mono .letter-spacing-wide }

右に寄せた文字
{: .align-right }
{% endcapture %}
{% include example.html md=ex %}

| クラス | 内容 |
| --- | --- |
| `.font-size-1` 〜 `.font-size-10` | 文字の大きさ(12、13、14、16、19、24、28、34、42、48px) |
| `.font-weight-300`、`-400`、`-500`、`-600`、`-700` | 文字の太さ |
| `.font-family-mono` | 等幅の書体 |
| `.line-height-0`、`-body`、`-tight` | 行の高さ(0、本文と同じ、詰める) |
| `.letter-spacing-0`、`-wide`、`-wider` | 文字の間隔(0、広め、さらに広め) |
| `.text-transform-uppercase` | 英字を大文字にする |
| `.heading-1` 〜 `.heading-6` | このテーマの見出し 1〜6 と同じ見た目 |
| `.align-left`、`-center`、`-right` | 文字の位置 |

## 色

{% capture ex %}
青の背景に青の文字
{: .color-blue-2 .background-blue-1 .padding-2 }

黄の背景に黄の文字
{: .color-yellow-2 .background-yellow-1 .padding-2 }

緑の 2 の背景に 1 の文字
{: .color-green-1 .background-green-2 .padding-2 }
{% endcapture %}
{% include example.html md=ex %}

| クラス | 内容 |
| --- | --- |
| `.color-{色}-1`、`.color-{色}-2` | 文字の色 |
| `.background-{色}-1`、`.background-{色}-2` | 背景の色 |

色の名前は `blue`、`green`、`yellow`、`red`、`purple`、`gray` です。1 は背景に向く控えめな色、2 は文字に向く強い色です。ダークモードでは、色も切り替わります。背景に 1、文字に 2(またはその逆)を組み合わせます。

## 配置と表示

{% capture ex %}
<div class="display-flex justify-content-space-between"><span>左</span><span>右</span></div>

<span class="font-size-8">大きい文字</span> <span class="vertical-align-top">上にそろえる</span>
{% endcapture %}
{% include example.html md=ex %}

| クラス | 内容 |
| --- | --- |
| `.display-block`、`-flex`、`-inline`、`-inline-block`、`-none` | 表示のしかた |
| `.float-left`、`.float-right` | 左や右に寄せて、後ろの内容を回り込ませる |
| `.justify-content-start`、`-end`、`-space-between`、`-space-around` | `.display-flex` の中の横の並べ方 |
| `.vertical-align-baseline`、`-bottom`、`-middle`、`-text-bottom`、`-text-top`、`-top` | 行の中の縦の位置 |
| `.visually-hidden` | 画面には出さず、読み上げには残す |

## 余白

{% capture ex %}
左に外側の余白がある段落
{: .margin-left-8 }

内側に余白がある段落
{: .padding-4 .background-gray-1 }
{% endcapture %}
{% include example.html md=ex %}

名前の最後の数字(N)に 4px を掛けた幅になります。`margin` は外側、`padding` は内側の余白です。

| クラス | 内容 |
| --- | --- |
| `.margin-N`、`.padding-N` | 四方の余白 |
| `.margin-top-N`、`-right-N`、`-bottom-N`、`-left-N`(`padding` も同じ) | 上、右、下、左の余白 |
| `.margin-x-N`、`.padding-x-N` | 左右の余白 |
| `.margin-y-N`、`.padding-y-N` | 上下の余白 |
| `.margin-x-negative-N` | 左右に外へはみ出す(負の余白) |
| `.margin-x-auto` | 幅のあるブロックを中央に寄せる |

| N | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| px | 0 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 64 |

## 画面幅ごとの指定

名前の先頭に `from-768-` か `from-1200-` を付けると、画面の幅がその値以上のときだけ効きます。

{% capture ex %}
狭い画面でだけ出る文(幅 768px 以上では隠れる)
{: .from-768-display-none }

幅 768px 以上の画面でだけ出る文
{: .display-none .from-768-display-block }
{% endcapture %}
{% include example.html md=ex %}

| クラス | 内容 |
| --- | --- |
| `.from-768-display-*`、`.from-1200-display-*` | その幅以上で、表示のしかたを変える |
| `.from-768-margin-*`、`.from-768-padding-*`、`.from-1200-margin-*`、`.from-1200-padding-*` | その幅以上で、余白を変える |
