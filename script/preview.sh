#!/usr/bin/env bash
# テーマを docs/ に組み込んで、ローカルでビルドする。
# remote_theme と同じく、docs/ 側のファイルがテーマより優先される。
# 使い方: script/preview.sh [serve]
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
out="$root/.preview"

rm -rf "$out"
mkdir -p "$out"
for dir in _layouts _includes _sass assets; do
  if [ -d "$root/$dir" ]; then
    cp -R "$root/$dir" "$out/"
  fi
done
cp -R "$root/docs/." "$out/"
grep -v '^remote_theme:' "$root/docs/_config.yml" > "$out/_config.yml"
# github-pages gem は theme がないと既定のテーマ(primer)を使う。
# remote_theme で読み込んだときと同じにするため、既定のテーマを止める。
printf '\ntheme: null\n' >> "$out/_config.yml"

export BUNDLE_GEMFILE="$root/Gemfile"
if [ "${1:-}" = "serve" ]; then
  bundle exec jekyll serve --source "$out" --destination "$out/_site"
else
  bundle exec jekyll build --source "$out" --destination "$out/_site"
fi
