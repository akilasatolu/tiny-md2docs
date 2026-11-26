---
ref: ai
search_exclude: true
---

# AI에게 전달할 정보

AI에게 문서를 만들게 할 때 전달할 정보를 아래 상자에 모았습니다. 상자 오른쪽 위의 복사 버튼으로 전체를 복사할 수 있습니다.

1. 아래 상자의 전체를 복사해 AI에게 붙여 넣습니다.
2. 이어서 만들고 싶은 문서의 내용(제품이나 프로젝트 설명, 대상 독자, 언어, 넣고 싶은 페이지)을 써서 보냅니다.
3. AI가 만든 파일을 저장소에 넣고, [설치](install.md)의 "3. GitHub Pages 켜기" 절차로 공개합니다.

{% raw %}
````text
# tiny-md2docs(tm2d)로 문서 만들기

당신은 GitHub Pages용 Jekyll 테마 tiny-md2docs(tm2d)를 사용하는 문서를 만듭니다. 다음 사양을 따르세요.

## 진행 방법
- 제품의 내용, 대상 독자, 언어, 넣을 페이지를 모르면 추측해서 쓰지 말고 질문하세요.
- 만드는 파일은 경로와 내용 전체를 보여 주세요.
- 테마가 제공하는 것(레이아웃, 사이드바, 검색, 목차, 404 페이지)은 만들지 않습니다. _layouts와 _includes도 필요 없습니다.

## 파일 배치
- 모두 docs/ 아래에 둡니다.
- docs/_config.yml: 설정(필수)
- docs/index.md: 첫 페이지
- docs/**/*.md: 페이지. 공개하면 .md가 .html URL이 됩니다.
- docs/_data/nav.yml: 사이드바의 순서(선택)
- docs/assets/css/style.scss: 색상 등의 변경(선택)
- 이미지 등은 docs/assets/images/ 같은 폴더에 둡니다.
- 공개하려면 저장소의 Settings → Pages에서 "Deploy from a branch"를 선택하고, 브랜치와 /docs 폴더를 지정합니다.

## docs/_config.yml
최소 설정은 다음 한 줄입니다.

```yaml
remote_theme: akilasatolu/tiny-md2docs
```

자주 쓰는 형태:

```yaml
remote_theme: akilasatolu/tiny-md2docs
title: My Docs
description: 제품 사용법을 정리한 문서
lang: en
optional_front_matter:
  remove_originals: true
theme_options:
  logo: /assets/images/logo.svg
  favicon: /assets/images/logo.svg
  dark_mode: auto
```

- 한국어만 쓰는 사이트는 lang: ko로 하고, 화면 문구를 theme_options.strings에 씁니다(아래 "다국어"의 키). 언어가 하나면 다음처럼 strings 바로 아래에 쓸 수 있습니다.

```yaml
lang: ko
theme_options:
  strings:
    search_placeholder: 문서 검색
    next: 다음
```

최상위 설정:
- remote_theme: 테마. @ 뒤에 브랜치, 태그, 커밋을 쓰면 버전을 고정할 수 있습니다.
- title: 사이트 이름. 생략하면 저장소 이름이나 계정 이름입니다.
- description: 사이트 설명. 생략하면 저장소 설명입니다.
- image: SNS에 공유할 때 쓰는 이미지의 기본값.
- lang: 사이트 전체의 언어. 생략하면 en입니다.
- theme_options: 테마 설정(아래 표).
- defaults: 폴더별 front matter 값. 다국어에서 사용합니다.
- optional_front_matter: remove_originals: true로 하면 원본 .md 파일을 공개하지 않습니다. enabled: false로 하면 front matter가 없는 Markdown은 페이지가 되지 않습니다.
- readme_index: index.md가 없는 폴더에서는 README.md가 첫 페이지가 됩니다. remove_originals, enabled, with_frontmatter를 지정할 수 있습니다.
- exclude: 공개하지 않을 파일. 쓰면 Jekyll의 기본 목록(Gemfile, Gemfile.lock, node_modules, vendor/bundle/, vendor/cache/, vendor/gems/, vendor/ruby/)과 CNAME이 대체되므로 함께 씁니다.

theme_options(생략한 항목은 기본값):

| 항목 | 기본값 | 내용 |
| --- | --- | --- |
| sidebar | true | false면 사이드바를 없앰 |
| search | true | false면 검색을 없앰 |
| dark_mode | auto | auto, light, dark |
| prev_next | true | false면 이전·다음 링크를 없앰 |
| toc | true | false면 목차를 없앰 |
| breadcrumb | true | false면 이동 경로를 없앰 |
| code_copy | true | false면 복사 버튼을 없앰 |
| top_link | true | false면 "맨 위로"를 없앰 |
| heading_link | true | false면 제목 링크를 없앰 |
| github_link | true | false면 GitHub 링크를 없앰 |
| logo | 없음 | 로고 이미지 경로(사이트 루트부터. /repo는 붙이지 않음) |
| favicon | 없음 | 파비콘 경로(위와 같음) |
| search_content_limit | 5000 | 검색 색인에 넣는 본문의 상한(페이지당 글자 수) |
| strings | 없음 | 화면 문구 덮어쓰기 |

## 페이지 작성
- Markdown(GitHub Pages의 kramdown, GFM)으로 씁니다.
- front matter는 생략할 수 있습니다. 페이지 이름은 title, 없으면 본문의 첫 제목입니다. 각 페이지는 "# 제목"으로 시작합니다.
- 페이지 사이의 링크는 대상 .md 파일의 상대 경로로 씁니다. 예: [사용법](guide/usage.md), [돌아가기](../overview.md). /로 시작하는 경로나 .html로의 직접 링크는 쓰지 않습니다.
- 이미지는 상대 경로로 씁니다. 예: ![그림](../assets/images/figure.png){: width="480" }
- h2와 h3 제목이 합쳐서 두 개 이상이면 목차가 나옵니다. 제목을 목차에서 빼려면 제목 다음 줄에 {: .no_toc }를 씁니다.
- 본문에 이중 중괄호나 "중괄호와 %"를 쓰면 Liquid 명령으로 처리됩니다. 그대로 보여 주려면 raw 태그({% raw %}와 짝이 되는 endraw 태그)로 감쌉니다.

front matter 항목(모두 선택):

| 항목 | 내용 |
| --- | --- |
| title | 페이지 이름 |
| description | 페이지 설명 |
| image | SNS에 공유할 때의 이미지 |
| nav_order | 자동 정렬의 순서(작을수록 앞) |
| nav_exclude | true면 사이드바와 이전·다음 링크에 나오지 않음 |
| search_exclude | true면 검색에 나오지 않음 |
| toc | false면 목차를 표시하지 않음 |
| ref | 번역 페이지끼리 같은 값을 쓰면 언어 전환이 나옴 |

## 사이드바
docs/_data/nav.yml이 있으면 그 순서와 이름으로 나열됩니다.

```yaml
- title: 시작하기
  children:
    - title: 개요
      url: /
    - title: 설치
      url: /getting-started/install.html
- title: 자주 묻는 질문
  url: /faq.html
```

- url이 없는 항목은 그룹이며 children을 묶습니다. url과 children을 모두 가진 그룹은 이동 경로에서 링크가 됩니다.
- url은 사이트 루트부터의 경로이고 끝은 .html, 첫 페이지는 /입니다.
- 중첩은 48단계까지입니다.

nav.yml이 없으면 폴더 구조로 자동 정렬됩니다. 폴더가 그룹이 되고, 그룹 이름은 그 폴더 index.md의 title(없으면 폴더 이름)입니다. 순서는 nav_order, 같으면 경로 순입니다.

## 본문에서 쓸 수 있는 표현
- 제목, 굵게, 기울임, 취소선, 표, 번호 있는 목록과 없는 목록, 작업 목록(- [ ]와 - [x]), 인용, 구분선, 각주([^1]), 정의 목록(용어 다음 줄에 ": 설명"), 약어(*[HTML]: HyperText Markup Language)
- 코드 블록에는 언어 이름을 붙입니다. 복사 버튼이 자동으로 붙습니다.
- 알림 상자는 note와 warning 두 종류입니다.

```markdown
> **메모** 설정을 바꾼 뒤에는 몇 분 기다렸다가 확인합니다.
{: .note }

> 이 작업은 되돌릴 수 없습니다.
{: .warning data-title="주의" }
```

- 접기:

```markdown
<details markdown="1">
<summary>자세히 보기</summary>

숨겨진 **글**입니다.

</details>
```

- 본문 안의 목차: "* toc" 다음 줄에 "{:toc}"

## UI 구성 요소 클래스
단락 등의 다음 줄에 {: .클래스이름 }을 쓰거나, 글자 바로 뒤에 이어서 씁니다. HTML의 class에도 쓸 수 있습니다. 예: [시작하기](usage.md){: .button .button-primary }

- 버튼: `.button`, `.button-outline`, `.button-primary`, `.button-green`, `.button-purple`, `.button-red`, `.button-plain`(button 요소의 꾸밈을 없앰), `.disabled`. `.button-*`의 색과 테두리는 `.button`과 함께 씁니다.
- 배지: `.badge`, `.badge-blue`, `.badge-green`, `.badge-purple`, `.badge-red`, `.badge-yellow`
- 표시 예시를 둘러싸는 틀: `.preview`(안에 Markdown을 쓸 때는 markdown="1")
- 글자 크기: `.font-size-1`부터 `.font-size-10`
- 굵기: `.font-weight-300`, `.font-weight-400`, `.font-weight-500`, `.font-weight-600`, `.font-weight-700`
- 글꼴과 간격: `.font-family-mono`, `.line-height-0`, `.line-height-body`, `.line-height-tight`, `.letter-spacing-0`, `.letter-spacing-wide`, `.letter-spacing-wider`, `.text-transform-uppercase`
- 제목 모양: `.heading-1`부터 `.heading-6`
- 글자 위치: `.align-left`, `.align-center`, `.align-right`
- 색: .color-색-1, .color-색-2, .background-색-1, .background-색-2. 색은 blue, green, yellow, red, purple, gray입니다. 1은 배경용, 2는 글자용입니다.
- 표시: `.display-block`, `.display-flex`, `.display-inline`, `.display-inline-block`, `.display-none`, `.float-left`, `.float-right`, `.visually-hidden`
- 배치: `.justify-content-start`, `.justify-content-end`, `.justify-content-space-between`, `.justify-content-space-around`, `.vertical-align-baseline`, `.vertical-align-bottom`, `.vertical-align-middle`, `.vertical-align-text-bottom`, `.vertical-align-text-top`, `.vertical-align-top`
- 여백(N에 4px를 곱한 너비. N은 0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16): .margin-N, .padding-N, .margin-top-N(right, bottom, left, x, y도 같음. padding도 같음), .margin-x-negative-N, `.margin-x-auto`
- 화면 너비별: 표시와 여백 클래스 앞에 from-768-이나 from-1200-을 붙이면 그 너비 이상에서만 적용됩니다(예: .from-768-display-none).

## 색상, 글자, 너비 변경
docs/assets/css/style.scss를 만듭니다. 처음 두 줄과 @import는 필수입니다.

```scss
---
---

@import "tm2d";

:root {
  --tm2d-accent: #0a7d5a;
  --tm2d-dark-accent: #5fd0a8;
}
```

- 색: --tm2d-accent, --tm2d-accent-weak, --tm2d-bg, --tm2d-text, --tm2d-muted, --tm2d-subtle, --tm2d-border, --tm2d-link
- 다크 모드의 색은 별도의 변수입니다: --tm2d-dark-accent, --tm2d-dark-accent-weak, --tm2d-dark-bg, --tm2d-dark-text, --tm2d-dark-muted, --tm2d-dark-subtle, --tm2d-dark-border. --tm2d-link에는 다크 모드용 변수가 없고, 기본적으로 accent 색을 따라 바뀝니다.
- 글자와 너비: --tm2d-font-body, --tm2d-font-heading, --tm2d-font-mono, --tm2d-font-size, --tm2d-line-height, --tm2d-sidebar-width, --tm2d-toc-width, --tm2d-content-max-width
- 글자와 배경의 대비는 4.5:1 이상으로 합니다.

## 다국어
- 사이트 전체 언어의 페이지는 docs/에 그대로 두고, 다른 언어는 docs/ko/처럼 언어 이름의 폴더에 둡니다. 폴더 이름과 lang 값은 같게 합니다.

```yaml
lang: en
defaults:
  - scope:
      path: ko
    values:
      lang: ko
theme_options:
  strings:
    ko:
      search_placeholder: 문서 검색
      next: 다음
```

- 테마의 화면 문구는 영어뿐입니다. 다른 언어는 theme_options.strings에 언어별로 씁니다.
- 서로 번역인 페이지에는 front matter에 같은 ref를 씁니다.
- 순서를 직접 정할 때는 docs/_data/nav.ko.yml처럼 언어별 파일을 둡니다.
- 사이드바와 검색은 현재 페이지와 같은 언어의 페이지만 대상입니다.

strings의 키(괄호 안은 영어 기본 문구):
skip_to_content (Skip to content), nav_label (Documentation), menu_open (Open menu), menu_close (Close menu), search_label (Search), search_placeholder (Search the docs), search_open (Open search), search_clear (Clear search), search_no_results (No results), search_results_count ({n} results), toggle_dark (Switch to dark mode), toggle_light (Switch to light mode), github (GitHub), toc_title (On this page), breadcrumb_label (Breadcrumb), prev (Previous), next (Next), copy (Copy), copied (Copied), not_found_title (Page not found), not_found_body (The page you are looking for may have been moved or deleted.), top_link (Back to top), heading_link (Link to this section), lang_switch (Language)

## 할 수 없는 것과 제한
- GitHub Pages의 표준 빌드에서 동작하는 것만 사용합니다. 자체 플러그인은 쓸 수 없습니다.
- Mermaid 그림은 그려지지 않습니다.
- 알림 상자는 note와 warning뿐입니다.
- 바닥글의 "Powered by tiny-md2docs"는 없앨 수 없습니다.
- 언어를 넘나드는 검색은 할 수 없습니다.
- README.md, LICENSE.md 등은 front matter가 없으면 페이지가 되지 않습니다(index.md가 없는 폴더에서 README.md가 첫 페이지가 되는 경우는 제외).
````
{% endraw %}
