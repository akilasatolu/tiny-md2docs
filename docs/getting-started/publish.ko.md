# 공개 방법

보통은 [설치](install.ko.md)의 순서대로 브랜치의 `docs` 폴더에서 공개합니다. 여기서는 나머지 두 가지 방법을 설명합니다. 둘 다 리포지토리의 Settings → Pages에 있는 'Build and deployment'에서 설정합니다.

## 브랜치의 루트에서 공개하기

문서만 있는 리포지토리 등에서 리포지토리의 루트를 공개하는 방법입니다.

1. `_config.yml`과 Markdown 파일을 `docs/`가 아니라 리포지토리의 루트에 둡니다. 이 문서의 `docs/`는 리포지토리의 루트로 바꿔 읽으세요.
2. [설치](install.ko.md)의 '3. GitHub Pages 켜기'와 같게 설정합니다. 폴더만 `/docs`가 아니라 `/(root)`를 선택합니다.

루트에서 공개하면 리포지토리의 다른 파일도 공개됩니다. 공개하고 싶지 않은 파일이나 폴더는 `_config.yml`의 `exclude`에 씁니다. `exclude`를 쓰면 Jekyll이 기본으로 제외하는 파일(`Gemfile`, `node_modules` 등)의 목록이 대체됩니다. 다음 예처럼 기본 항목도 함께 씁니다.

```yaml
exclude:
  # Jekyll의 기본 제외 항목
  - Gemfile
  - Gemfile.lock
  - node_modules
  - vendor/bundle/
  - vendor/cache/
  - vendor/gems/
  - vendor/ruby/
  # 독자 도메인을 쓸 때의 파일
  - CNAME
  # 공개하고 싶지 않은 것
  - README.md
  - src/
```

## GitHub Actions로 공개하기

빌드 전에 처리를 추가하고 싶을 때 등, 직접 만든 워크플로로 공개하는 방법입니다. 워크플로는 GitHub가 제공하는 공식 템플릿으로 만듭니다.

1. Settings → Pages의 'Source'에서 'GitHub Actions'를 선택합니다.
2. 리포지토리의 'Actions'를 엽니다. 워크플로가 이미 있으면 'New workflow'를 누릅니다.
3. 'Choose a workflow' 페이지에서 'GitHub Pages Jekyll'을 찾아 'Configure'를 누릅니다.
4. 열린 워크플로의 `source: ./`를 `source: ./docs`로 고칩니다.
5. 'Commit changes...'를 눌러 워크플로를 commit합니다.

commit하면 워크플로가 실행되어 사이트가 공개됩니다. 그 뒤로는 기본 브랜치에 push할 때마다 공개됩니다.
