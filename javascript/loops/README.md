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

Use for loops when you know when a loop should end, such as the end of an array. On the other hand, use while loops when you don't know when a loop should end, such as brute-forcing a search for a search term.

### For Loops

```js
for (let i = 0; i < 3; i++) {
  console.log("Hello again!");
}

// "Hello again!"
// "Hello again!"
// "Hello again!"
```

### While Loops

```js
let pets = ["Willow", "Skittles", "Pebbles", "Serena", "Mitch"];
let i = 0;

while (i < pets.length) {
  console.log(pets[i]);
  i++;
}

// Willow
// Skittles
// Pebbles
// Serena
// Mitch
```

```js
while (i--) {
  console.log(pets[i]);
}
```

### Do/While Loops

It is an exit-controlled loop, where even if the test condition is false, the loop body will be executed at least once.

```js
let i = 0;
do {
  console.log("Hello!");
  i++;
} while (i < 0);

// "Hello!"
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

## `break`

The `break` keyword allows you to break out of a loop early and completely.

## `continue`

The `continue` keyword allows you to break out of the current iteration and moves onto the next iteration of the loop.
