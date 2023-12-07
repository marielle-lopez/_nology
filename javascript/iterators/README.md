# Iterators

- Passing functions into functions
- Why do we use iterators?
- What's the difference between a loop and an iterator?
- How do you use array iterators?

If you want to go backwards through an array, make a copy of your input array.

```js
[...input].reverse().map((item) => item * 2);
```

Iterators do not alter the underlying array they are working on, they return a new one.

You can also chain iterators.

```js
const input = [1, 2, 3, 4, 5];

const output = input.map((item) => item * 3).filter((item) => item % 2 === 0);

console.log(output); // [6, 12]
```

## `.map()`

A map is where you are applying the same logic to each item in an iterable.

The rule-of-thumb is that your input array has the same length as your output array.

- If your input array is longer than your output array, you're most likely using the `.filter()` method

- The example of the for loop above is an example of a map

```js
function capitaliseString(string) {
  return string.charAt(0), toUpperCase() + string.slice(1);
}

const pets = ["serena", "pebbles", "willow", "skittles"];

let petsCapitalised = [];

for (let i = 0; i < pets.length; i++) {
  const pet = capitaliseString(pet[i]);
  petsCapitalised.push(pet);
}
```

```js
function map(arr, func) {
  const temp = [];

  for (let i = 0; i < arr.length; i++) {
    const newValue = func(arr[i]);
    temp.push(newValue);
  }

  return temp;
}

let input = [1, 2, 3, 4, 5];

let output = map(input, (number) => number * 100);
console.log(output); // [100, 200, 300, 400, 500]
```

```js
let output = input.map((number) => number * 2);
console.log(output); // [2, 4, 6, 8, 10]
```

## `.filter()`

This method returns an array of items that satisfy the given condition.

```js
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // [2, 4]
```

## `.find()`

Gives back the first item that satisfies the condition given. If no items satisfies the condition, `undefined` is returned.

```js
input = [1, 2, 3, 4, 5];
output = input.find((item) => item % 2 === 0);

console.log(output); // 2
```

## `.findIndex()`

This method gives back the index of the first item that satisfies the given condition.

## `.every()`

Returns `true` or `false` if all items in the array satisfies the given condition.

```js
const input = [3, 6, 9];
const output = input.every((item) => item % 3 === 0);

console.log(output); // true
```

## `.some()`

Works the same as `.every()` except if one of the items satisfies the given condition, then `true` is returned. Otherwise, `false` is returned.

## `.reduce()`

This method reduces the given array to a single value using the items of the array.

- A good example is summing a list of numbers
- Another good use case is copying the `.join()` method

In the example below, the `0` is the initial value you set for the accumulator.

```js
const input = [1, 2, 3, 4, 5];

const output = input.reduce((accumulator, item) => {
  accumulator += item;

  return accumulator;
}, 0);
```

```js
const names = ["Marielle", "Louisse", "Lopez"];

const output = names.reduce((string, name) => {
  string += ` ${name}`;

  return string;
}, "");
```
