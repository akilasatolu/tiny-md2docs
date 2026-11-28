# theme_options

`docs/_config.yml`의 `theme_options`에 쓸 수 있는 항목입니다.

| 항목 | 기본값 | 내용 |
| --- | --- | --- |
| `sidebar` | `true` | `false`로 하면 사이드바를 끔 |
| `search` | `true` | `false`로 하면 검색창과 색인을 끔 |
| `dark_mode` | `auto` | `auto`, `light`, `dark` 중 하나 |
| `prev_next` | `true` | `false`로 하면 페이지 아래의 이전·다음 링크를 끔 |
| `toc` | `true` | `false`로 하면 목차를 끔 |
| `breadcrumb` | `true` | `false`로 하면 이동 경로를 끔 |
| `code_copy` | `true` | `false`로 하면 코드 복사 버튼을 끔 |
| `top_link` | `true` | `false`로 하면 본문 아래의 맨 위로 가는 링크를 끔 |
| `heading_link` | `true` | `false`로 하면 제목 링크를 끔 |
| `github_link` | `true` | `false`로 하면 헤더의 GitHub 링크를 끔. 링크는 리포지토리의 URL을 알 수 있을 때만 나옴 |
| `logo` | 없음 | 헤더의 로고 이미지 경로. 없으면 사이트 이름 글자만 나옴 |
| `favicon` | 없음 | 파비콘의 경로. 없으면 내지 않음 |
| `search_content_limit` | `5000` | 검색에서 확인하는 본문 글자 수의 상한(한 페이지당) |
| `lang_layout` | 없음 | 페이지 언어를 정하는 방법. 지정하지 않으면 파일 이름(`config.ja.md`). `folder`는 언어 폴더(`ja/config.md`. 사이트 전체 언어는 `docs/` 바로 아래)([다국어](../guide/i18n.ko.md)) |
| `strings` | 없음 | 화면 문구의 덮어쓰기. 언어별로 나눠 쓸 수도 있음([다국어](../guide/i18n.ko.md)) |

## 화면의 문구

`strings`에 쓸 수 있는 키와 기본 문구(영어)입니다. 테마가 가진 문구는 영어뿐입니다. 영어 이외의 언어에서는 언어별로 씁니다([다국어](../guide/i18n.ko.md)).

| 키 | 기본 문구 |
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
| `search_results_count` | {n} results(`{n}`이 건수가 됨) |
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
