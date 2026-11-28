# 페이지 작성법

페이지는 보통의 Markdown으로 씁니다. 여기서는 페이지와 링크를 쓰는 방법, 그리고 테마가 제공하는 표시를 소개합니다.

본문에서 사용할 수 있는 작성법은 [표시 예시](elements.md)에서 예시로 볼 수 있습니다.

## 페이지와 링크

- front matter(`---`로 둘러싼 설정)는 필요 없습니다. 페이지의 이름에는 본문의 첫 제목이 쓰입니다.
- 페이지끼리의 링크는 링크 대상 `.md` 파일로의 상대 경로로 씁니다. 공개할 때 `.html` 페이지로의 링크로 바뀝니다. 예를 들어 이 페이지(`docs/ko/guide/writing.md`)에서 [개요](../index.md)로 가는 링크는 `../index.md`라고 씁니다.
- `/`로 시작하는 경로(`/guide/config.md` 등)는 쓰지 않습니다. `docs/` 바로 아래의 페이지 이외에서는 링크가 변환되지 않아 끊어집니다.
- `.html` 링크를 직접 쓰는 것도 피합니다. `/`로 시작하는 `.html` 링크는 프로젝트 페이지(`https://user.github.io/repo/`)에서 끊어집니다.

## 중괄호 쓰는 법

본문의 `{% raw %}{{ }}{% endraw %}`와 `{% raw %}{% %}{% endraw %}`는 코드 블록 안에서도 Jekyll(Liquid) 명령으로 처리됩니다. 글자가 사라지거나 게시에 실패합니다. 그대로 보여 주려면 `raw` 태그로 감쌉니다.

```markdown
{% raw %}{% raw %}{% endraw %}
{% raw %}{{ message }}{% endraw %}
{{ "{% endraw " }}%}
```

게시에 실패하면 리포지토리의 Actions에서 Pages 빌드 로그를 확인하세요.

## 목차

페이지에 h2와 h3 제목이 둘 이상 있으면 목차가 나옵니다. 넓은 화면에서는 본문 오른쪽에, 좁은 화면에서는 본문 위에 접어서 나옵니다.

일부 제목만 목차에서 빼려면 제목 다음 줄에 `{: .no_toc }`를 씁니다. 뺀 제목도 검색에서는 찾을 수 있습니다.

```markdown
## 참고
{: .no_toc }
```

## 주의 문구 상자

GitHub 알림을 쓰면 제목이 있는 색 상자가 됩니다. 종류는 `NOTE`, `TIP`, `IMPORTANT`, `WARNING`, `CAUTION` 다섯 가지입니다.

```markdown
> [!NOTE]
> 설정을 바꾼 뒤에는 몇 분 기다렸다가 확인합니다.

> [!WARNING]
> 이 작업은 되돌릴 수 없습니다.
```

> [!NOTE]
> 설정을 바꾼 뒤에는 몇 분 기다렸다가 확인합니다.

> [!WARNING]
> 이 작업은 되돌릴 수 없습니다.

- 종류는 대문자로, 인용의 첫 줄에 그것만 씁니다.
- GitHub와 같이 목록, 다른 인용, `<details>` 안의 알림은 바뀌지 않고 글자 그대로 나옵니다.
- 뒤의 줄에 `{: .note }` 같은 것을 쓴 인용도 바뀌지 않습니다.

### 제목 정하기

제목을 직접 정하거나 제목을 빼려면 인용(`>`)의 마지막 줄 다음 줄에 `{: .note }`를 씁니다. 종류는 `.note`, `.tip`, `.important`, `.warning`, `.caution`입니다. 제목을 붙일 때는 `{: .note data-title="메모" }`처럼 씁니다.

```markdown
> 계속하기 전에 파일을 저장합니다.
{: .note data-title="메모" }
```

> 계속하기 전에 파일을 저장합니다.
{: .note data-title="메모" }

여러 줄이나 여러 단락도 쓸 수 있습니다. 각 줄의 맨 앞에 `>`를 붙이고, 단락을 나누는 곳에는 `>`만 있는 줄을 넣습니다. 이어서 쓴 줄은 표시할 때 한 줄로 이어집니다.

```markdown
> [!TIP]
> 첫 번째 단락입니다.
> 이어서 쓴 줄은 같은 단락이 됩니다.
>
> 두 번째 단락입니다.
>
> - 목록도 쓸 수 있습니다
```

> [!TIP]
> 첫 번째 단락입니다.
> 이어서 쓴 줄은 같은 단락이 됩니다.
>
> 두 번째 단락입니다.
>
> - 목록도 쓸 수 있습니다

## 그림과 수식

테마는 Mermaid 그림과 수식을 그리지 않습니다. Mermaid 그림은 코드로 나오고, `$$`로 쓴 수식은 `\(…\)`나 `\[…\]` 글자로 나옵니다. 그리려면 `docs/_includes/body-custom.html`을 다음 내용으로 만듭니다. 라이브러리는 필요한 페이지에서만 외부 서버(jsDelivr)에서 불러옵니다.

```html
{% raw %}{%- if content contains 'class="language-mermaid"' %}
<script type="module">
import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@12/dist/mermaid.esm.min.mjs";
const nodes = [...document.querySelectorAll("code.language-mermaid")].map((code) => {
  const pre = code.parentElement;
  pre.textContent = code.textContent;
  pre.className = "mermaid";
  return pre;
});
const dark = document.documentElement.getAttribute("data-theme") === "dark";
mermaid.initialize({ startOnLoad: false, theme: dark ? "dark" : "default" });
mermaid.run({ nodes });
</script>
{%- endif %}
{%- if content contains '\(' or content contains '\[' %}
<script defer src="https://cdn.jsdelivr.net/npm/mathjax@4/tex-mml-chtml.js"></script>
{%- endif %}{% endraw %}
```

- 그림은 언어 이름을 `mermaid`로 한 코드 블록에 씁니다. 그림의 색은 페이지를 열 때의 다크 모드에 맞춥니다. 전환한 뒤에는 페이지를 다시 불러옵니다.
- 수식은 줄을 나눌 때도 문장 안에서도 `$$`로 감쌉니다. `$` 하나는 쓸 수 없습니다.

## 코드 복사

코드 블록에 마우스를 올리면 오른쪽 위에 복사 버튼이 나옵니다. 터치 화면에서는 항상 나와 있습니다. Jekyll의 `highlight` 태그 블록에도 나오며 줄 번호는 복사되지 않습니다.

```bash
bundle exec jekyll serve
```

## 제목 링크

h2부터 h6까지의 제목에 마우스를 올리면 그 제목으로 가는 `#` 링크가 나옵니다. 터치 화면에서는 항상 나와 있습니다. 이 링크에는 JavaScript가 필요합니다.

## 인쇄

페이지를 인쇄하면 헤더, 사이드바, 목차, 이전·다음 링크, 복사 버튼 등을 빼고 밝은 색으로 나옵니다.
