---
ref: site-config
---

# _config.yml

These are the settings you write at the top level of `docs/_config.yml` that the theme reads or that matter when you use it. This is not a list of all Jekyll settings. All of them are optional except `remote_theme`, which loads the theme.

"Defined by" shows what gives the setting its meaning. "This theme" is a setting of this theme only. "This theme's use" is a name whose meaning this theme decides.

## Settings the theme reads

| Item | Default | Description | Defined by |
| --- | --- | --- | --- |
| `title` | The repository name for a project page, the account name for a user page | The site name | Common Jekyll name (default filled by `jekyll-github-metadata`) |
| `description` | The repository description (About) | The site description. A page's `description` takes priority | Common Jekyll name (default filled by `jekyll-github-metadata`) |
| `image` | None | The default image shown when shared on social media. A page's `image` takes priority | This theme's use |
| `lang` | `en` | The language of the whole site ([Multilingual](../guide/i18n.md)) | This theme's use |
| `theme_options` | None | The theme's settings ([theme_options](theme-options.md)) | This theme |
| `url`, `baseurl` | Filled in on GitHub Pages | The start of absolute URLs, and the path put before links. Usually you do not need to write them | Jekyll (default filled by `jekyll-github-metadata`) |
| `repository` | Determined automatically (in a local development build, from the `origin` Git remote) | The repository as `owner/name`, used for the GitHub link in the header. The environment variable `PAGES_REPO_NWO` takes priority | `jekyll-github-metadata` |

## Related settings

| Item | Default | Description | Defined by |
| --- | --- | --- | --- |
| `remote_theme` | None | `akilasatolu/tiny-md2docs`. Add `@` and a branch, tag, or commit to fix the version | `jekyll-remote-theme` |
| `defaults` | Empty | Sets front matter values for a group of pages, such as a folder. Used to set `lang` per language folder | Jekyll |
| `optional_front_matter` | `enabled: true`, `remove_originals: false` | Handles Markdown files without front matter. `enabled: false` stops making them pages. `remove_originals: true` stops publishing the original `.md`. Files such as `README.md` and `LICENSE.md` without front matter do not become pages unless listed in `include` | `jekyll-optional-front-matter` |
| `readme_index` | `enabled: true`, `remove_originals: false`, `with_frontmatter: false` | Makes `README.md` the top page of a folder that has no index. `with_frontmatter: true` also does this for a README with front matter | `jekyll-readme-index` |
| `titles_from_headings` | `enabled: true`, `strip_title: false`, `collections: false` | Uses the first heading as the title of a page without `title`. `strip_title: true` removes that heading from the body. `collections: true` also applies to collections | `jekyll-titles-from-headings` |
| `relative_links` | `enabled: true`, `collections: false` | Turns relative links to `.md` files into published URLs. `collections: true` also applies to collections. `exclude` lists files to skip | `jekyll-relative-links` |
| `exclude` | `Gemfile`, `Gemfile.lock`, `node_modules`, `vendor/bundle/`, `vendor/cache/`, `vendor/gems/`, `vendor/ruby/`, `CNAME` | Files not to publish. Writing it replaces the default list ([Publishing](../getting-started/publish.md)) | Jekyll (`CNAME` is added by GitHub Pages) |
| `include` | `.htaccess` | Files to include even though their names would be skipped | Jekyll |
