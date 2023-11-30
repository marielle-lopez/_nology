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

## Nested Styling
```SCSS
div {
    background-color: red;
    p {
        color: blue;
    }
}
```

## Mixins
A little bit like JavaScript functions.

## Variables
CSS does have variables, but writing them in Sass are better.

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

## Helpful Links
- https://sass-lang.com/documentation/syntax/