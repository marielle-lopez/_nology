# Object-Oriented Programming

- What is OOP?
- The pillars of OOP
- Pros and cons of OOP

It is a programming pattern or paradigm that JavaScript isn't particularly well-suited to. In this pattern, we're trying to map things or concepts to classes to contain their behaviour.

The main reason to adopt OOP is because it can be easier to reason about and to sensibly split our code. In general, use the best tool for a certain scenario, such as when a framework you're using is best utilised when employing OOP, like React.

OOP involves a lot of files and classes, and it's easy to confuse real-world behaviour with code behaviour.

## The Pillars of OOP

### Encapsulation

We want to keep the internal properties of a class obscured or hidden. It's also the idea of keeping similar logic within the same place.

Classes are a blend of encapsulation and abstraction.

Imagine we had a `book` class.

```js
class Book {
  constructor(name, author, year) {
    this.name = name;
    this.author = author;
    this.year = year;
  }
}

const book1 = new Book("Dune", "Frank Herbert", 1965);
```

Above, we can access and update all of the properties of the `book` instance, `book1`, directly. This is dangerous and it's easy to make mistakes this way, especially when we're using classes in other areas of our program. We might not want some of the properties and methods to be used.

```js
console.log(book1.name); // Dune
```

JavaScript now has the ability to make things private by using `#`, which prevents direct updates of private values. Essentially, it alters the way we access properties of an object.

```js
class Dog {
  #name;

  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    if (typeof newName !== "string" || newName.length === 0) {
      return;
    }

    this.#name = newName;
  }
}
```

### Abstraction

The objective is to present only the necessary information to the user; the unnecessary details remain hidden. It's a way of hiding implementation details and showing only the functionality to the user. Any time we're dealing with code that's already been written and using the method to access the function of it is us dealing with abstraction and indirection.

When you're writing a function, you're implementing abstraction. Methods themselves deal with the concept of abstraction.

### Inheritance

Only use inheritance when it's the best tool for the job.

Pretty much all class-based programming languages have inheritance. We use inheritance for things that are related to one another and behave similarly.

Below, `Podcast` inherits the properties and methods of its parent class, `Track`. However, it has an additional property that only exists for the `Podcast` class, `guests`, and additional methods `guestList` and `addGuest()`.

You will always need to use the `super` keyword in the child class constructor to inherit the properties of the parent class.

```js
class Track {
  constructor(name, duration, format = ".mp3") {
    this.name = name;
    this.duration = duration;
    this.format = format;
  }

  get fileName() {
    return this.name + this.format;
  }
}

class Podcast extends Track {
  constructor(name, duration, format = ".mp3", guests = []) {
    super(name, duration, format);
    this.guests = guests;
  }

  get guestList() {
    return this.guests.join(", ");
  }

  addGuest(newGuest) {
    this.guests.push(newGuest);

    return this.guests;
  }
}

class Song extends Track {
  constructor(name, duration, artist, album, format = ".mp3") {
    super(name, duration, format);
    this.artist = artist;
    this.album = album;
  }

  get formatSongData() {
    return `${this.artist} - ${this.album} - ${this.name}`;
  }
}
```

```js
const podcast = new Podcast("Wine About It", 30 * 60, ".mp3", [
  "QTCinderella",
  "Maya Higa",
]);

console.log(podcast.fileName); // "Wine About It.mp3"
console.log(podcast.guestList); // ["QTCinderella", "Maya Higa"]

const song = new Song(
  "Whip a Tesla",
  3 * 60,
  "Young Gravy",
  "Sensational",
  ".flac"
);

console.log(song.fileName); // "Whip a Tesla"
console.log(song.formatSongData); // "Young Gravy - Sensational - Whip a Tesla";
```

### Polymorphism

We cannot due polymorphism in JavaScript very well or properly.

The idea of polymorphism is that you can call methods of the same name but have different functionality depending on where the method is originated.

Polymorphism can be done with interfaces, which JavaScript does not have.

```js
const array = [1, 2, 3, 4, 5];
const string = "12345";

console.log(array.slice(2, 3));
console.log(string.slice(2, 3));
```

The example above shows that `slice` is a method for both arrays and strings but it works differently for different data types.

Overall, polymorphism is the concept of methods having the same name but are implemented differently.

## Prototype

Prototype is also an object, but it holds a bunch of methods, such as `isPrototypeOf`, `hasOwnProperty`, etc. The latter checks if a given string is the name of a property.

Whenever we create a 'free-standing' object such as the one below, it is a prototype.

```js
const me = {
  firstName: "Marielle",
  age: 23,
  greeting() {
    console.log(
      `Hi, my name is ${this.firstName} and I'm ${this.age} years old.`
    );
  },
};
```

You're able to use `hasOwnProperty` method on arrays because the indexes of elements in arrays act as a 'key' for values. Technically, arrays are a type of object.

Prototypical inheritance is the linking of prototypes of a parent object to a child object to share and utilise the properties of a parent class using a child class.

You can create custom prototypes, as shown below.

```js
const personPrototype = {
  greeting() {
    `Hello, my name is ${this.name} and I live in ${this.location}.`;
  },
};

const me = Object.create(personPrototype);
me.name = "Marielle";
me.location = "Melbourne";
```

## Constructors

They are a type of function that when combined with a `new` keyword, create an object. The name of constructors uses pascal case.

```js
function Person(name, location) {
  this.name = name;
  this.location = location;
}

const me = new Person("Marielle", "Melbourne");

console.log(me); // Person {name: 'Marielle', location: 'Melbourne'}
```

You can assign custom prototypes to constructors.

```js
const personPrototype = {
  greeting() {
    `Hello, my name is ${this.name} and I live in ${this.location}.`;
  },
};

Object.assign(Person.prototype, personPrototype);
```

## Classes

Even though we have class syntax, it is just syntactic sugar. In other words, it's an easier way to make custom prototypes.

On classes, we can define methods, one of them we need is a constructor. The constructor is what is called when we make an object, such as a `Person` object as shown below. The `new` keyword is what invokes the constructor method when creating an instance of an object.

Adding methods involves just writing them directly into the class.

```js
class Person {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  greeting() {
    console.log(`Hi, nice to meet you ${this.name}!`);
  }
}

const me = new Person("Marielle", "Melbourne");
```
