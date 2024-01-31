# Interfaces

Similar to abstract classes; even simpler. Basically fulfilling a contract for something to be considered a type of something. You want to make the contract as small as possible. We usually use interfaces to represent different characteristics of classes.

Java only supports single inheritance, where a child can only inherit from a single parent class.

Interfaces only involve making a method signature that is only public. You can also inherit from multiple interfaces.

With interface-based systems, you're usually passing interfaces around. This allows you to pass objects that implement a certain interface.

Platypus problem is where you can't represent everything properly due to single inheritance, but this is why interfaces are helpful.

## Composition

Prioritise composition over object-oriented programming. This is because of the platypus problem. Composition is more scalable and prevents you from making classes for each entity you want to create.
