# Writing pages

Write pages in ordinary Markdown. This page explains how to write pages and links, and the displays the theme provides.

The writing you can use in the body is listed with examples in [Markdown examples](elements.md).

## Pages and links

- Front matter (settings enclosed in `---`) is not needed. The first heading of the body is used as the page name.
- Write links between pages as a relative path to the `.md` file you link to. When published, they turn into links to the `.html` pages. For example, a link from this page (`docs/guide/writing.md`) to [Overview](../index.md) is written as `../index.md`.
- Do not use paths that start with `/` (such as `/guide/config.md`). Except on pages directly under `docs/`, the link is not converted and breaks.
- Also avoid writing `.html` links directly. A `.html` link that starts with `/` breaks on a project page (`https://user.github.io/repo/`).

## Curly braces

In the body, `{% raw %}{{ }}{% endraw %}` and `{% raw %}{% %}{% endraw %}` are processed by Jekyll (Liquid), even inside code blocks. The text disappears, or publishing fails. To show it as it is, wrap it in `raw` tags.

```markdown
{% raw %}{% raw %}{% endraw %}
{% raw %}{{ message }}{% endraw %}
{{ "{% endraw " }}%}
```

When publishing fails, check the log of the Pages build in the repository's Actions.

## Table of contents

When a page has two or more h2 and h3 headings, a table of contents appears. On wide screens it is to the right of the body, and on narrow screens it is collapsed above the body.

To leave one heading out of the table of contents, write `{: .no_toc }` on the line after the heading. The heading can still be found by search.

```markdown
## Notes
{: .no_toc }
```

## Callout boxes

Write a GitHub alert, and it becomes a colored box with a title. The five types are `NOTE`, `TIP`, `IMPORTANT`, `WARNING`, and `CAUTION`.

```markdown
> [!NOTE]
> After you change the settings, wait a few minutes before checking.

> [!WARNING]
> This operation cannot be undone.
```

> [!NOTE]
> After you change the settings, wait a few minutes before checking.

> [!WARNING]
> This operation cannot be undone.

- Write the type in capital letters, alone on the first line of the quote.
- As on GitHub, an alert inside a list, another quote, or `<details>` is not converted and appears as text.
- A quote with a line such as `{: .note }` after it is not converted either.

### Choose the title

To choose the title yourself, or to leave it out, write `{: .note }` on the line after the last line of a quote (`>`). The types are `.note`, `.tip`, `.important`, `.warning`, and `.caution`. To add a title, write `{: .note data-title="Memo" }`.

```markdown
> Save the file before you continue.
{: .note data-title="Memo" }
```

> Save the file before you continue.
{: .note data-title="Memo" }

You can also write several lines or paragraphs. Start each line with `>`, and put a line with only `>` where paragraphs are separated. Lines written one after another are joined into one line when displayed.

```markdown
> [!TIP]
> This is the first paragraph.
> Lines written one after another are in the same paragraph.
>
> This is the second paragraph.
>
> - You can also write a list
```

> [!TIP]
> This is the first paragraph.
> Lines written one after another are in the same paragraph.
>
> This is the second paragraph.
>
> - You can also write a list

## Diagrams and math

The theme does not draw Mermaid diagrams or math: Mermaid diagrams appear as code, and math written with `$$` appears as `\(…\)` or `\[…\]`. To draw them, create `docs/_includes/body-custom.html` with the following. The libraries are loaded from an external server (jsDelivr), only on pages that need them.

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

- Write a diagram in a code block with the language name `mermaid`. Its colors follow dark mode when the page is opened; after switching, reload the page.
- Write math between `$$`, both on its own lines and inside a sentence. A single `$` does not work.

## Copy code

When you hover over a code block, a copy button appears at the top right. On touch screens, it is always shown. It also appears on blocks made with Jekyll's `highlight` tag, and line numbers are not copied.

```bash
bundle exec jekyll serve
```

## Heading links

When you hover over a heading from h2 to h6, a `#` link to that heading appears. On touch screens, it is always shown. This link needs JavaScript.

## Printing

When you print a page, the header, sidebar, table of contents, previous and next links, and copy buttons are left out, and the page is printed in the light colors.
