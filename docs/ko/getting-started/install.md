---
ref: install
---

# 설치

## 1. 설정 파일 두기

공개할 리포지토리에 `docs/_config.yml`을 만들고 다음 한 줄을 씁니다.

```yaml
remote_theme: akilasatolu/tiny-md2docs
```

> **메모** 이 설정만으로는 HTML 페이지와 함께 원본 `.md` 파일도 공개됩니다. 공개하고 싶지 않을 때는 [설정](../guide/config.md)의 '원본 .md 파일을 공개하지 않기'를 보세요.
{: .note }

## 2. 페이지 쓰기

`docs/` 아래에 Markdown 파일을 둡니다. 최상위 페이지는 `docs/index.md`입니다. 쓰는 방법은 [페이지 작성법](../guide/writing.md)을 보세요.

## 3. GitHub Pages 켜기

1. 리포지토리의 Settings → Pages를 엽니다.
2. 'Build and deployment'의 'Source'(공개 원본)에서 'Deploy from a branch'를 선택합니다.
3. 'Branch'에서 공개할 브랜치와 `/docs` 폴더를 선택하고 'Save'를 누릅니다.

몇 분 지나면 사이트가 공개됩니다. 리포지토리의 루트나 GitHub Actions로 공개하는 방법은 [공개 방법](publish.md)을 보세요.
