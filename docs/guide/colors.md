# Colors and dark mode

## Change the colors

The colors are set with CSS variables. To change them, create `docs/assets/css/style.scss` and write the following.

```scss
---
---

@import "tm2d";

:root {
  --tm2d-accent: #0a7d5a;
  --tm2d-accent-weak: #e3f4ee;
}
```

You must write the first two lines (an empty front matter) and the `@import` line. {% raw %}`@import "{{ site.theme }}";`{% endraw %}, as in the GitHub documentation, also works (not in a fork with another repository name). This file is used in place of the theme's `style.scss`.

The variables you can use are as follows.

| Variable | Where it is used | Default |
| --- | --- | --- |
| `--tm2d-accent` | Links, the current page highlight, focus outlines | `#1E5AA8` |
| `--tm2d-accent-weak` | Background of the current page | `#E8F0FA` |
| `--tm2d-bg` | Background | `#FFFFFF` |
| `--tm2d-text` | Text | `#1A1D21` |
| `--tm2d-muted` | Secondary text | `#5B6168` |
| `--tm2d-subtle` | Background of code and quotes | `#F5F6F4` |
| `--tm2d-border` | Divider lines | `#E4E6E1` |
| `--tm2d-link` | Links (the same as accent by default) | `--tm2d-accent` |
| `--tm2d-tip` | Tip callouts | `#176B2C` |
| `--tm2d-important` | Important callouts | `#6F42C1` |
| `--tm2d-warning` | Warning callouts | `#8A5A00` |
| `--tm2d-warning-weak` | Background of warning callouts | `#FBF1DC` |
| `--tm2d-caution` | Caution callouts | `#B31D28` |

Choose colors that give a contrast ratio of at least 4.5:1 between text and background.

## Dark mode colors

The dark mode colors are kept in variables with different names (such as `--tm2d-dark-accent`). Changing `--tm2d-accent` does not change the dark mode colors. To change the dark mode colors too, write them in the same `:root`.

```scss
:root {
  --tm2d-accent: #0a7d5a;
  --tm2d-dark-accent: #5fd0a8;
}
```

## Switch dark mode

The theme follows the OS setting. A toggle button appears in the header and remembers the choice.

## Change fonts and widths

Fonts and widths are also changed by overriding CSS variables in the same `:root`.

| Variable | Where it is used | Default |
| --- | --- | --- |
| `--tm2d-font-body` | Body font | System font |
| `--tm2d-font-heading` | Heading font | Same as `--tm2d-font-body` |
| `--tm2d-font-mono` | Code font | System monospace font |
| `--tm2d-font-size` | Body font size | `16px` |
| `--tm2d-line-height` | Body line height | `1.8` |
| `--tm2d-sidebar-width` | Sidebar width | `264px` |
| `--tm2d-toc-width` | Width of the table of contents on the right | `220px` |
| `--tm2d-content-max-width` | Maximum width of the body | None (`none`) |

To limit the width of the body, set `--tm2d-content-max-width` to a value such as `760px`.

The theme does not load fonts from outside. To use a web font such as Noto Sans JP, load it in your own `style.scss` and override `--tm2d-font-body`.

```scss
---
---

@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap");
@import "tm2d";

:root {
  --tm2d-font-body: "Noto Sans JP", sans-serif;
}
```
