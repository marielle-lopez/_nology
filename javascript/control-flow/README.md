# Control Flow

- Why do we use control flow in our program?
- What are all the different control cases we can use?
- What are ternary operators?

It's all about executing code based on conditions.

## If-Else Statements

Only one else-if section will run for each block of code.

When you have multiple conditions for a single line, try and break it up.

```js
const x = 5;

if (x) {
  console.log("x is a true-thy value!");
} else {
  console.log("x is a false-y value!");
}
// x is a true-thy value!

if (x > 10) {
  console.log("x is greater than 10!");
} else if (x > 5) {
  console.log("x is greater than 5!");
} else {
  console.log("x is smaller than 6!");
}
// x is smaller than 6!
```
