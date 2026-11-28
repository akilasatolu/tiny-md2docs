# theme_options

These are the items you can write in `theme_options` in `docs/_config.yml`.

| Item | Default | Description |
| --- | --- | --- |
| `sidebar` | `true` | `false` hides the sidebar |
| `search` | `true` | `false` removes the search box and the index |
| `dark_mode` | `auto` | One of `auto`, `light`, and `dark` |
| `prev_next` | `true` | `false` hides the previous/next links at the bottom of the page |
| `toc` | `true` | `false` hides the table of contents |
| `breadcrumb` | `true` | `false` hides the breadcrumb |
| `code_copy` | `true` | `false` hides the code copy button |
| `top_link` | `true` | `false` hides the back-to-top link below the body |
| `heading_link` | `true` | `false` removes the links on headings |
| `github_link` | `true` | `false` hides the link to GitHub in the header. The link appears only when the repository URL is known |
| `logo` | None | The path of the logo image in the header. If not set, only the site name text appears |
| `favicon` | None | The path of the favicon. If not set, none is shown |
| `search_content_limit` | `5000` | The maximum number of body characters searched (per page) |
| `lang_layout` | None | How the language of a page is decided. If not set, by file name (`config.ja.md`). `folder` uses the language folder (`ja/config.md`; the language of the whole site stays directly under `docs/`) ([Multilingual](../guide/i18n.md)) |
| `strings` | None | Overrides for on-screen text. You can also split it by language ([Multilingual](../guide/i18n.md)) |

## On-screen text

These are the keys you can write in `strings`, with the default text (English). The theme has text in English only. For languages other than English, write it for each language ([Multilingual](../guide/i18n.md)).

| Key | Default text |
| --- | --- |
| `skip_to_content` | Skip to content |
| `nav_label` | Documentation |
| `menu_open` | Open menu |
| `menu_close` | Close menu |
| `search_label` | Search |
| `search_placeholder` | Search the docs |
| `search_open` | Open search |
| `search_clear` | Clear search |
| `search_no_results` | No results |
| `search_results_count` | {n} results (`{n}` becomes the count) |
| `toggle_dark` | Switch to dark mode |
| `toggle_light` | Switch to light mode |
| `github` | GitHub |
| `toc_title` | On this page |
| `breadcrumb_label` | Breadcrumb |
| `prev` | Previous |
| `next` | Next |
| `copy` | Copy |
| `copied` | Copied |
| `not_found_title` | Page not found |
| `not_found_body` | The page you are looking for may have been moved or deleted. |
| `top_link` | Back to top |
| `heading_link` | Link to this section |
| `lang_switch` | Language |
