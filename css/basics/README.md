# CSS
- **C**ascade **S**tyle **S**heet
- Allow us to style our websites, adding a visual layer
    - Making things look pretty to encourage the user to interact with the page
- Also making our websites usable and helping users understand how to navigate them
- Creating layouts that are responsive

## How do you Add Styles to our HTML Code?

### Inline Styling
```HTML
<h1 style="color: teal">Hello world!</h1>
```
- Should be avoided as it makes it confusing to maintain
- Decreases readability of code, makes HTML messy
- Makes debugging more difficult, especially if you have an associated style sheet containing styles that correspond to the same element(s)
- Styling elements of the same type in the same way requires repeated HTML

### Internal `<style>` Tag
```HTML
<body>
    <style>
        p {
            color: red;
        }
    </style>
</body>
```
- Better than inline styling
- Can't use the same styling for different pages, applying consistent styling across pages would require repeated code
- Still mixes HTML and CSS, which is not always the best practise in some scenarios

### External Style Sheet
```HTML
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <p>Hello world!</p>
    </body>
</html>
```
```CSS
p {
    color: red;
}
```
- Separates CSS and HTML into separate files, which follows the 'Separation of Concerns' concept
- Makes collaboration much easier in projects
- Requires you to add `<link>` inside of `<head>` in HTML document to access styling in the external style sheet

## Basics
- `*` is the universal selector

## Box Model
- Margin
    - Space outside of the border
- Border
    - Outline around padding
- Padding
    - Space between border and content