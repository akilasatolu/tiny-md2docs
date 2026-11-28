# _config.yml

`docs/_config.yml`의 최상위에 쓰는 설정 가운데 테마가 읽는 것과 테마를 쓸 때 관련되는 것입니다. Jekyll의 모든 설정은 아닙니다. 테마를 불러오는 `remote_theme` 외에는 생략할 수 있습니다.

'정하는 것'은 설정의 의미를 정하는 주체입니다. '이 테마'는 이 테마만의 설정이고, '이 테마의 사용법'은 이 테마가 의미를 정하는 이름입니다.

## 테마가 읽는 설정

| 항목 | 기본값 | 내용 | 정하는 것 |
| --- | --- | --- | --- |
| `title` | 프로젝트 페이지는 리포지토리 이름, 사용자 페이지는 계정 이름 | 사이트 이름 | Jekyll에서 흔히 쓰는 이름(생략하면 `jekyll-github-metadata`가 채움) |
| `description` | 리포지토리의 설명(About) | 사이트 설명 | Jekyll에서 흔히 쓰는 이름(생략하면 `jekyll-github-metadata`가 채움) |
| `image` | 없음 | SNS에 공유할 때의 이미지 | 이 테마의 사용법 |
| `lang` | `en` | 언어 폴더에 없는 페이지의 언어([다국어](../guide/i18n.md)) | 이 테마의 사용법 |
| `theme_options` | 없음 | 테마 설정([theme_options](theme-options.md)) | 이 테마 |

## 사용할 때 관련되는 설정

| 항목 | 기본값 | 내용 | 정하는 것 |
| --- | --- | --- | --- |
| `remote_theme` | 없음 | `akilasatolu/tiny-md2docs`라고 씀. `@` 뒤에 브랜치, 태그, 커밋을 쓰면 버전을 고정함 | `jekyll-remote-theme` |
| `optional_front_matter` | `enabled: true`, `remove_originals: false` | front matter가 없는 Markdown의 처리. `enabled: false`면 페이지로 만들지 않음. `remove_originals: true`면 원본 `.md`를 공개하지 않음. front matter가 없는 `README.md`, `LICENSE.md` 등은 페이지가 되지 않음([설정](../guide/config.md)) | `jekyll-optional-front-matter` |
| `readme_index` | `enabled: true`, `remove_originals: false`, `with_frontmatter: false` | index가 없는 폴더에서는 `README.md`를 최상위 페이지로 만듦. `with_frontmatter: true`면 front matter가 있는 README도 대상 | `jekyll-readme-index` |
| `exclude` | `Gemfile`, `Gemfile.lock`, `node_modules`, `vendor/bundle/`, `vendor/cache/`, `vendor/gems/`, `vendor/ruby/`, `CNAME` | 공개하지 않을 파일. 쓰면 기본 목록이 바뀜([공개 방법](../getting-started/publish.md)) | Jekyll(`CNAME`은 GitHub Pages가 추가) |
