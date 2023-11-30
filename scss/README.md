# Sass/SCSS

- Syntactically Awesome Stylesheet
- Makes the development experience easier and better
- It is a superset of CSS (an extension of CSS (has all features of CSS) that solves some problems of CSS)
    - It also introduces extra functionality, like mixins
- A language that isn't understood by browsers; browsers only understand CSS
    - Sass is a preprocessor language, which means it needs to be compiled into CSS before being read by a browser
    - Need to use an extension or a particular command to compile SCSS into CSS
- Two versions of syntax
    - SCSS is written like regular CSS
    - Sass uses identations, not curly braces
- Any valid CSS is valid SCSS

## Nested Styling
BEM naming convention becomes useful here.
```SCSS
div {
    background-color: red;
    p {
        color: blue;
    }
}
```
```SCSS
.card {
    color: black;

    &__title {
        background-color: lightblue;
    }
}
```

## Mixins
A little bit like JavaScript functions.

## Variables
CSS does have variables, but writing them in Sass are better. They're also useful for consistency, and doesn't require you to remember specific pixel sizes or HEX codes!
- Write variables at the top of your SCSS file
```SCSS
$main-color: blue;
```

## Modules

## Extending Styles
Extends styles of one element to another.

## Installation
On command line:
```
npm install -g sass
```
- `-g` means global, therefore doesn't matter what folder you're in in your terminal

```
sass --version
```
- Run this after you install Sass to ensure it has been installed

## Converting SCSS into CSS Using Terminal
- Make sure you're in the same folder as the SCSS file
- Makes sure you run this command line when you're styling an SCSS file to be able to see any changes while you're editing, but also to ensure the compiling occurs
```
sass --watch --no-source-map styles.scss styles.css
```
`styles.scss` can be replaced by the location of the `.scss` file you're trying to compile. Same thing for the name of the `.css` file.

## Helpful Links
- https://sass-lang.com/documentation/syntax/