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
