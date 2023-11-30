# BEM
Stand fors "Block__Element--Modifier".
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