# 表示の一覧

コードを自分の `.md` ファイルに書き写せます。コードの下の枠が、表示の結果です。

## 見出し

{% capture ex %}
# 見出し 1

## 見出し 2

### 見出し 3

#### 見出し 4

##### 見出し 5

###### 見出し 6
{% endcapture %}
{% include example.html md=ex ids=false %}

## 文字の書式

{% capture ex %}
**太字**  *斜体*  ~~打ち消し~~  <mark>蛍光ペン</mark>  <ins>追記</ins>  H<sub>2</sub>O  x<sup>2</sup>

1行目\
2行目
{% endcapture %}
{% include example.html md=ex %}

## リンク

{% capture ex %}
[ページの書き方](writing__DOT__md)

[GitHub Pages](https://pages.github.com/)

<https://pages.github.com/>
{% endcapture %}
{% include example.html md=ex %}

## リスト

{% capture ex %}
- 項目
  - 入れ子の項目
- 項目
{% endcapture %}
{% include example.html md=ex %}

{% capture ex %}
1. 手順1
2. 手順2
{% endcapture %}
{% include example.html md=ex %}

{% capture ex %}
- [ ] 未完了
- [x] 完了
{% endcapture %}
{% include example.html md=ex %}

## コード

{% capture ex %}
`inline code`

```js
// comment
const message = "hello";
```

```diff
- old line
+ new line
```
{% endcapture %}
{% include example.html md=ex %}

## 表

{% capture ex %}
| 左寄せ | 中央 | 右寄せ |
| :--- | :---: | ---: |
| a | b | 100 |
{% endcapture %}
{% include example.html md=ex %}

## 引用とコールアウト

{% capture ex %}
> 引用文
>
> > 引用文

> **メモ** 引用文
{: .note }

> **注意** 引用文
{: .warning }

> 引用文
{: .note data-title="メモ" }

> [!NOTE]
> 引用文

> [!TIP]
> 引用文

> [!IMPORTANT]
> 引用文

> [!WARNING]
> 引用文

> [!CAUTION]
> 引用文
{% endcapture %}
{% include example.html md=ex %}

## 区切り線

{% capture ex %}
上の文

---

下の文
{% endcapture %}
{% include example.html md=ex %}

## 画像

{% capture ex %}
![tm2d](../../assets/images/tm2d-mark__DOT__svg){: width="96" }
{% endcapture %}
{% include example.html md=ex %}

## 脚注

{% capture ex %}
脚注の付いた文[^1]

[^1]: これが脚注です。
{% endcapture %}
{% include example.html md=ex %}

## 定義リスト

{% capture ex %}
用語
: 用語の説明
{% endcapture %}
{% include example.html md=ex %}

## 略語

{% capture ex %}
HTML

*[HTML]: HyperText Markup Language
{% endcapture %}
{% include example.html md=ex %}

## 折りたたみ

`<details markdown="1">` と `<summary>` を書くと、クリックするまで本文を隠せます。初めから開いて見せるときは、`<details open markdown="1">` と書きます。

{% capture ex %}
<details markdown="1">
<summary>詳しく見る</summary>

隠れている**文章**です。

</details>
{% endcapture %}
{% include example.html md=ex %}

## 本文中の目次

{% capture ex %}
* toc
{:toc}

#### 節 A

#### 節 B
{% endcapture %}
{% include example.html md=ex %}

## 設定で出る部品

ヘッダー、サイドバー、前後リンクなどは、本文には書きません。[設定](config.md)、[サイドバー](sidebar.md)、[検索](search.md)、[色とダークモード](colors.md)を見てください。
