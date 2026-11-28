#!/usr/bin/env bash
# CSS と JS の大きさを gzip で測る。合計が 10240 バイトを超えたら失敗する。
# Pages と同じく、本番の設定(Sass を圧縮)でビルドしてから測る。
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
limit=10240

# 本番の設定では、github-metadata が git のリモートからリポジトリ名を取らないので、渡す。
export PAGES_REPO_NWO="${PAGES_REPO_NWO:-akilasatolu/tiny-md2docs}"

JEKYLL_ENV=production "$root/script/preview.sh" > /dev/null
site="$root/.preview/_site"

total=0
for f in assets/css/style.css assets/js/tm2d.js assets/js/search-core.js assets/js/search-ui.js; do
  n=$(gzip -9 -c "$site/$f" | wc -c | tr -d ' ')
  printf '%6d  %s\n' "$n" "$f"
  total=$((total + n))
done
printf '%6d  合計(上限 %d)\n' "$total" "$limit"

if [ "$total" -gt "$limit" ]; then
  echo "上限を超えています" >&2
  exit 1
fi
