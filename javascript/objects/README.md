# Objects

You initialise objects with curly brackets, and each line inside is typically a key-value pair (property). You can access values of an object using dot/property notation or index notation.

```js
const teacher = {
  name: "Calum Hill",
  age: 26,
  location: "NSW",
};

console.log(teacher.age); // 26; property notation
console.log(teacher["name"]); // Calum Hill; index notation
```

You can also change the values of properties.

```js
teacher.location = 27;
```

You can copy objects. It is always recommended to use the spread operator when mutating objects and lists.

```js
const copy = { ...teacher };
const { name, ...rest } = copy;
```

The `===` operator when comparing objects will compare whether they are the same reference in memory, not compare them based on their values.

You can use `JSON.stringify` to make a 'deep' copy of objects.

You can remove properties via de-structuring. Below, we remove `name` from the property `teacher`.

```js
const copy = { ...teacher };
const { name, ...rest } = copy;
```

If you don't know the name of a property when you're initialising an object, you can use index notation as shown below to name a property.

```js
const field = "hello";

const newObject = {
  [field]: "myValue";
}
```

Make sure to be careful when dealing with 'shallow' copies of objects.

## Object API

You can iterate through the properties and values of an object.

```js
console.log(Object.keys(teacher));
console.log(Object.values(teacher));
console.log(Object.entries(teacher)); // [['name', 'Calum Hill'], ['age', '26'], ['location', 'NSW']]
```

### `Object.entries()`

Returns a multi-dimensional array.
