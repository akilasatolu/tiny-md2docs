# 테마 확장하기

Jekyll의 표준 기능으로 테마에 내용을 추가하거나 부품을 바꿀 수 있습니다.

## head와 body에 추가하기

접속 분석 스크립트처럼 추가하고 싶은 것은 다음 파일에 씁니다. 테마 업데이트는 그대로 받을 수 있습니다.

| 파일 | 들어가는 곳 |
| --- | --- |
| `docs/_includes/head-custom.html` | `<head>`의 끝 |
| `docs/_includes/body-custom.html` | `</body>` 바로 앞 |

## 테마의 부품 바꾸기

`docs/_includes/`나 `docs/_layouts/`에 같은 이름의 파일을 두면 테마 파일 대신 사용됩니다. 직접 만드는 부품에는 다음과 다른 이름을 붙이세요. 바꾼 파일에는 테마 업데이트가 반영되지 않습니다.

- `_includes`: `body-custom.html`, `breadcrumb.html`, `footer.html`, `head.html`, `head-custom.html`, `header.html`, `headings.html`, `lang.html`, `nav-order.html`, `nav-tree.html`, `pager.html`, `search.html`, `sidebar.html`, `t.html`, `toc.html`, `translations.html`, `url-key.html`
- `_layouts`: `default.html`, `page.html`, `post.html`, `404.html`

404 페이지를 직접 쓰려면 `docs/assets/404.html`을 다음과 같이 만듭니다. 헤더와 사이드바는 테마의 것이 나옵니다.

```html
---
layout: default
permalink: /404.html
---

<article class="tm2d-content">
<h1>찾을 수 없습니다</h1>
</article>
```

## 게시글

`docs/_posts/`의 게시글은 테마 화면으로 표시됩니다. 사이드바, 검색, 이전·다음 링크, 언어 전환에는 나오지 않습니다. 게시글의 언어 지원은 보장하지 않습니다(예를 들어 `2026-01-31-release.ja.md`라는 게시글은 사이트 전체의 언어로 표시됩니다).

## 보장하지 않는 것

컬렉션 사용, 플러그인 추가, `markdown` 같은 Jekyll 설정을 변경한 경우의 표시와 동작은 테마에서 보장하지 않습니다.
