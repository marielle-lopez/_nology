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
  - The only valid arithmetic operation that will work with strings is `+`, and this is used to achieve string concatentation
  - You can use template literals to achieve string interpolation
    ```js
    console.log(`My name is ${firstName}!`);
    ```
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

When you're initialising variables without assigning values, a good practise is to assign `null` instead of just leaving it empty.

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

## Operators

Remember that arithmetic operators take precedence over comparison operators.

### Arithmetic Operators

- Addition `+`
  - Works with strings
    - If the members are of different type and one is of string type, the other members will become strings
  - Works with boolean values because `true` is also `1` and `false` is also `0`
- Subtraction `-`
  - Strings involved will result in `NaN`
- Multiplication `*`
  - Strings involved will result in `NaN`
- Indices `**`
- Incrementer and decrementer `++` and `--`
  - Strings involved will result in `NaN`
- Modulus/Remainder `%`
  - Gives the remainder of a division expression

```js
console.log(10 + 56); // 66
console.log(1 + "5"); // 15
console.log(true + false); // 1;
console.log("jane" - 5); // NaN;
console.log(true - true); // 0;
console.log(true * true); // 1;
console.log("1" * "56"); // NaN
console.log(12 % 3); // 0;
```

### Assignment Operators

- `=`
- `+=`
- `-=`
- `/=`
- `*=`

```js
let i = 1;
i += 1;

console.log(i); // 2
```

### Comparison Operators

- Equal to `==`
- No equal to `!=`
- Greater than or equal to `>=`
  - JavaScript performs type conversion
  - Soft comparison
- Lesser than or equal to `<=`
  - JavaScript performs type conversion
  - Soft comparison
- Greater than `>`
- Lesser than `<`
- Equal to (type-sensitive) `===`
- Not equal to (type-sensitive) `!===`

```js
console.log("12" == 12); // true
console.log("12" === 12); // false
```

### Logical Operators

- NOT `!`
  - Negates a value
  ```js
  console.log(!false); // true
  ```
- AND `&&`
  - If one of the members are equal to `false` or is a false-y value, result is `false`
  ```js
  console.log(true && false); // false
  ```
- OR `||`
  - If at least one of the members are equal to `true` or is a true-thy value, result is `true`
  ```js
  console.log(true && false); // true
  ```

## True-thy and False-y Values

- Any number that is not `0` is a true-thy value
- Empty strings are false-y values
- `null` and `undefined` are false-y values

### False-y Values

The false-y value will be returned in the console when using the `&&` operator with a true-thy value.

```js
console.log(NaN && true);
```

- `""`
- `0`
- `undefined`
- `null`
- `NaN`

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
