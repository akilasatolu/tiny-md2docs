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
- Do not create what the theme already provides (layouts, sidebar, search, table of contents, 404 page). _layouts and _includes are not needed either.

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
theme_options:
  logo: /assets/images/logo.svg
  favicon: /assets/images/logo.svg
  dark_mode: auto
```

- For a site in only one language other than English, set lang to that language and write the interface text in theme_options.strings (the keys are under "Multilingual" below). With one language, you can write them directly under strings.

```yaml
lang: ja
theme_options:
  strings:
    search_placeholder: ドキュメントを検索
    next: 次へ
```

Top-level settings:
- remote_theme: the theme. Add @ followed by a branch, tag, or commit to pin a version.
- title: the site name. If omitted, the repository name or the account name.
- description: the description of the site. If omitted, the description of the repository.
- image: the default image used when a page is shared on social media.
- lang: the language of pages whose file name has no language. If omitted, en.
- theme_options: theme settings (the table below).
- optional_front_matter: remove_originals: true stops publishing the original .md files. With enabled: false, Markdown without front matter does not become a page.
- readme_index: in a folder without index.md, README.md becomes the top page. You can set remove_originals, enabled, and with_frontmatter.
- exclude: files not to publish. Writing it replaces Jekyll's default list (Gemfile, Gemfile.lock, node_modules, vendor/bundle/, vendor/cache/, vendor/gems/, vendor/ruby/) and CNAME, so write those too.

theme_options (omitted items use the default):

| Item | Default | Meaning |
| --- | --- | --- |
| sidebar | true | false removes the sidebar |
| search | true | false removes search |
| dark_mode | auto | auto, light, or dark |
| prev_next | true | false removes the previous and next links |
| toc | true | false removes the table of contents |
| breadcrumb | true | false removes the breadcrumb |
| code_copy | true | false removes the copy button |
| top_link | true | false removes "Back to top" |
| heading_link | true | false removes the heading links |
| github_link | true | false removes the link to GitHub |
| logo | none | path of the logo image (from the site root; do not add /repo) |
| favicon | none | path of the favicon (same as above) |
| search_content_limit | 5000 | maximum number of body characters searched (per page) |
| strings | none | overrides of the interface text |

## Writing pages
- Write in Markdown (kramdown with GFM, as on GitHub Pages).
- Front matter is not needed. The name of a page is the first heading of the body. Start each page with a "# Heading".
- Link between pages with a relative path to the target .md file. Examples: [Usage](guide/usage.md), [Back](../overview.md). In a translated page, write the file name of the same language, such as guide/usage.ja.md. Do not write paths starting with / or direct links to .html.
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

- An item without url is a group that holds its children. A group with both url and children becomes a link in the breadcrumb.
- url is a path from the site root, ending in .html. The top page is /.
- Nesting can be up to 48 levels.

Without nav.yml, the sidebar is built from the folder structure. Folders become groups, and the group name is the first heading of the folder's index.md (or else the folder name). The order is the file path. To change the order or leave pages out, use nav.yml.

## What you can use in the body
- Headings, bold, italic, strikethrough, tables, ordered and unordered lists, task lists (- [ ] and - [x]), quotes, horizontal rules, footnotes ([^1]), definition lists (": explanation" on the line after the term), abbreviations (*[HTML]: HyperText Markup Language)
- Give code blocks a language name. A copy button is added automatically.
- There are two kinds of callouts: note and warning.

```markdown
> **Note** After changing a setting, wait a few minutes and check.
{: .note }

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

- Colors: --tm2d-accent, --tm2d-accent-weak, --tm2d-bg, --tm2d-text, --tm2d-muted, --tm2d-subtle, --tm2d-border, --tm2d-link
- Dark mode colors are separate variables: --tm2d-dark-accent, --tm2d-dark-accent-weak, --tm2d-dark-bg, --tm2d-dark-text, --tm2d-dark-muted, --tm2d-dark-subtle, --tm2d-dark-border. --tm2d-link has no dark mode variable; by default it follows the accent color.
- Fonts and widths: --tm2d-font-body, --tm2d-font-heading, --tm2d-font-mono, --tm2d-font-size, --tm2d-line-height, --tm2d-sidebar-width, --tm2d-toc-width, --tm2d-content-max-width
- Keep the contrast between text and background at 4.5:1 or more.

## Multilingual
- Put a translation next to the original page, with the language added to the file name: docs/guide/config.md and docs/guide/config.ja.md. Pages without a language in the name are in the language of the whole site.
- The language is a two-letter ISO 639-1 code, optionally with a region (zh-CN). No setting is needed, and the language switch appears on pages that have translations.

```yaml
lang: en
theme_options:
  strings:
    ja:
      search_placeholder: ドキュメントを検索
      next: 次へ
```

- The theme's interface text is only in English. For other languages, write it per language in theme_options.strings.
- To set the order by hand, add a file per language such as docs/_data/nav.ja.yml. In it, write URLs such as /guide/config.ja.html.
- The top page of a language is index.<language>.md (URL /index.<language>.html).
- The sidebar and search cover only pages in the same language as the current page.

Keys of strings (the default English text is in parentheses):
skip_to_content (Skip to content), nav_label (Documentation), menu_open (Open menu), menu_close (Close menu), search_label (Search), search_placeholder (Search the docs), search_open (Open search), search_clear (Clear search), search_no_results (No results), search_results_count ({n} results), toggle_dark (Switch to dark mode), toggle_light (Switch to light mode), github (GitHub), toc_title (On this page), breadcrumb_label (Breadcrumb), prev (Previous), next (Next), copy (Copy), copied (Copied), not_found_title (Page not found), not_found_body (The page you are looking for may have been moved or deleted.), top_link (Back to top), heading_link (Link to this section), lang_switch (Language)

## What you cannot do, and limits
- Use only what works with the standard GitHub Pages build. Custom plugins cannot be used.
- Mermaid diagrams are not drawn.
- The only callouts are note and warning.
- The "Powered by tiny-md2docs" footer cannot be removed.
- Search does not cross languages.
- README.md, LICENSE.md, and the like do not become pages without front matter (except when README.md becomes the top page of a folder without index.md).
- The theme has no classes for spacing, colors, text, buttons, badges, or preview frames. If you need one, define it in docs/assets/css/style.scss.
````
{% endraw %}
