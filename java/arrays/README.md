# Arrays

## JavaScript vs. Java

### JavaScript

- Collections of values
- You can iterate over them
- Can add and remove things, dynamic-sized array
- Indexed (zero-indexed)
- Arrays are objects
- Array methods like iterators

### Java

- Fixed size
- Arrays must be if the same type

```java
int[] integers
String[] names
boolean[] truths
```

The points above is so that the compiler can optimise their memory usage. Although the JVM takes up a lot of your computer's resources, it does memory optimisation well and does things fast.

## Syntax

When creating an array literal, you need to use `{}` surrounding the elements. Take note that the size of this array is fixed.

```java
String[] names = {"Marielle", "Louisse"};
```

You access elements in an array, you use `[]`.

```java
names[1];
```

Accessing an out-of-bounds index will cause a runtime error, throwing an exception.

You can create an array of a fixed size. Assignment of values at specific indexes work the same as it does in JavaScript.

```java
int[] numbers = new int[3];

numbers[0] = 22;
numbers[1] = 12;
numbers[2] = 99;
```

Outputting the array itself will display a string with a hexadecimal value that represents its location in memory. The `[I` at the beginning of the hexadecimal means it is an integer array.

`[I@d716361`

However, using `.toString()` will print the array as you'd expect in JavaScript.

```java
System.out.println(Arrays.toString(numbers));
```

### Adding Elements to an Array

- Loop through the original array, create an array with new length, loop through the original array to add its elements to the new array to create a copy, then add the other elements you'd like to add

```java
int[] newNumbers = new int[numbers.length + 1];

for (int i = 0; i < numbers.length; i++) {
	newNumbers[i] = numbers[i];
}

newNumbers[3] = 36;
```

- Older syntax uses `system.arraycopy(<arrayToCopy>, <indexToStartAt>, <newArray>, <length>)`

- Newer syntax uses `Arrays.copyOf(<oldArray>, <newArrayLength>)`

### Iterating Over Arrays

You can do it manually with a for-loop, of you can use a difference version of the `for-of` loop in JavaScription.

```java
for (String name: names) {
  System.out.println(name);
};

```

### Multidimensional Arrays
