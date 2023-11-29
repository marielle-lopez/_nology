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