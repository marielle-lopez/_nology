# Streams

Java didn't have array iterators like JavaScript does, but semi-recently, Java received the `STREAMS` API in 2014.

Streams are very similar to JavaScript iterators, but they can actually do a bit more; they're more powerful. They have more methods available to them.

Streams also aggregate due to the Java compiler being smart. In JavaScript, iterators are executed in order, meaning that each iterator involves an entire loop over the array it's working on. So, if there's 5 iterators chained together, 5 iterations over the array occur. In Java this isn't case. Instead, Streams aggregate and only causes one loop over the Stream it's working on. For each item in the Stream, it applies all the methods chained onto one another in one step. This makes Streams incredibly more efficient.

Streams also work with asynchronous functions!

## Syntax

Convert an array to a Stream first, but keep in mind that Streams can't use primitives. You have to use wrappers (i.e., `Integer[]`).

Methods are typically attached to classes. We pass methods to iterators via their name. You can also pass in fat-arrow functions.

To look at the data of a Stream, we need to turn it back into an array or collection.

```java
// App
import java.util.stream.Stream;

Stream<Integer> numberStream = Stream.of(numbers);
Stream<Integer> doubledStream = numberStream.map(MathHelpers::doubleNum);
Integer[] doubledNumbers = doubledStream.toArray(Integer[]::new);
```

```java
// MathHelpers
package streams;

public class MathHelpers {
	public static Integer doubleNum(Integer number) {
		return number * 2;
	};
}
```

Lambda functions are anonymous functions, shorthand functions. Very similar to JavaScript anonymous functions. They behave like fat-arrow functions, but they use a skinny arrow.

```java
Stream<Integer> doubledStream = numberStream.map(n -> n * 2);
```

Just like JavaScript iterators, Streams are chainable! The way this is executed in Java is much more efficient than it is in JavaScript, where only one loop over the Stream is required.

```java
Integer[] largeDoubles = Stream.of(numbers).map(n -> n * 2).filter(n -> n > 5).toArray(Integer[]::new);
```

You can turn an `ArrayList` into a Stream using `[list].stream()`, and turn it back into an `ArrayList` using `collect()`.

```java
ArrayList<String> names = new ArrayList<String>(Arrays.asList("Alex", "Andrew", "Bob", "Charlie", "Alice", "Dylan", "Eddie"));

ArrayList<String> namesStartingWithA = names.stream()
				.filter(name -> name.toLowerCase().charAt(0) == 'a')
				.collect(Collectors.toCollection(ArrayList::new));

System.out.println(namesStartingWithA);
```

## Optionals

A type you can use to deal with things you're not sure something will return a value. Typically used when working with data, and they have specific methods to avoid compiler errors.

`findFirst()` returns an optional value.

```java
ArrayList<String> names = new ArrayList<String>(Arrays.asList("Alex", "Andrew", "Bob", "Charlie", "Alice", "Dylan", "Eddie"));

Optional<String> maybeName = names.stream()
				.filter(name -> name.toLowerCase().charAt(0) == 'a')
				.peek(name -> System.out.println("Hi, " + name))
				.filter(name -> name.length() > 4)
				.findFirst();

if (maybeName.isPresent()) {
	System.out.println(maybeName.get());
} else {
	System.out.println("Sorry, couldn't find name");
};

String username = names.stream().filter(name -> name.toLowerCase().charAt(0) == 'f').findFirst().orElse("Guest");
System.out.println("Hello, " + username);
```
