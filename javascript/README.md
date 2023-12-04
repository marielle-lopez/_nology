# JavaScript

A programming language that we use to make our websites interactive and responsive to user events. We can use it for front-end development, but also back-end development!

In your HTML file, use the keyword `defer` to load JavaScript after the HTML document has fully loaded.

```html
<script defer src="./script.js"></script>
```

The browser will give us access to something called the Document Object Model (DOM). It gives you access to elements of the HTML file.

JavaScript together with other frameworks like Express to create REST APIs.

Below is a Node,js command you can use to run JavaScript.

```
node script.js
```

## Primitive Data Types

- String
  - Sequence of characters
  - Cannot be broken down into characters like they can be in Java
  - Can be declared using single or double quotation marks
- Number
  - Doesn't matter if it has a decimal point, or if it's a positive or negative integer, and doesn't matter how big or small it is, but matters in other programming languages like Java
- Boolean
  - `true` or `false`, can be represented by `0` or `1`
  - Very useful in ensuring stored data is maintained in a consistent format
- `null`
  - Represents a missing value
  - For example, when a user skips entering a value for a non-required input, the value stored would be `null`
  - You would use `null` for missing values, not `undefined`
- `undefined`
  - A value that represents something that doesn't exist
  - Usually a sign of an error existing in code
- BigInt
- Symbol

A type that can't be broken down any further. A basic building block of a programming language.

In JavaScript, a character is not a primitive data type like it is in other programming languages like Java.

You can use `typeof` to help identify the data type of a variable or value.

## Variables

A labelled value, and we can reference the name to access the stored value. It's a way to store data in memory by giving it a name, and then we use that name to access the data.

You can declare variables without assigning a value. Printing these values will give a result of `undefined`.

```javascript
let favouriteNumber;

console.log(favouriteNumber); // undefined
```

### Types of Variables

#### `let`

A variable that you can re-assign a value to.

#### `const`

A variable that you cannot re-assign a value to.

## Objects

An object holds multiple values.

```javascript
const book {
  title: "Atomic Habits",
  author: "James Clear",
  bestseller: true
};

const anotherBook {
  title: "The Bible",
  author: null,
  bestseller: true
}
```
