# 설정

설정은 모두 `docs/_config.yml`에 씁니다. 최소 설정은 `remote_theme` 한 줄뿐입니다.

설정 목록은 [_config.yml](../reference/site-config.md)에 있습니다.

## 사이트 정보

```yaml
remote_theme: akilasatolu/tiny-md2docs@v0
title: My Docs
description: 제품 사용법을 정리한 문서
lang: en
```

- `title`은 헤더와 브라우저 탭에 나오는 사이트 이름입니다.
- `description`은 검색 엔진이나 SNS에서 쓰이는 설명문입니다. 모든 페이지에서 씁니다.
- `lang`은 언어 폴더에 없는 페이지의 언어이며, `<html lang>`, 사이드바, 검색에 쓰입니다. 생략하면 `en`입니다. 여러 언어를 쓸 때는 [다국어](i18n.md)를 보세요.
- `title`을 쓰지 않으면, 프로젝트 페이지(`https://user.github.io/repo/`)에서는 리포지토리 이름이, 사용자 페이지(`https://user.github.io/`)에서는 계정 이름이 사이트 이름이 됩니다. `description`을 쓰지 않으면 리포지토리의 설명(About)이 쓰입니다.

## 원본 .md 파일을 공개하지 않기

`remote_theme` 한 줄뿐이면 HTML 페이지와 함께 원본 `.md` 파일도 공개됩니다(예: `/guide/config.html`과 `/guide/config.md`). 내용은 같지만, 공개하고 싶지 않을 때는 다음 두 줄을 추가합니다.

```yaml
optional_front_matter:
  remove_originals: true
```

- front matter가 있는 페이지는 이 설정이 없어도 원본 `.md`가 공개되지 않습니다.
- `README.md`, `LICENSE.md`, `CONTRIBUTING.md`처럼 정해진 이름의 파일은 front matter가 없으면 페이지가 되지 않으며, 이 설정을 써도 `.md` 그대로 공개됩니다. 페이지로 만들 때는 맨 앞에 빈 front matter(`---` 두 줄)를 씁니다.
- `README.md`는 같은 폴더에 `index.md`가 없으면 그 폴더의 최상위 페이지도 됩니다. 이때의 원본 `README.md`도 공개하지 않으려면 다음도 추가합니다.

```yaml
readme_index:
  remove_originals: true
```

## 로고와 파비콘

`_config.yml`의 최상위에 씁니다.

```yaml
logo: /assets/images/logo.svg
favicon: /assets/images/favicon.svg
```

경로는 사이트 루트부터의 경로로 씁니다. 프로젝트 페이지(`https://user.github.io/repo/`)에서도 `/repo`를 붙일 필요가 없습니다.

버튼이나 검색창 같은 화면의 문구는 영어뿐입니다.

## 푸터

모든 페이지 아래에 'Powered by tiny-md2docs'와 tiny-md2docs 문서 사이트로 가는 링크가 나옵니다. 숨기는 설정은 없습니다. 문구는 어느 언어의 페이지에서든 영어 그대로입니다.

## 404 페이지

존재하지 않는 URL을 열면 테마가 준비한 404 페이지(영어로는 'Page not found')가 나옵니다. 직접 둘 필요가 없습니다.
