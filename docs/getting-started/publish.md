---
ref: publish
---

# Publishing

Normally you publish from the `docs` folder of a branch, as described in [Install](install.md). This page explains the other two ways. Both are set under "Build and deployment" in the repository's Settings → Pages.

## Publish from the root of a branch

Use this when the repository only holds documentation and you want to publish its root.

1. Put `_config.yml` and the Markdown files in the repository root instead of `docs/`. Read `docs/` in this documentation as the repository root.
2. Set it up as in "3. Turn on GitHub Pages" of [Install](install.md). Only the folder differs: choose `/(root)` instead of `/docs`.

When you publish from the root, the other files in the repository are published too. List the files and folders you do not want to publish in `exclude` in `_config.yml`. Writing `exclude` replaces the list of files Jekyll excludes by default (`Gemfile`, `node_modules`, and so on). As in the example below, write the default entries as well.

```yaml
exclude:
  # Jekyll's default excludes
  - Gemfile
  - Gemfile.lock
  - node_modules
  - vendor/bundle/
  - vendor/cache/
  - vendor/gems/
  - vendor/ruby/
  # File for a custom domain
  - CNAME
  # Things you do not want to publish
  - README.md
  - src/
```

## Publish with GitHub Actions

Use this when you want to add steps before the build, or otherwise publish with your own workflow. Create the workflow from the official template that GitHub provides.

1. Under Settings → Pages, set "Source" to "GitHub Actions".
2. Open "Actions" in the repository. If a workflow already exists, press "New workflow".
3. On the "Choose a workflow" page, find "GitHub Pages Jekyll" and press "Configure".
4. In the workflow that opens, change `source: ./` to `source: ./docs`.
5. Press "Commit changes..." to commit the workflow.

After you commit, the workflow runs and the site is published. From then on, it is published every time you push to the default branch.
