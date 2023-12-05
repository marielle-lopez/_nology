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
