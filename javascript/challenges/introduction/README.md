## Data types

```js
typeof 15; // Prediction: number
typeof 5.5; // Prediction: number
typeof NaN; // Prediction: number
typeof "hello"; // Prediction: string
typeof true; // Prediction: boolean
typeof (1 != 2); // Prediction: boolean
"hamburger" + "s"; // Prediction: "hamburgers"
"hamburgers" - "s"; // Prediction: NaN
"1" + "3"; // Prediction: "13"
"1" - "3"; // Prediction: NaN
"johnny" + 5; // Prediction: "johnny5"
"johnny" - 5; // Prediction: NaN
99 * "luftbaloons"; // Prediction: NaN
```

## Variables

Challenge: Storing Personal Information

MVP:

Create three variables to store your first name, last name and age.
Assign values to these variables.
Print a string containing all three variables in the console (should look like "Hi, my name is XXX XXX and I am XX years old)

```js
const firstName = "Marielle";
const lastName = "Lopez";
const age = 23;

console.log(
  `Hi, my name is ${firstName} ${lastName} and I am ${age} years old.`
);
```
