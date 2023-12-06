# Arrays

- What are arrays?
  - Lists of anything
- How do we create an array?
  - Use `[]` and items inside are separate by a comma
- How to access or change elements of an array?
  - Use indexes
  - If you use an index that is out-of-bounds, you will receive 'undefined'

```js
let names = ["Marielle", "Mai", "Pebbles"];

console.log(names[0]);
console.log(names[3]); // undefined
```

## Why do Indexes Start at 0?

Because in memory, positions start at 0 as well. Ranges have an offset of 1.

## Other Ways to Create Arrays

- An empty array

  ```js
  const newArray = [];
  ```

- Array constructor

  ```js
  const newArray = new Array(10).fill(0);

  // creates an array with 10 items, with each item equal to 0
  ```

## Array Methods

### `.push()`

Pass in a value you want to add to the end of an array.

```js
let newArray = [];
newArray.push("Hello world!");

console.log(newArray); // ['Hello world!'];
```

### `.pop()`

Removes the last item from and array and stores it into a value if the method is called with a variable assignment.

```js
let poppedItem = newArray.pop();

console.log(newArray); // []
console.log(poppedItem); // 'Hello world!'
```

### `.shift()`

Removes the first item in the array and shifts the remaining items to a position one to the left.

- Be careful when using this method, especially when you're in a loop; instead, create a copy of the array you're looking at

```js
let newArray = ["Marielle", "Pebbles", "Mai"];
newArray.shift();

console.log(newArray); // ["Pebbles", "Mai"]
```

### `.unshift()`

Adds an item to the start of an array and shifts the remaining items to a position one over.

- Be careful when using this method, especially when you're in a loop; instead, create a copy of the array you're looking at

### `.indexOf()`

Finds the index in an array of the passed value.

```js
let newArray = ["Marielle", "Pebbles", "Mai"];

console.log(newArray.indexOf("Pebbles")); // 1
```

### `.includes()`

Identifies whether a value passed in exists in an array. Returns `true` or `false`.

```js
let newArray = ["Marielle", "Pebbles", "Mai"];

console.log(newArray.includes("Hola")); // false
```

### `.sort()`

An in-place array method that sorts an array (`.toSorted()` does the same function, but isn't in-place). By default, it will sort it in ascending order.

- You can use `.reverse()` to sort an array in descending order

```js
let newArray = ["Marielle", "Pebbles", "Mai"];
newArray.sort();

console.log(newArray); // ["Mai", "Marielle", "Pebbles"]
```
