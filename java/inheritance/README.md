# Inheritance

## What is it?

- A way to build on top of other classes
- A way to keep our code dry
- In JavaScript, we saw prototypical inheritance
- In React, we see inheritance in error boundaries

## Topics

- What are parents and children?
- How can we extend classes?
- What is the `super` keyword?
- Overriding methods

## What are Parents an Children?

- Children extend their parent(s), taking the parents' properties and methods
- In Java, we need to create the constructor
- To have the parent's functionality, we must use the `super` keyword in the child constructor
- Once you've added the `extends` and `super` keyword, you have access to the parent's properties and methods
- Remember that protected methods and properties are only accessible within files in the same package
  - So, to give access the properties defined in the parent class from child classes, make the properties in the parent class `protected`
