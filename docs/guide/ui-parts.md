---
ref: ui-parts
---

# UI parts

These are the classes you can use in the body. Copy the code into your `.md` file. The box below each code block shows how it appears.

- A class name may be the same as one in CSS you wrote yourself.
- Write a class as `{: .class-name }` on the line after a paragraph or similar block, or right after a piece of text. You can also write it in the `class` attribute of HTML.

## Buttons

{% capture ex %}
[Default](https://pages.github.com/){: .button } [Outline](https://pages.github.com/){: .button .button-outline } [Primary](https://pages.github.com/){: .button .button-primary }

[Green](https://pages.github.com/){: .button .button-green } [Purple](https://pages.github.com/){: .button .button-purple } [Red](https://pages.github.com/){: .button .button-red }

<button type="button" class="button" disabled>Disabled</button> <button type="button" class="button-plain">Plain</button>
{% endcapture %}
{% include example.html md=ex %}

| Class | Description |
| --- | --- |
| `.button` | Shows it as a button |
| `.button-outline` | Use with `.button` to show only the outline |
| `.button-primary` | Use with `.button` to use the theme color |
| `.button-green`, `.button-purple`, `.button-red` | Use with `.button` for green, purple, or red |
| `.button-plain` | Removes the decoration of a `button` element |

For a button that cannot be pressed, add `disabled` to a `button` element, or add `.disabled`.

## Badges

{% capture ex %}
blue
{: .badge }

green
{: .badge .badge-green }

purple
{: .badge .badge-purple }

red
{: .badge .badge-red }

yellow
{: .badge .badge-yellow }
{% endcapture %}
{% include example.html md=ex %}

| Class | Description |
| --- | --- |
| `.badge`, `.badge-blue` | A blue badge |
| `.badge-green`, `.badge-purple`, `.badge-red`, `.badge-yellow` | Use with `.badge` to change the color |

Badge paragraphs written one after another are placed side by side.

## Preview frame

{% capture ex %}
<div class="preview" markdown="1">
**bold**
</div>

```markdown
**bold**
```
{% endcapture %}
{% include example.html md=ex %}

`.preview` is a frame around an example of the result. A code block placed right after it is shown joined to it. Add `markdown="1"` to write Markdown inside.

## Text

{% capture ex %}
Large and light text
{: .font-size-8 .font-weight-300 }

Looks like heading 3
{: .heading-3 }

Monospace text
{: .font-family-mono .letter-spacing-wide }

Right-aligned text
{: .align-right }
{% endcapture %}
{% include example.html md=ex %}

| Class | Description |
| --- | --- |
| `.font-size-1` to `.font-size-10` | Text size (12, 13, 14, 16, 19, 24, 28, 34, 42, 48px) |
| `.font-weight-300`, `-400`, `-500`, `-600`, `-700` | Text weight |
| `.font-family-mono` | Monospace font |
| `.line-height-0`, `-body`, `-tight` | Line height (0, same as the body, tight) |
| `.letter-spacing-0`, `-wide`, `-wider` | Letter spacing (0, wide, wider) |
| `.text-transform-uppercase` | Shows letters in uppercase |
| `.heading-1` to `.heading-6` | Looks like headings 1 to 6 of this theme |
| `.align-left`, `-center`, `-right` | Text position |

## Colors

{% capture ex %}
Blue text on a blue background
{: .color-blue-2 .background-blue-1 .padding-2 }

Yellow text on a yellow background
{: .color-yellow-2 .background-yellow-1 .padding-2 }

Green 1 text on a green 2 background
{: .color-green-1 .background-green-2 .padding-2 }
{% endcapture %}
{% include example.html md=ex %}

| Class | Description |
| --- | --- |
| `.color-{color}-1`, `.color-{color}-2` | Text color |
| `.background-{color}-1`, `.background-{color}-2` | Background color |

The color names are `blue`, `green`, `yellow`, `red`, `purple`, and `gray`. 1 is a quiet tone for backgrounds, and 2 is a strong tone for text. The colors also change in dark mode. Combine 1 for the background with 2 for the text, or the other way round.

## Layout and display

{% capture ex %}
<div class="display-flex justify-content-space-between"><span>Left</span><span>Right</span></div>

<span class="font-size-8">Large text</span> <span class="vertical-align-top">aligned to the top</span>
{% endcapture %}
{% include example.html md=ex %}

| Class | Description |
| --- | --- |
| `.display-block`, `-flex`, `-inline`, `-inline-block`, `-none` | How it is displayed |
| `.float-left`, `.float-right` | Moves it to the left or right and lets the following content flow around it |
| `.justify-content-start`, `-end`, `-space-between`, `-space-around` | Horizontal arrangement inside `.display-flex` |
| `.vertical-align-baseline`, `-bottom`, `-middle`, `-text-bottom`, `-text-top`, `-top` | Vertical position in a line |
| `.visually-hidden` | Hidden on screen but still read by screen readers |

## Spacing

{% capture ex %}
A paragraph with outer space on the left
{: .margin-left-8 }

A paragraph with inner space
{: .padding-4 .background-gray-1 }
{% endcapture %}
{% include example.html md=ex %}

The width is the number at the end of the name (N) times 4px. `margin` is the space outside, and `padding` is the space inside.

| Class | Description |
| --- | --- |
| `.margin-N`, `.padding-N` | Space on all sides |
| `.margin-top-N`, `-right-N`, `-bottom-N`, `-left-N` (the same for `padding`) | Space on the top, right, bottom, or left |
| `.margin-x-N`, `.padding-x-N` | Space on the left and right |
| `.margin-y-N`, `.padding-y-N` | Space on the top and bottom |
| `.margin-x-negative-N` | Extends outward on the left and right (negative space) |
| `.margin-x-auto` | Centers a block that has a width |

| N | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| px | 0 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 64 |

## Screen widths

Put `from-768-` or `from-1200-` at the start of the name, and the class works only when the screen is at least that wide.

{% capture ex %}
Shown only on narrow screens (hidden from 768px)
{: .from-768-display-none }

Shown only on screens 768px wide or more
{: .display-none .from-768-display-block }
{% endcapture %}
{% include example.html md=ex %}

| Class | Description |
| --- | --- |
| `.from-768-display-*`, `.from-1200-display-*` | Changes the display from that width |
| `.from-768-margin-*`, `.from-768-padding-*`, `.from-1200-margin-*`, `.from-1200-padding-*` | Changes the spacing from that width |
