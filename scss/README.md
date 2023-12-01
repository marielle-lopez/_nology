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
- When you're debugging, make sure you edit your SCSS file, not the resulting CSS file

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

You can also compile an entire folder of SCSS files into a file of CSS files. This is useful for when you have multiple stylesheets.
```
sass --watch --no-source-map <SCSS_folder>:<CSS_folder>
```

## Partial File
Contains definitions of variables and mixins. You don't need to compile this file as they're used in SCSS files.
- Naming convention for a partial file is to add an underscore `_` at the beginning of the partial file name
    - By following this, compiler will know not to translate a CSS file version

```
_palette.scss
```
In your SCSS files, you need to import partial files into other SCSS files in order to use the variables and mixins located in them.
- Make sure you use `@use` and not `@import`
- Make sure your imports are at the beginning of your SCSS file

```SCSS
@use <path_to_partial_file>
```

To reference variables and mixins from imported partial files, you need to use dot notation.
- State the name of the partial file followed by a period, and then the variable you want to use

```SCSS
@use "./palette.scss";
@use "./typography.scss";
@use "./spacing.scss";

.wrapper {
    color: palette.$secondary-color;
}
```

## Modules
Create modules when a stylesheet is becoming too big and you need to separate it into sections. You import these modules into a separate SCSS file, and its resulting CSS file is the only thing that needs to be referenced in the corresponding HTML file.
- Create a `modules` directory and place them inside here
- It is up to you how module you want your code to be
- Name your modules that describes what's in it

## Mixins
A variable but with multiple properties/values. They allow you to make repeatable code reusable. Reduces the amount of code needed to be written.
- You can place your mixins into the `partials` directory and name it with an underscore at the beginning of its file name to ensure the compiler doesn't make a CSS file version of it
    - Don't forget to import your mixins where you want them to be used with the `@use` keyword
- You can use variables in mixins as well
- It's a good idea to create mixins that deals with flexbox properties, since it's very common to have multiple flexbox properties stated for many elements

To create a mixin, `@mixin <name>`.

```SCSS
@mixin flex-columns-items-center {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
}

.container {
    @include flex-columns-items-center;
}

.important {
    @include flex-columns-items-center;
}
```
You can also pass in values (parameters) into mixins as well! Make sure you declare your mixins with parameter names.

```SCSS
@mixin bg-color-padding($bg-color, $padding) {
    background-color: $bg-color;
    padding: $padding;
}
```

```SCSS
@use "./partials/_mixins.scss";

.container {
    @include mixins.bg-color-padding(teal, 20px 0);
}
```

You can also create mixins that take advantage of BEM naming conventions.

```SCSS
@mixin font-size-modifier($sm-value, $md-value, $lg-value) {
    &--sm {
        font-size: $sm-value;
    }

    &--md {
        font-size: $md-value;
    }

    &--lg {
        font-size: $lg-value;
    }
}

.btn {
    @include font-size-modifier(10px, 20px, 30px);
}
```

## Helpful Links
- https://sass-lang.com/documentation/syntax/