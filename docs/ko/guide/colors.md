# 색상과 다크 모드

## 색 바꾸기

색은 CSS 변수로 정합니다. 바꿀 때는 `docs/assets/css/style.scss`를 만들고 다음과 같이 씁니다.

```scss
---
---

@import "tm2d";

:root {
  --tm2d-accent: #0a7d5a;
  --tm2d-accent-weak: #e3f4ee;
}
```

처음 두 줄(빈 front matter)과 `@import` 줄은 반드시 써야 합니다. GitHub 문서에 있는 {% raw %}`@import "{{ site.theme }}";`{% endraw %}도 쓸 수 있습니다(다른 이름의 저장소로 포크한 경우는 제외). 이 파일이 테마의 `style.scss` 대신 쓰입니다.

쓸 수 있는 변수는 다음과 같습니다.

| 변수 | 쓰이는 곳 | 기본값 |
| --- | --- | --- |
| `--tm2d-accent` | 링크, 현재 페이지 강조, 포커스 테두리 | `#1E5AA8` |
| `--tm2d-accent-weak` | 현재 페이지의 배경 | `#E8F0FA` |
| `--tm2d-bg` | 배경 | `#FFFFFF` |
| `--tm2d-text` | 글자 | `#1A1D21` |
| `--tm2d-muted` | 보조 글자 | `#5B6168` |
| `--tm2d-subtle` | 코드나 인용의 배경 | `#F5F6F4` |
| `--tm2d-border` | 구분선 | `#E4E6E1` |
| `--tm2d-link` | 링크(기본은 accent와 같음) | `--tm2d-accent` |
| `--tm2d-tip` | Tip 알림 | `#176B2C` |
| `--tm2d-important` | Important 알림 | `#6F42C1` |
| `--tm2d-warning` | Warning 알림 | `#8A5A00` |
| `--tm2d-warning-weak` | Warning 알림의 배경 | `#FBF1DC` |
| `--tm2d-caution` | Caution 알림 | `#B31D28` |

글자와 배경의 대비가 4.5:1 이상이 되는 색을 고르세요.

## 다크 모드의 색

다크 모드의 색은 다른 이름의 변수(`--tm2d-dark-accent` 등)로 가지고 있습니다. `--tm2d-accent`를 바꿔도 다크 모드의 색은 바뀌지 않습니다. 다크 모드의 색도 바꿀 때는 같은 `:root` 안에 씁니다.

```scss
:root {
  --tm2d-accent: #0a7d5a;
  --tm2d-dark-accent: #5fd0a8;
}
```

## 다크 모드 전환

OS 설정에 맞춥니다. 헤더에 전환 버튼이 나오고 선택한 쪽을 기억합니다.

## 글꼴과 너비 바꾸기

글꼴과 너비도 같은 `:root` 안에서 CSS 변수를 덮어써서 바꿉니다.

| 변수 | 쓰이는 곳 | 기본값 |
| --- | --- | --- |
| `--tm2d-font-body` | 본문 글꼴 | 시스템 글꼴 |
| `--tm2d-font-heading` | 제목 글꼴 | `--tm2d-font-body`와 같음 |
| `--tm2d-font-mono` | 코드 글꼴 | 시스템 고정폭 글꼴 |
| `--tm2d-font-size` | 본문 글자 크기 | `16px` |
| `--tm2d-line-height` | 본문 줄 높이 | `1.8` |
| `--tm2d-sidebar-width` | 사이드바 너비 | `264px` |
| `--tm2d-toc-width` | 오른쪽 목차의 너비 | `220px` |
| `--tm2d-content-max-width` | 본문의 최대 너비 | 없음(`none`) |

본문 너비에 상한을 두고 싶을 때는 `--tm2d-content-max-width`에 `760px` 등을 지정합니다.

테마는 외부에서 글꼴을 불러오지 않습니다. Noto Sans JP 같은 웹 폰트를 쓸 때는 자신의 `style.scss`에서 불러오고 `--tm2d-font-body`를 덮어씁니다.

```scss
---
---

@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap");
@import "tm2d";

:root {
  --tm2d-font-body: "Noto Sans JP", sans-serif;
}
```
