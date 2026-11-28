# Information for AI

The box below gathers the information to give an AI when you have it write your documentation. The copy button at the top right of the box copies all of it.

1. Copy the whole text in the box below and paste it into the AI.
2. Then describe the documentation you want (what the product or project is, who will read it, the language, and the pages to include) and send it.
3. Put the files the AI made into your repository, and publish them with the steps in "3. Turn on GitHub Pages" of [Install](install.md).

{% raw %}
````text
# Write documentation with tiny-md2docs (tm2d)

You will write documentation that uses tiny-md2docs (tm2d), a Jekyll theme for GitHub Pages. Follow the specification below.

## How to work
- If you do not know what the product is, who will read the documentation, the language, or which pages to include, ask instead of guessing.
- Show the path and the full content of every file you create.
- Do not create what the theme already provides (layouts, sidebar, search, table of contents, 404 page). _layouts and _includes are not needed, except _includes/head-custom.html and _includes/body-custom.html to add scripts.

## Where files go
- Put everything under docs/.
- docs/_config.yml: settings (required)
- docs/index.md: the top page
- docs/**/*.md: pages. When published, .md becomes a .html URL.
- docs/_data/nav.yml: order of the sidebar (optional)
- docs/assets/css/style.scss: changes to colors and so on (optional)
- Put images and similar files in a folder such as docs/assets/images/.
- To publish, open Settings → Pages in the repository, choose "Deploy from a branch", and select the branch and the /docs folder.

## docs/_config.yml
The minimum is this one line.

```yaml
remote_theme: akilasatolu/tiny-md2docs@v0
```

A common form:

```yaml
remote_theme: akilasatolu/tiny-md2docs@v0
title: My Docs
description: How to use the product
lang: en
optional_front_matter:
  remove_originals: true
logo: /assets/images/logo.svg
favicon: /assets/images/favicon.svg
```

- The theme's on-screen text is in English only.

Top-level settings:
- remote_theme: the theme. Add @ followed by a branch, tag, or commit to pin a version.
- title: the site name. If omitted, the repository name or the account name.
- description: the description of the site. If omitted, the description of the repository.
- image: the default image used when a page is shared on social media.
- lang: the language of pages that are not in a language folder. If omitted, en.
- logo: the path of the logo image in the header (from the site root; do not add /repo).
- favicon: the path of the favicon (same as above).
- optional_front_matter: remove_originals: true stops publishing the original .md files. With enabled: false, Markdown without front matter does not become a page.
- readme_index: in a folder without index.md, README.md becomes the top page. You can set remove_originals, enabled, and with_frontmatter.
- exclude: files not to publish. Writing it replaces Jekyll's default list (Gemfile, Gemfile.lock, node_modules, vendor/bundle/, vendor/cache/, vendor/gems/, vendor/ruby/) and CNAME, so write those too.

## Writing pages
- Write in Markdown (kramdown with GFM, as on GitHub Pages).
- Front matter is not needed. The name of a page is the heading at the very top of the body (without one, the file name). Start each page with a "# Heading".
- Link between pages with a relative path to the target .md file. Examples: [Usage](guide/usage.md), [Back](../overview.md). In a translated page too, write relative paths; they stay inside the same language folder. Do not write paths starting with / or direct links to .html.
- Write images with a relative path. Example: ![Figure](../assets/images/figure.png){: width="480" }
- A table of contents appears when a page has two or more h2 and h3 headings in total. To leave a heading out of it, write {: .no_toc } on the line after the heading.
- Double curly braces, or a curly brace followed by %, in the body are processed as Liquid commands. To show them as they are, wrap them in raw tags ({% raw %} and the matching endraw tag).

## Sidebar
If docs/_data/nav.yml exists, the sidebar follows its order and names.

```yaml
- title: Getting started
  children:
    - title: Overview
      url: /
    - title: Install
      url: /getting-started/install.html
- title: FAQ
  url: /faq.html
```

- An item without url is a group that holds its children.
- url is a path from the site root, ending in .html. The top page is /.
- Nesting can be up to 48 levels.

Without nav.yml, the sidebar is built from the folder structure. Folders become groups, and the group name is the heading at the top of the folder's index.md or else README.md (or else the folder name). The order is the file path, with index.md or else README.md first in each folder. To change the order or leave pages out, use nav.yml.

## What you can use in the body
- Headings, bold, italic, strikethrough, tables, ordered and unordered lists, task lists (- [ ] and - [x]), quotes, horizontal rules, footnotes ([^1]), definition lists (": explanation" on the line after the term), abbreviations (*[HTML]: HyperText Markup Language)
- Give code blocks a language name. A copy button is added automatically.
- Callouts: GitHub alerts (NOTE, TIP, IMPORTANT, WARNING, CAUTION, in capital letters, alone on the first line of a top-level quote). To choose the title, write {: .note data-title="..." } after a quote instead.

```markdown
> [!NOTE]
> After changing a setting, wait a few minutes and check.

> This operation cannot be undone.
{: .warning data-title="Warning" }
```

- Collapsible section:

```markdown
<details markdown="1">
<summary>Show details</summary>

Hidden **text**.

</details>
```

- Table of contents inside the body: "{:toc}" on the line after "* toc"

## Changing colors, fonts, and widths
Create docs/assets/css/style.scss. The first two lines and the @import are required.

```scss
---
---

@import "tm2d";

:root {
  --tm2d-accent: #0a7d5a;
  --tm2d-dark-accent: #5fd0a8;
}
```

- Colors: --tm2d-accent, --tm2d-accent-weak, --tm2d-bg, --tm2d-text, --tm2d-muted, --tm2d-subtle, --tm2d-border, --tm2d-link, --tm2d-tip, --tm2d-important, --tm2d-warning, --tm2d-warning-weak, --tm2d-caution
- Dark mode colors are separate variables: --tm2d-dark-accent, --tm2d-dark-accent-weak, --tm2d-dark-bg, --tm2d-dark-text, --tm2d-dark-muted, --tm2d-dark-subtle, --tm2d-dark-border, --tm2d-dark-tip, --tm2d-dark-important, --tm2d-dark-warning, --tm2d-dark-warning-weak, --tm2d-dark-caution. --tm2d-link has no dark mode variable; by default it follows the accent color.
- Fonts and widths: --tm2d-font-body, --tm2d-font-heading, --tm2d-font-mono, --tm2d-font-size, --tm2d-line-height, --tm2d-sidebar-width, --tm2d-toc-width, --tm2d-content-max-width
- Keep the contrast between text and background at 4.5:1 or more.

## Multilingual
- Put the pages in the language of the whole site directly under docs/, and translations in a folder named after their language: docs/guide/config.md and docs/ja/guide/config.md. No setting is needed. Do not make a folder for the language of the whole site.
- A language folder is a two-letter ISO 639-1 code, optionally with a region (zh-CN). A folder with such a name is always treated as a language.
- Translations are files with the same path apart from the language folder, and the language switch appears on pages that have them. Paths to shared images need one more ../ in a language folder.

- To set the order by hand, add a file per language such as docs/_data/nav.ja.yml. In it, write URLs such as /ja/guide/config.html.
- The top page of a language is <language>/index.md (URL /<language>/).
- The sidebar and search cover only pages in the same language as the current page.

## What you cannot do, and limits
- Use only what works with the standard GitHub Pages build. Custom plugins cannot be used.
- Mermaid diagrams and math are not drawn by the theme. To draw them, load Mermaid or MathJax in docs/_includes/body-custom.html.
- The "Powered by tiny-md2docs" footer cannot be removed.
- Search does not cross languages.
- README.md, LICENSE.md, and the like do not become pages without front matter (except when README.md becomes the top page of a folder without index.md).
- The theme has no classes for spacing, colors, text, buttons, badges, or preview frames. If you need one, define it in docs/assets/css/style.scss.
````
{% endraw %}
