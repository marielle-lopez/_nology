# Abstract

- Outside of the normal
- Declarative vs. imperative
  - Saying what to do rather than how to do it
- "Based on general ideas and not on any particular real thing, person, or situation"

## In Java

### Abstract Methods

- A method signature without any implementation
- They can only exist on abstract classes

### Abstract Classes

- Contains some abstract methods usually
- May also contains concrete methods
  - Actually has an implementation, it's not just a method signature, it actually does something
- We cannot instantiate an abstract class
- They are only for inheritance
- You need to declare a class as abstract to allow for it to have abstract methods as well
- The abstract methods are then defined in a way that is tailored to the child class, as long as the method returns whatever the abstract method says
- You must implement the abstract methods of an abstract class you're extending upon
