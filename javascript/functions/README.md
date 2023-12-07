# Functions

- Why do we use functions?
- What are functions?
- How do we write functions?

We use functions to make code reusable, and makes this code referable since you give them names.

Functions are a set of statements that perform a task using the inputs given to it and then return an output.

```js
function functionName(parameter1, parameter2) {
  let output = `${parameter1} ${parameter2}!`;
  return output;
}

console.log(functionName("hello", "world"));
```

If your functions has parameters, you need to pass in arguments when you call/invoke the functions.

```js
function calculatePerimeter(height, width) {
  return 2 * (height + width);
}

console.log(calculatePerimeter(10, 20));
console.log(calculatePerimeter(4, 6));
```

```js
function getDate() {
  return return new Date();
}
```

You don't need a return statement in a function.

- Below example is just an example, don't use this in real-world applications

```js
function print(string) {
  console.log(string);
}
```

## Scope

Scope is an item's ability to access other items.

An item will have generally have access to items that are outside of its scope and at a same level as itself.

`var` allows you to create variables that are accessible outside of its scope.

- Avoid using it as it can cause nasty bugs, but if you're confident with using them, go for it

## Arrow Functions

You assign a function to a variable as its value.

Arrow functions with one line of code do not require a return statement.

Arrow functions cannot call other functions that have not been initialised yet, unlike normal functions.

- This is part of a concept called function hoisting
  - Function keyword functions are hoisted, while arrow functions are not

```js
const myFunction = (num1, num2) => {
  num1 + num2;
};

const sayHello = () => {
  "Hello world!";
};
```

```js
function calculate(number, func) {
  return func(number);
}

const squareNumber = () => {
  number ** 2;
};

console.log(squareNumber(4)); // 4
console.log(calculate(5, squareNumber)); // 25
```

Above in the last line, we are passing a function as an argument into the `calculate()` function.

We can also pass in anonymous functions as well. Anonymous functions are not stored in a variable or declared like normal functions with a name.

- Anonymous functions don't require `return` statement if the block of code to be executed is just one line

```js
console.log(calculate(100, (number) => number / 2));
```
