# Flexbox
A layout system that allows us to place elements on the page. To use flexbox, you need to initialise the parent container of items to have its `display` CSS property set to `flex` or `inline-flex`. This turns it into a flex container, and the items inside of it are flex items.

## Flexbox Properties
### Flex Items Behave Like Inline Elements
```CSS
.container {
    display: flex;
}
```
### `flex-wrap`
By default, it is `nowrap`. If the parent container is not large enough to accommodate the accumulated sizes of the flex items, you can set `flex-wrap` to `wrap` to prevent flex items from shrinking their size when the parent container is too small. The flex items will wrap to the next line if needed. Super helpful for smaller devices. This property ensures the dimensions of the flex items are respected, in a sense.
```CSS
.container {
    display: flex;
    flex-wrap: wrap;
}
```

### `align-items` and `justify-content`
Very popular flexbox properties that makes website layouts dynamic!

`align-items`
- By default, aligns flex items from top to bottom (along the vertical axis)
    - `center`
    - `flex-start`
    - `flex-end`

```CSS
.container {
    display: flex;
    align-items: center;
}
```

`justify-content`
- By default, aligns flex items from left to right (along horizontal axis)
    - `center`
    - `flex-start`
    - `flex-end`
    - `space-between`
    - `space-around`

```CSS
.container {
    display: flex;
    justify-content: center;
}
```

### Making Inline Elements Behave Like Block Elements
Helpful if you don't want to wrap each item in a `div` tag. The default `flex-direction` value is set to `row`.
```CSS
.container {
    display: flex;
    flex-direction: column;
}
```
`column-reverse` and `row-reverse` reverses the order in which the flex items are displayed.
- This will change where `flex-start` and `flex-end` are as well

Take note that when you do this, the axis on which `align-items` and `justify-content` work on changes. They essentially swap. So, `justify-content` would work from top to bottom, and `align-items` would work from left to right instead.

### `gap`
Adds space between flex items.
```CSS
.container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
}
```

## BEM - Block__Element--Modifier
- Adds logic and structure to naming our classes
- Prevents non-meaningful names from being utilised, but also helps with generating class names
- Creates reuseable class names
- Avoid using more than 2 elements in the class name
    - If there is more than 2 elements involved, skip some elements
- It is up to you how modular you want your styling to be
- Start new blocks for different styling
- This approach moves away from using element selectors and classes instead

```HTML
<div class="card">
    <h3 class="card__title">Hello World!</h3>
</div>

<div>
    <h3 class="card__title card__title--underlined">Hello Universe!</h3>
</div>
```

## Other Notes
- `div`
    - Width, by default, will be width of the viewport
    - A block element, and thus, by default, will stack vertically with other block elements

By default, the flex items determine the height of the flex container. However, you can hard-code the height of the flex container. The flex items height will stretch to fill the flex container.
```CSS
.container {
    height: 500px;
}
```

### Practice Using These Links
- https://www.flexboxfroggy.com/
- https://www.cssgridgarden.com/