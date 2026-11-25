---
ref: sidebar
---

# 사이드바

사이드바에는 문서의 페이지가 나열됩니다. 순서는 두 가지 방법으로 정할 수 있습니다.

## nav.yml로 정렬하기

`docs/_data/nav.yml`을 두면 그 순서와 이름으로 나열됩니다.

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

- `url`이 없는 항목은 그룹이 되어 `children`의 항목을 묶습니다.
- `children` 안에 한 단계 더 그룹을 만들 수 있습니다. 깊이는 두 단계까지입니다.
- `url`은 사이트 루트부터의 경로로 쓰고 끝은 `.html`로 합니다. 최상위 페이지는 `/`입니다.

## 폴더에서 자동으로 정렬하기

`nav.yml`이 없을 때는 `docs/` 안의 폴더 구성으로 사이드바를 자동으로 만듭니다.

예를 들어 다음과 같이 파일을 두었다고 합시다.

```text
docs/
  index.md              # 제목은 '개요'
  faq.md                # 제목은 '자주 묻는 질문'
  getting-started/
    index.md            # front matter에 title: 시작하기
    install.md          # 제목은 '설치'
  guide/
    config.md           # 제목은 '설정'
    advanced/
      cache.md          # 제목은 '캐시'
```

사이드바는 다음과 같이 나열됩니다.

```text
개요
자주 묻는 질문
시작하기
  설치
guide
  설정
  advanced
    캐시
```

- 폴더의 단계는 `docs/`부터 셉니다. `docs/` 바로 아래의 페이지는 그룹에 넣지 않고 맨 앞에 놓습니다. 최상위 페이지(`index.md`)가 가장 먼저입니다.
- `docs/` 바로 아래의 폴더가 그룹, 그 안의 폴더가 하위 그룹이 됩니다. 그보다 깊은 폴더의 페이지는 하위 그룹 안에 놓입니다.
- 폴더의 `index.md`는 항목으로 나오지 않고 그 `title`이 그룹 이름이 됩니다. `index.md`가 없으면 폴더 이름이 그룹 이름입니다(위 예의 `guide`와 `advanced`).
- 항목의 이름은 front matter의 `title`이고, 없으면 본문의 첫 제목입니다.
- 순서는 front matter의 `nav_order`가 작은 순이고, 같으면 파일 경로 순입니다. 그룹의 순서는 폴더 `index.md`의 `nav_order`가 작은 순이고, 같으면 폴더 이름 순입니다. 그룹 안에서는 페이지가 하위 그룹보다 먼저 놓입니다.

```markdown
---
nav_order: 2
---

# 설치
```

사이드바에 내고 싶지 않은 페이지에는 `nav_exclude: true`를 씁니다.

언어별로 폴더를 나눴을 때의 정렬 방법은 [다국어](i18n.md)를 보세요.

## 이전·다음 링크

페이지 아래에는 사이드바 순서에서의 이전·다음 페이지로 가는 링크가 나옵니다. `theme_options.prev_next: false`로 끌 수 있습니다.

## 사이드바 끄기

`theme_options.sidebar: false`로 모든 페이지의 사이드바를 끌 수 있습니다. 좁은 화면의 메뉴 버튼도 사라집니다.
