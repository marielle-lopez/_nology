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

## Switch Cases

Allow us to take a value and do strict comparisons. The value you place into `()` is the value you want to compare to the cases.

`default` works like the `else` in an `if-else` statement.

`break` is required at the end of a block to make sure you break out of the switch, otherwise the rest of the switch will run.

- In some cases, you might not want to use the keyword `break`

Case fall-throughs are cases that result in the same thing (i.e., the second example below).

```js
const errorCode = 2;

switch (errorCode) {
  case 1:
    console.log("We could not parse your file.");
    break;
  case 2:
    console.log("We could not open your file");
    break;
  case 3:
    console.log("File is corrupted.");
    break;
  default:
    console.log("An unknown error has occurred.");
}
```

```js
const input = "e";

switch (input) {
  case e:
  case E:
  case "Exit":
  case "exit":
  case "EXIT":
    console.log("Exiting the program.");
    break;
  case "C":
  case "c":
  case "Continue":
  case "continue":
  case "CONTINUE":
    console.log("Continuing to run the program.");
    break;
  default:
    console.log("Invalid command.");
}
```

## Ternary Operators

A shortcut for if-else statements.

- Typically used for binary checks

You can get away with using `const` variables as well when using ternary operators, as shown in the second example.

One of the reasons why ternary operators were created was to ensure that variables get assigned a value straight away!

```js
const age = 5;

if (age >= 18) {
  console.log("Welcome!");
} else {
  console.log("Go away.");
}

age >= 18 ? console.log("Welcome!") : console.log("Go away!");
```

```js
const message = age >= 18 ? "Welcome!" : "Go away.";
console.log(message);
```

Avoid nesting ternary operators. Looks weird and decreases code readability.

```js
x > y ? "x is greater" : x < y ? "x is less" : "x is y";
```
