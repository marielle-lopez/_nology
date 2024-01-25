# Classes

## What is a Class in Programming?

- Structured information
- Properties are involved
- It's basically a blueprint of how we make an instance of an object
- It ensures that all instances are the 'same'
- Another analogy is thinking of classes as a stamp

## Java

- There are two uses for classes in Java

### Static

- We use a class to group together or namespace several functions
  - As soon as a function is grouped into a class, the function is considered a method
  - For example, `String.format()`, `Promise.all()` in JavaScript, `Math.round()` in JavaScript

### Instances

- Every instance of a class is a new thing, and the properties are typically different
  - For example, `new Person("Marielle", "Melbourne")`
- If you output an instance, it will show a hexadecimal that represents its location in memory
- When you try to compare two instances that have the same values for their properties, it will result in `false` because they are different; they are not the same references in memory

## Syntax

```
[scope] class [ClassName] {

}
```

- Scope refers to have the class can be accessed
  - Public - everywhere in the project
  - Private - only accessible by the parent
  - Protected - only accessible within the package
- Class names must be written in pascal-case
- Typically, try to abide by the rule of having one class per file
- The file name **must** match the class name of the class it contains

## Scope

- The reason we have scope is to control accessibility
- Public properties can be changed from anywhere

| Access Modifier | Within Class | Within Package | Outside Package | Outside Package (Inheritance) |
| --------------- | ------------ | -------------- | --------------- | ----------------------------- |
| Public          | Y            | Y              | Y               | Y                             |
| Private         |

## Methods

Methods are basically functions. They're called methods because they're attached to an object or a class. Sometimes, methods, use the internal state of an object; the values or fields of the properties of the object.

### Different Kinds of Methods

- Getters and setters
  - **Instance methods**; they access and set the values of properties of its object instance and may use the object's internal state
- Static methods
  - Attach directly to a class definition, not the instance of a class
  - For example, `Math.round()` and `String.format()`
  - You'll typically see static methods in a package that contains related methods and no properties
    - For example, a `Maths` class with static `add`, `subtract`, `multiply` and `divide` methods

### Getters and Setters

- These methods have the purpose of controlling what the user is able to access and change, but also changing how the properties of an instance are set and shown

### Method Overloading

The parameters you set for a method differentiate it from other methods with the name method name.

Below, the first two constructor methods will produce the same result.

```java
public Animal() {};

public Animal() {
  this("cat", "meow");
};

public Animal(String species, String sound) {
  this.species = species;
  this.sound = sound;
};
```

You can create a `toString()` method to change what is output when you pass in an object into a printing statement like `System.out.println()`. You can add `@Override` to show to other developers you are overriding a method.

### Why Do We Use Methods?

- Reusability
  - We only have to write the code once
- Abstraction
  - We don't need to know how the method works internally
- Improves code readability
- Makes troubleshooting easier
- Encapsulation
  - Control how internal state is manipulated
- Keeps your code dry

### Scope

| Scope     | Accessibility                                          |
| --------- | ------------------------------------------------------ |
| Public    | Can be used anywhere in the codebase                   |
| Protected | Can be used anywhere in the same package               |
| Private   | Can only be used in the class the method is defined in |

### Syntax

```
[scope]  [(optional) static] [void or return type] [methodName]([parameter type] [parameterName]) {
  [body]
}
```

```java
class MyClass {
  private int counter;

  public MyClass() {
    this.counter = 0;
  };

  public static void myStaticMethod() {
    System.out.println("This is a static method.");
  };

  public void myInstanceMethod() {
    System.out.println("This is an instance method. Count is " + this.counter);
  };

  public void incrementCount() {
    this.counter++;
  }
};

MyClass.myStaticMethod(); // can call static method directly on the class without any instantiation

MyClass counter = new Class();

counter.incrementCount(); // calling instance methods
counter.myInstanceMethod();
```
