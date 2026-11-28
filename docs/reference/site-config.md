# _config.yml

These are the settings you write at the top level of `docs/_config.yml` that the theme reads or that matter when you use it. This is not a list of all Jekyll settings. All of them are optional except `remote_theme`, which loads the theme.

"Defined by" shows what gives the setting its meaning. "This theme" is a setting of this theme only. "This theme's use" is a name whose meaning this theme decides.

## Settings the theme reads

| Item | Default | Description | Defined by |
| --- | --- | --- | --- |
| `title` | The repository name for a project page, the account name for a user page | The site name | Common Jekyll name (default filled by `jekyll-github-metadata`) |
| `description` | The repository description (About) | The site description | Common Jekyll name (default filled by `jekyll-github-metadata`) |
| `image` | None | The image shown when shared on social media | This theme's use |
| `lang` | `en` | The language of pages that are not in a language folder ([Multilingual](../guide/i18n.md)) | This theme's use |
| `theme_options` | None | The theme's settings ([theme_options](theme-options.md)) | This theme |

## Related settings

| Item | Default | Description | Defined by |
| --- | --- | --- | --- |
| `remote_theme` | None | `akilasatolu/tiny-md2docs`. Add `@` and a branch, tag, or commit to fix the version | `jekyll-remote-theme` |
| `optional_front_matter` | `enabled: true`, `remove_originals: false` | Handles Markdown files without front matter. `enabled: false` stops making them pages. `remove_originals: true` stops publishing the original `.md`. Files such as `README.md` and `LICENSE.md` without front matter do not become pages ([Configuration](../guide/config.md)) | `jekyll-optional-front-matter` |
| `readme_index` | `enabled: true`, `remove_originals: false`, `with_frontmatter: false` | Makes `README.md` the top page of a folder that has no index. `with_frontmatter: true` also does this for a README with front matter | `jekyll-readme-index` |
| `exclude` | `Gemfile`, `Gemfile.lock`, `node_modules`, `vendor/bundle/`, `vendor/cache/`, `vendor/gems/`, `vendor/ruby/`, `CNAME` | Files not to publish. Writing it replaces the default list ([Publishing](../getting-started/publish.md)) | Jekyll (`CNAME` is added by GitHub Pages) |
