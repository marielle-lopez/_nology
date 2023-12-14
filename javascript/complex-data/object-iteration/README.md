# Object Iteration

```js
Object.keys();
Object.values();
Object.entries();
```

```js
const movie = {
  name: "Kill Bill",
  director: "Tarantino",
  release: 2003,
  imdbRating: 8.2,
  runtime: "1h51m",
};

console.log(Object.keys(movie)); // ["name", "director", "release", "imdbRating", "runtime"]
console.log(Object.values(movie)); // ["Kill Bill", "Tarantino", 2003, 8.2, "1h51m"]
console.log(Object.entries(movie));
```

```js
class Movie {
  constructor(name, director, release, imdbRating, runtime) {
    this.name = name;
    this.director = director;
    this.release = release;
    this.imdbRating = imdbRating;
    this.runtime = runtime;
  }
}

const movie = new Movie("Kill Bill", "Tarantino", 2003, 8.2, "1h51m");
```

## Validation of Data

It's important that the data type of things is consistent across the board, especially for objects.

```js
const validationObject = {
  name: "String",
  director: "String",
  release: "Number",
  imdbRating: "Number",
  runtime: "String",
};

const validationObjectFunctions = {
  name: (str) => str.constructor.name === "String" && str.length,
  director: (str) => str.constructor.name === "String" && str.length,
  release: (num) => num.constructor.name === "Number" && num > 1900,
  imdbRating: (num) =>
    num.constructor.name === "Number" && num <= 10 && num >= 0,
  runtime: (str) => str.constructor.name === "String" && str.length,
};

// console.log(
//   Object.entries(movie).reduce((acc, [key, value]) => {
//     const typeName = value.constructor.name;
//     const expectedType = validationObject[key];

//     if (typeName !== expectedType) {
//       acc.push(
//         `${key} is expected to be a ${expectedType}, but received a ${typeName} value.`
//       );
//     }

//     return acc;
//   }, [])
// );

console.log(
  Object.entries(movie).reduce((acc, [key, value]) => {
    if (!validationObjectFunctions[key](value)) {
      acc.push(
        `${key} is expected to be a ${expectedType}, but received a ${typeName} value.`
      );
    }

    return acc;
  }, [])
);
```

```js
const translationObject = {
  a: "4",
  b: "8",
  c: "ff",
  d: "jj",
};

const reversed = Object.entries(translationObject).reduce(
  (acc, [key, val]) => (acc[val] = key),
  {}
);
```
