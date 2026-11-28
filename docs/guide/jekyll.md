# Extend the theme

You can add to the theme and replace its parts with the standard features of Jekyll.

## Add to head and body

Put what you want to add, such as an analytics script, in these files. You keep receiving theme updates.

| File | Where it goes |
| --- | --- |
| `docs/_includes/head-custom.html` | The end of `<head>` |
| `docs/_includes/body-custom.html` | Just before `</body>` |

## Replace theme parts

A file with the same name in `docs/_includes/` or `docs/_layouts/` is used in place of the theme's file. Give your own parts names that differ from these. A file you replaced no longer receives theme updates.

- `_includes`: `body-custom.html`, `footer.html`, `head.html`, `head-custom.html`, `header.html`, `headings.html`, `lang.html`, `nav-order.html`, `nav-tree.html`, `pager.html`, `search.html`, `sidebar.html`, `toc.html`, `translations.html`, `url-key.html`
- `_layouts`: `default.html`, `page.html`, `post.html`, `404.html`

To write your own 404 page, create `docs/assets/404.html` as follows. The header and sidebar stay those of the theme.

```html
---
layout: default
permalink: /404.html
---

<article class="tm2d-content">
<h1>Not found</h1>
</article>
```

## Posts

Posts in `docs/_posts/` are shown in the theme's screen. They do not appear in the sidebar, search, previous and next links, or the language switch. Language support for posts is not guaranteed (a post in `docs/ja/_posts/` is shown in Japanese, but it has no language switch).

## Not guaranteed

The theme does not guarantee how pages look and behave when you use collections, add plugins, or change Jekyll settings such as `markdown`.
