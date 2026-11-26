---
ref: ui-parts
---

# UI 구성 요소

본문에서 사용할 수 있는 클래스 목록입니다. 코드를 자신의 `.md` 파일에 옮겨 쓸 수 있습니다. 코드 아래의 상자가 표시 결과입니다.

- 클래스 이름은 직접 작성한 CSS의 클래스 이름과 겹칠 수 있습니다.
- 클래스는 단락 등의 다음 줄에 `{: .클래스이름 }`을 쓰거나, 글자 바로 뒤에 이어서 씁니다. HTML의 `class`에도 쓸 수 있습니다.

## 버튼

{% capture ex %}
[기본](https://pages.github.com/){: .button } [테두리](https://pages.github.com/){: .button .button-outline } [주요 동작](https://pages.github.com/){: .button .button-primary }

[초록](https://pages.github.com/){: .button .button-green } [보라](https://pages.github.com/){: .button .button-purple } [빨강](https://pages.github.com/){: .button .button-red }

<button type="button" class="button" disabled>비활성</button> <button type="button" class="button-plain">장식 없음</button>
{% endcapture %}
{% include example.html md=ex %}

| 클래스 | 내용 |
| --- | --- |
| `.button` | 버튼 모양으로 만듦 |
| `.button-outline` | `.button`과 함께 써서 테두리만 표시 |
| `.button-primary` | `.button`과 함께 써서 테마 색으로 표시 |
| `.button-green`, `.button-purple`, `.button-red` | `.button`과 함께 써서 초록, 보라, 빨강으로 표시 |
| `.button-plain` | `button` 요소의 장식을 없앰 |

누를 수 없는 버튼은 `button` 요소에 `disabled`를 붙이거나 `.disabled`를 추가합니다.

## 배지

{% capture ex %}
파랑
{: .badge }

초록
{: .badge .badge-green }

보라
{: .badge .badge-purple }

빨강
{: .badge .badge-red }

노랑
{: .badge .badge-yellow }
{% endcapture %}
{% include example.html md=ex %}

| 클래스 | 내용 |
| --- | --- |
| `.badge`, `.badge-blue` | 파란 배지 |
| `.badge-green`, `.badge-purple`, `.badge-red`, `.badge-yellow` | `.badge`와 함께 써서 색을 바꿈 |

이어서 쓴 배지 단락은 가로로 나열됩니다.

## 표시 결과 상자

{% capture ex %}
<div class="preview" markdown="1">
**굵게**
</div>

```markdown
**굵게**
```
{% endcapture %}
{% include example.html md=ex %}

`.preview`는 표시 예시를 둘러싸는 상자입니다. 바로 뒤에 코드 블록을 두면 이어서 표시됩니다. 안에 Markdown을 쓸 때는 `markdown="1"`을 붙입니다.

## 글자

{% capture ex %}
크고 가는 글자
{: .font-size-8 .font-weight-300 }

제목 3과 같은 모양
{: .heading-3 }

고정폭 글자
{: .font-family-mono .letter-spacing-wide }

오른쪽에 맞춘 글자
{: .align-right }
{% endcapture %}
{% include example.html md=ex %}

| 클래스 | 내용 |
| --- | --- |
| `.font-size-1` ~ `.font-size-10` | 글자 크기(12, 13, 14, 16, 19, 24, 28, 34, 42, 48px) |
| `.font-weight-300`, `-400`, `-500`, `-600`, `-700` | 글자 굵기 |
| `.font-family-mono` | 고정폭 글꼴 |
| `.line-height-0`, `-body`, `-tight` | 줄 높이(0, 본문과 같음, 좁게) |
| `.letter-spacing-0`, `-wide`, `-wider` | 글자 간격(0, 넓게, 더 넓게) |
| `.text-transform-uppercase` | 영문을 대문자로 표시 |
| `.heading-1` ~ `.heading-6` | 이 테마의 제목 1~6과 같은 모양 |
| `.align-left`, `-center`, `-right` | 글자 위치 |

## 색

{% capture ex %}
파란 배경에 파란 글자
{: .color-blue-2 .background-blue-1 .padding-2 }

노란 배경에 노란 글자
{: .color-yellow-2 .background-yellow-1 .padding-2 }

초록 2 배경에 초록 1 글자
{: .color-green-1 .background-green-2 .padding-2 }
{% endcapture %}
{% include example.html md=ex %}

| 클래스 | 내용 |
| --- | --- |
| `.color-{색}-1`, `.color-{색}-2` | 글자 색 |
| `.background-{색}-1`, `.background-{색}-2` | 배경 색 |

색 이름은 `blue`, `green`, `yellow`, `red`, `purple`, `gray`입니다. 1은 배경에 알맞은 은은한 색, 2는 글자에 알맞은 진한 색입니다. 다크 모드에서는 색도 바뀝니다. 배경에 1, 글자에 2(또는 반대로)를 조합합니다.

## 배치와 표시

{% capture ex %}
<div class="display-flex justify-content-space-between"><span>왼쪽</span><span>오른쪽</span></div>

<span class="font-size-8">큰 글자</span> <span class="vertical-align-top">위에 맞춤</span>
{% endcapture %}
{% include example.html md=ex %}

| 클래스 | 내용 |
| --- | --- |
| `.display-block`, `-flex`, `-inline`, `-inline-block`, `-none` | 표시 방식 |
| `.float-left`, `.float-right` | 왼쪽이나 오른쪽으로 보내고 뒤의 내용을 둘러 흐르게 함 |
| `.justify-content-start`, `-end`, `-space-between`, `-space-around` | `.display-flex` 안에서의 가로 배열 |
| `.vertical-align-baseline`, `-bottom`, `-middle`, `-text-bottom`, `-text-top`, `-top` | 줄 안에서의 세로 위치 |
| `.visually-hidden` | 화면에는 나오지 않고 화면 읽기에는 남김 |

## 여백

{% capture ex %}
왼쪽에 바깥 여백이 있는 단락
{: .margin-left-8 }

안쪽에 여백이 있는 단락
{: .padding-4 .background-gray-1 }
{% endcapture %}
{% include example.html md=ex %}

이름 끝의 숫자(N)에 4px를 곱한 너비가 됩니다. `margin`은 바깥 여백, `padding`은 안쪽 여백입니다.

| 클래스 | 내용 |
| --- | --- |
| `.margin-N`, `.padding-N` | 사방의 여백 |
| `.margin-top-N`, `-right-N`, `-bottom-N`, `-left-N`(`padding`도 같음) | 위, 오른쪽, 아래, 왼쪽 여백 |
| `.margin-x-N`, `.padding-x-N` | 좌우 여백 |
| `.margin-y-N`, `.padding-y-N` | 상하 여백 |
| `.margin-x-negative-N` | 좌우로 바깥에 넘치게 함(음수 여백) |
| `.margin-x-auto` | 너비가 있는 블록을 가운데로 보냄 |

| N | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| px | 0 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 64 |

## 화면 너비별 지정

이름 앞에 `from-768-` 또는 `from-1200-`을 붙이면 화면 너비가 그 값 이상일 때만 적용됩니다.

{% capture ex %}
좁은 화면에서만 나오는 문장(너비 768px 이상에서는 숨음)
{: .from-768-display-none }

너비 768px 이상 화면에서만 나오는 문장
{: .display-none .from-768-display-block }
{% endcapture %}
{% include example.html md=ex %}

| 클래스 | 내용 |
| --- | --- |
| `.from-768-display-*`, `.from-1200-display-*` | 그 너비 이상에서 표시 방식을 바꿈 |
| `.from-768-margin-*`, `.from-768-padding-*`, `.from-1200-margin-*`, `.from-1200-padding-*` | 그 너비 이상에서 여백을 바꿈 |
