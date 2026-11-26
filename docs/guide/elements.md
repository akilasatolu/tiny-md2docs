---
ref: elements
---

# Markdown examples

Copy the code into your `.md` file. The box below each code block shows how it appears.

## Headings

{% capture ex %}
# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6
{% endcapture %}
{% include example.html md=ex ids=false %}

## Text

{% capture ex %}
**Bold**  *italic*  ~~strikethrough~~  <mark>highlight</mark>  <ins>inserted</ins>  H<sub>2</sub>O  x<sup>2</sup>

First line\
Second line
{% endcapture %}
{% include example.html md=ex %}

## Links

{% capture ex %}
[Writing pages](writing__DOT__md)

[GitHub Pages](https://pages.github.com/)

<https://pages.github.com/>
{% endcapture %}
{% include example.html md=ex %}

## Lists

{% capture ex %}
- Item
  - Nested item
- Item
{% endcapture %}
{% include example.html md=ex %}

{% capture ex %}
1. First
2. Second
{% endcapture %}
{% include example.html md=ex %}

{% capture ex %}
- [ ] To do
- [x] Done
{% endcapture %}
{% include example.html md=ex %}

## Code

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

## Tables

{% capture ex %}
| Left | Center | Right |
| :--- | :---: | ---: |
| a | b | 100 |
{% endcapture %}
{% include example.html md=ex %}

## Quotes and callouts

{% capture ex %}
> Quote
>
> > Quote

> **Note** Quote
{: .note }

> **Warning** Quote
{: .warning }

> Quote
{: .note data-title="Note" }
{% endcapture %}
{% include example.html md=ex %}

## Horizontal rule

{% capture ex %}
Above

---

Below
{% endcapture %}
{% include example.html md=ex %}

## Images

{% capture ex %}
![tm2d](../assets/images/tm2d-mark__DOT__svg){: width="96" }
{% endcapture %}
{% include example.html md=ex %}

## Footnotes

{% capture ex %}
Text with a footnote[^1]

[^1]: This is the footnote.
{% endcapture %}
{% include example.html md=ex %}

## Definition lists

{% capture ex %}
Term
: Description of the term
{% endcapture %}
{% include example.html md=ex %}

## Abbreviations

{% capture ex %}
HTML

*[HTML]: HyperText Markup Language
{% endcapture %}
{% include example.html md=ex %}

## Collapsible blocks

Write `<details markdown="1">` and `<summary>` to hide text until it is clicked. To show it open from the start, write `<details open markdown="1">`.

{% capture ex %}
<details markdown="1">
<summary>Show details</summary>

Hidden **text**.

</details>
{% endcapture %}
{% include example.html md=ex %}

## Contents in the body

{% capture ex %}
* toc
{:toc}

#### Section A

#### Section B
{% endcapture %}
{% include example.html md=ex %}

For buttons, badges, and more, see [UI parts](ui-parts.md).

## Parts shown by settings

Parts such as the header, sidebar, breadcrumb, and previous / next links are not written in the body. See [Configuration](config.md), [Sidebar](sidebar.md), [Search](search.md), and [Colors and dark mode](colors.md).
