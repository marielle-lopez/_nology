# Loops

- Why we use loops?
  - To repeat blocks of code
- What do loops do?
  - Iterate over an iterable object, like an array
- How do we write loops?
- How to use loops to iterate through an array?

Common variable names for incrementers (in order): `i`, `j`, `k`.

## Writing a Loop

You have to declare and initialise a variable you want to use as your incrementer. This is followed by a condition your increment has to satisfy for the for loop to continue (otherwise the loop exits), and then how your incrementer is updated.

```js
for (let i = 0; i < 3; i++) {
  console.log("Hello again!");
}

// "Hello again!"
// "Hello again!"
// "Hello again!"
```

## Iterating Through an Array

```js
let hobbies = ["Dancing", "Gym", "Video Games"];

for (let i = 0; i < hobbies.length; i++) {
  console.log(hobbies[i]);
}

// "Dancing"
// "Gym"
// "Video Games"
```
