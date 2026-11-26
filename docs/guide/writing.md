---
ref: writing
---

# Writing pages

Write pages in ordinary Markdown. This page explains how to write pages and links, and the displays the theme provides.

The writing you can use in the body is listed with examples in [Markdown examples](elements.md). The classes for buttons, badges, and more are in [UI parts](ui-parts.md).

## Pages and links

- The front matter at the top of a page (settings enclosed in `---`) is optional. The first heading of the body is used as the page name. The items you can write are listed in [front matter](../reference/front-matter.md).
- Write links between pages as a relative path to the `.md` file you link to. When published, they turn into links to the `.html` pages. For example, a link from this page (`docs/guide/writing.md`) to [Overview](../index.md) is written as `../index.md`.
- Do not use paths that start with `/` (such as `/guide/config.md`). Except on pages directly under `docs/`, the link is not converted and breaks.
- Also avoid writing `.html` links directly. A `.html` link that starts with `/` breaks on a project page (`https://user.github.io/repo/`).

## Table of contents

When a page has two or more h2 and h3 headings, a table of contents appears. On wide screens it is to the right of the body, and on narrow screens it is collapsed above the body. The heading you are reading is highlighted in the table of contents.

To hide it, write `toc: false` in the page's front matter. To hide it on the whole site, set `theme_options.toc: false`.

## Breadcrumb

Above the page, the position in the sidebar groups (such as "Guide / Configuration") appears. It does not appear on the top page or on pages that are not in a group. You can turn it off with `theme_options.breadcrumb: false`.

## Callout boxes

Write `{: .note }` or `{: .warning }` on the line after the last line of a quote (`>`), and it becomes a colored box. To add a title, write `{: .note data-title="Note" }`. You can also write a label yourself at the start of the body.

```markdown
> **Note** After you change the settings, wait a few minutes before checking.
{: .note }

> **Warning** This operation cannot be undone.
{: .warning }
```

> **Note** After you change the settings, wait a few minutes before checking.
{: .note }

> **Warning** This operation cannot be undone.
{: .warning }

Here is an example with a title.

```markdown
> Save the file before you continue.
{: .note data-title="Note" }
```

> Save the file before you continue.
{: .note data-title="Note" }

You can also write several lines or paragraphs. Start each line with `>`, and put a line with only `>` where paragraphs are separated. Write `{: .note }` on the line after the last line. Lines written one after another are joined into one line when displayed.

```markdown
> **Note** This is the first paragraph.
> Lines written one after another are in the same paragraph.
>
> This is the second paragraph.
>
> - You can also write a list
{: .note }
```

> **Note** This is the first paragraph.
> Lines written one after another are in the same paragraph.
>
> This is the second paragraph.
>
> - You can also write a list
{: .note }

## Copy code

When you hover over a code block, a copy button appears at the top right. On touch screens, it is always shown. You can turn it off with `theme_options.code_copy: false`.

```bash
bundle exec jekyll serve
```

## Heading links

When you hover over a heading from h2 to h6, a `#` link to that heading appears. On touch screens, it is always shown. This link needs JavaScript. You can turn it off with `theme_options.heading_link: false`.

## Back to top

A link back to the top of the page appears below the body. You can turn it off with `theme_options.top_link: false`.

## Printing

When you print a page, the header, sidebar, table of contents, previous and next links, and copy buttons are left out, and the page is printed in the light colors.
