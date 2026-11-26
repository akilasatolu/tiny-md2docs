---
ref: elements
---

# 표시 예시

코드를 자신의 `.md` 파일에 옮겨 쓸 수 있습니다. 코드 아래의 상자가 표시 결과입니다.

## 제목

{% capture ex %}
# 제목 1

## 제목 2

### 제목 3

#### 제목 4

##### 제목 5

###### 제목 6
{% endcapture %}
{% include example.html md=ex ids=false %}

## 글자 서식

{% capture ex %}
**굵게**  *기울임*  ~~취소선~~  <mark>형광펜</mark>  <ins>추가</ins>  H<sub>2</sub>O  x<sup>2</sup>

첫째 줄\
둘째 줄
{% endcapture %}
{% include example.html md=ex %}

## 링크

{% capture ex %}
[페이지 작성법](writing__DOT__md)

[GitHub Pages](https://pages.github.com/)

<https://pages.github.com/>
{% endcapture %}
{% include example.html md=ex %}

## 목록

{% capture ex %}
- 항목
  - 중첩 항목
- 항목
{% endcapture %}
{% include example.html md=ex %}

{% capture ex %}
1. 단계 1
2. 단계 2
{% endcapture %}
{% include example.html md=ex %}

{% capture ex %}
- [ ] 할 일
- [x] 완료
{% endcapture %}
{% include example.html md=ex %}

## 코드

{% capture ex %}
`inline code`

```js
// comment
const message = "hello";
```

```diff
- old line
+ new line
```
{% endcapture %}
{% include example.html md=ex %}

## 표

{% capture ex %}
| 왼쪽 | 가운데 | 오른쪽 |
| :--- | :---: | ---: |
| a | b | 100 |
{% endcapture %}
{% include example.html md=ex %}

## 인용과 콜아웃

{% capture ex %}
> 인용문
>
> > 인용문

> **참고** 인용문
{: .note }

> **주의** 인용문
{: .warning }

> 인용문
{: .note data-title="참고" }
{% endcapture %}
{% include example.html md=ex %}

## 구분선

{% capture ex %}
위 문장

---

아래 문장
{% endcapture %}
{% include example.html md=ex %}

## 이미지

{% capture ex %}
![tm2d](../../assets/images/tm2d-mark__DOT__svg){: width="96" }
{% endcapture %}
{% include example.html md=ex %}

## 각주

{% capture ex %}
각주가 있는 문장[^1]

[^1]: 이것은 각주입니다.
{% endcapture %}
{% include example.html md=ex %}

## 정의 목록

{% capture ex %}
용어
: 용어 설명
{% endcapture %}
{% include example.html md=ex %}

## 약어

{% capture ex %}
HTML

*[HTML]: HyperText Markup Language
{% endcapture %}
{% include example.html md=ex %}

## 접기

`<details markdown="1">`와 `<summary>`를 쓰면 클릭할 때까지 본문을 숨길 수 있습니다. 처음부터 펼쳐서 보여 주려면 `<details open markdown="1">`라고 씁니다.

{% capture ex %}
<details markdown="1">
<summary>자세히 보기</summary>

숨겨진 **글**입니다.

</details>
{% endcapture %}
{% include example.html md=ex %}

## 본문 속 목차

{% capture ex %}
* toc
{:toc}

#### 절 A

#### 절 B
{% endcapture %}
{% include example.html md=ex %}

버튼이나 배지 등은 [UI 구성 요소](ui-parts.md)를 참고하세요.

## 설정으로 표시되는 부분

헤더, 사이드바, 이동 경로, 이전/다음 링크 등은 본문에 쓰지 않습니다. [설정](config.md), [사이드바](sidebar.md), [검색](search.md), [색상과 다크 모드](colors.md)를 참고하세요.
