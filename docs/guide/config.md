---
ref: config
---

# Configuration

All settings go in `docs/_config.yml`. The minimum setting is the single `remote_theme` line.

The settings are listed in [_config.yml](../reference/site-config.md).

## Site information

```yaml
remote_theme: akilasatolu/tiny-md2docs
title: My Docs
description: Documentation on how to use the product
lang: en
```

- `title` is the site name shown in the header and the browser tab.
- `description` is the description used by search engines and social media. A page can override it with `description` in its front matter.
- `lang` is the language of the whole site. It is used for `<html lang>` and the on-screen text. If you omit it, it is `en`. To use a language other than English, see [Multilingual](i18n.md).
- If you do not write `title`, the site name is the repository name for a project page (`https://user.github.io/repo/`), and the account name for a user page (`https://user.github.io/`). If you do not write `description`, the repository description (About) is used.

## Do not publish the original .md files

With only the `remote_theme` line, the original `.md` files are published along with the HTML pages (for example, `/guide/config.html` and `/guide/config.md`). The content is the same, but if you do not want them published, add these two lines.

```yaml
optional_front_matter:
  remove_originals: true
```

- A page that has front matter does not have its original `.md` published, even without this setting.
- Files with certain names, such as `README.md`, `LICENSE.md`, and `CONTRIBUTING.md`, do not become pages without front matter, and they are published as `.md` even with this setting. To make one a page, write an empty front matter (two `---` lines) at the top.
- `README.md` also becomes the top page of its folder when the same folder has no `index.md`. To stop publishing the original `README.md` in that case too, add the following.

```yaml
readme_index:
  remove_originals: true
```

## Theme settings

The theme's behavior is set together under `theme_options`. Items you do not write use their default values.

```yaml
theme_options:
  logo: /assets/images/logo.svg
  favicon: /assets/images/logo.svg
  dark_mode: auto
  search: true
```

Write the paths of the logo and favicon as paths from the site root. Even for a project page (`https://user.github.io/repo/`), you do not need to add `/repo`.

All items are listed in [theme_options](../reference/theme-options.md).

## Change the on-screen text

You can override the text of buttons and the search box with `theme_options.strings`. The text written here is used for pages in languages that have no text of their own. To split it by language, see [Multilingual](i18n.md).

```yaml
theme_options:
  strings:
    search_placeholder: Search by keyword
    next: Next page
```

The list of keys is under "On-screen text" in [theme_options](../reference/theme-options.md).

## Footer

Every page shows "Powered by tiny-md2docs" at the bottom, with a link to the tiny-md2docs documentation site. There is no setting to hide it. The text stays in English on pages in every language.

## 404 page

When you open a URL that does not exist, the theme shows its own 404 page ("Page not found" in English). You do not need to add one. Change the text with `not_found_title` and `not_found_body` in `strings`.
