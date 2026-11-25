---
ref: front-matter
---

# front matter

페이지 맨 앞에 쓸 수 있는 항목입니다. 모두 생략할 수 있습니다. front matter 자체를 쓰지 않아도 됩니다.

```markdown
---
title: 설치
description: tm2d를 사용하기 시작하는 순서
nav_order: 1
---
```

| 항목 | 내용 |
| --- | --- |
| `title` | 페이지의 이름. 생략하면 본문의 첫 제목이 쓰임 |
| `description` | 페이지의 설명문. 생략하면 사이트의 `description` |
| `image` | SNS에서 공유했을 때의 이미지. 생략하면 사이트의 `image` |
| `nav_order` | 자동 정렬에서의 순서. 작을수록 앞 |
| `nav_exclude` | `true`로 하면 사이드바와 이전·다음 링크에 나오지 않음 |
| `search_exclude` | `true`로 하면 검색에 나오지 않음 |
| `toc` | `false`로 하면 목차를 내지 않음 |
| `ref` | 번역 관계인 페이지에 같은 값을 쓰면 헤더에 언어 전환이 나옴 |
