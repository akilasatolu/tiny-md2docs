---
ref: front-matter
---

# front matter

These are the items you can write at the top of a page. All of them are optional. You do not even have to write the front matter itself.

```markdown
---
title: Install
description: Steps to start using tm2d
nav_order: 1
---
```

| Item | Description |
| --- | --- |
| `title` | The page name. If omitted, the first heading of the body is used |
| `description` | The page description. If omitted, the site's `description` |
| `image` | The image shown when shared on social media. If omitted, the site's `image` |
| `nav_order` | The order in the automatic order. Smaller comes first |
| `nav_exclude` | `true` hides the page from the sidebar and the previous/next links |
| `search_exclude` | `true` hides the page from search |
| `toc` | `false` hides the table of contents |
| `ref` | If you write the same value on translations of each other, a language switcher appears in the header |
