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
- You can make groups inside `children` too. In `nav.yml`, you can nest up to 48 levels (the build fails at 49 or more).
- Write `url` as a path from the site root, ending in `.html`. The top page is `/`.
- A `url` that ends in `.md` or points to a page that does not exist is a broken link, and no warning appears.

## Order automatically from folders

When there is no `nav.yml`, the sidebar is built automatically from the folder structure inside `docs/`.

For example, suppose you place files like this.

```text
docs/
  index.md              # heading is "Overview"
  faq.md                # heading is "FAQ"
  getting-started/
    index.md            # heading is "Getting started"
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

- Folder levels are counted from `docs/`. Pages directly under `docs/` are placed first, without a group. In `docs/` and in every folder, `index.md` (or else `README.md`, upper or lower case) comes first.
- A folder directly under `docs/` is a group, and a folder inside it is a subgroup. Deeper folders nest in the same way, with no limit on the depth. The indentation stops growing from the fifth level.
- A folder's `index.md` also appears as an item, like other pages. The heading at the top of `index.md` (or else `README.md`) is also the group name. If there is neither, the folder name is the group name (`guide` and `advanced` in the example above).
- An item's name is the heading at the very top of the body (`#` to `###`). A page that does not start with a heading is named after its file.
- The order is by file path. When you number file names, use the same number of digits, such as `01-` and `02-` (otherwise `10-` comes before `9-`). Within a group, pages come before subgroups. To change the order, to rename items, or to leave pages out, use `nav.yml`.

For how pages are listed for each language, see [Multilingual](i18n.md).

## Previous and next links

At the bottom of each page, links to the previous and next pages in the sidebar order appear.
