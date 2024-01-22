# Java

## What is Java?

- One of the most widely used languages
- Minecraft was originally written in Java
  - Java Edition usually gets the updates first
- Garbage collector
  - Handles memory allocation and de-allocation
- Java Virtual Machine (JVM)
  - Compiles to machine code
  - Runs anywhere (there's a different JVM for every environment)
- Heavily geared towards object-oriented programming (OOP)
- Compiled language, it's turned into an executable file (it's turned into Java Bytecode, and this is run on a JVM to further turn it into OS-specific instructions)
  - Thus, we can run into a lot of runtime bugs which prevents our file from being compiled at all
- Statically typed
  - Variables are initialised with a type
  - One of the reasons is for efficient memory allocation
- Originally designed for embedded devices which don't have a lot of memory

```java
String myString = "Hello world!";
```

## Primitive Types

- In JavaScript, there are 7 primitive types

  - Boolean
  - String
  - Number
  - Null
  - Undefined
  - Symbol
  - BigInt

- In JavaScript, we can use methods on primitive types because of 'magic'

```js
"hello".split("");
```

- In Java, the idea of a primitive type is more strict. You can't use methods on primitives
- The primitive types in Java are:
  - int: a signed 32-bit integer, whole numbers between -2,147,483,648 to 2,147,483,647
  - float: single precision 32-bit floating point number (approximately 6 decimal points of accuracy)
  - boolean: true or false (1 bit)
  - double: a double precision floating point number (approximately 15 decimal points of accuracy)
  - char: represents a single unicode character; Java utilises UTF-16
  - byte: a signed 8-bit integer, whole numbers between -128 to 127
  - short: a signed 16-bit integer, whole numbers between -32,768 to 32,767
  - long: a signed 64-bit integer
- Primitive types are signed, and the sign takes up one 1 bit
- Floating-point errors exist across all programming languages as it's a fundamental problem with how computers store numbers; they don't store decimal fractions well

All characters in Unicode are represented by numbers. Java uses UTF-16, and so does JavaScript.

### Strings

Strings in Java are a bit different; they're objects (instances of classes) and they're mutable. They also need to use double quotes `"`. Single quotes are used for `char`.

```java
String myName = "Marielle";
```

We can also represent strings as an array of characters. For Java arrays, we need to assign a length and also assign the indexes.

```java
char[] myName = new char[4];
myName[0] = 'A';
myName[1] = 'B';
myName[2] = 'C';
myName[3] = 'D';
```

#### When to Use Strings?

Most of the time, especially when readability is a top priority and when we know the length of it might change and when we know we need to use string methods.

#### When to Use `char[]`?

When we're creating memory-critical applications and need to be careful with size. In addition, we can use it when we know the string will never be changed.
