---
ref: install
---

# Install

## 1. Add the config file

In the repository you want to publish, create `docs/_config.yml` and write this one line.

```yaml
remote_theme: akilasatolu/tiny-md2docs@v0
```

`@v0` picks up new versions automatically at the next build. To fix the version, write the version name after `@`.

> **Note** With only this setting, the original `.md` files are published along with the HTML pages. If you do not want that, see "Do not publish the original .md files" in [Configuration](../guide/config.md).
{: .note }

## 2. Write pages

Put Markdown files under `docs/`. The top page is `docs/index.md`. For how to write them, see [Writing pages](../guide/writing.md).

## 3. Turn on GitHub Pages

1. Open Settings → Pages in the repository.
2. Under "Build and deployment", set "Source" to "Deploy from a branch".
3. For "Branch", choose the branch to publish and the `/docs` folder, then press "Save".

After a few minutes, the site is published. To publish from the repository root or with GitHub Actions, see [Publishing](publish.md).

To have an AI write the pages, copy [Information for AI](ai.md).
