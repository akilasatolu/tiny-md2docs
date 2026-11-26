---
ref: sidebar
---

# Sidebar

The sidebar lists the pages of the documentation. You can decide the order in two ways.

## Order with nav.yml

If you put `docs/_data/nav.yml`, the pages are listed in that order and with those names.

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

- An item without `url` becomes a group, and it gathers the items in `children`.
- You can make one more level of group inside `children`. The depth is two levels at most.
- Write `url` as a path from the site root, ending in `.html`. The top page is `/`.

## Order automatically from folders

When there is no `nav.yml`, the sidebar is built automatically from the folder structure inside `docs/`.

For example, suppose you place files like this.

```text
docs/
  index.md              # heading is "Overview"
  faq.md                # heading is "FAQ"
  getting-started/
    index.md            # title: Getting started in the front matter
    install.md          # heading is "Install"
  guide/
    config.md           # heading is "Configuration"
    advanced/
      cache.md          # heading is "Caching"
```

The sidebar is ordered like this.

```text
Overview
FAQ
Getting started
  Getting started
  Install
guide
  Configuration
  advanced
    Caching
```

- Folder levels are counted from `docs/`. Pages directly under `docs/` are placed first, without a group. The top page (`index.md`) comes first.
- A folder directly under `docs/` is a group, and a folder inside it is a subgroup. Pages in deeper folders are placed inside the subgroup.
- A folder's `index.md` also appears as an item, like other pages. Its `title` is also the group name. If there is no `index.md`, the folder name is the group name (`guide` and `advanced` in the example above). To keep it out of the items, write `nav_exclude: true` (the `title` is still used as the group name).
- An item's name is the `title` in the front matter, or otherwise the first heading of the body.
- The order is by `nav_order` in the front matter, smallest first; if equal, by file path. The order of groups is by the `nav_order` in the folder's `index.md`, smallest first; if equal, by folder name. Within a group, pages come before subgroups. The `nav_order` of an `index.md` is used both for the order of the groups and for the order of that page within its group.

```markdown
---
nav_order: 2
---

# Install
```

Write `nav_exclude: true` on pages you do not want in the sidebar.

For how the order works when you split folders by language, see [Multilingual](i18n.md).

## Previous and next links

At the bottom of each page, links to the previous and next pages in the sidebar order appear. You can turn them off with `theme_options.prev_next: false`.

## Hide the sidebar

With `theme_options.sidebar: false`, you can hide the sidebar on all pages. The menu button on narrow screens is hidden too.
