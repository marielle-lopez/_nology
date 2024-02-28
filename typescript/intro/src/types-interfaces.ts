// Two ways of describing types in TS
// type
// interface - encouraged (make it your preference), gives slightly better error messages

// person: firstName, lastName, age

// type
type Person = {
  firstName: string;
  lastName: string;
  age: number;
};

const me: Person = {
  firstName: "Marielle",
  lastName: "Louisse",
  age: 24,
};

// interface
// interfaces in Java can only have methods, no properties
// TS interfaces allow properties and methods
interface Book {
  title: string;
  author: string;
  yearPublished: number;
}

const favBook: Book = {
  title: "One of Us Is Lying",
  author: "Karen M. McManus",
  yearPublished: 2018,
};

const printBook = (book: Book) => {
  console.log("Favourite book: " + book.title);
};

printBook(favBook);

interface Greetable {
  getName(): string;
}

class otherPerson implements Greetable {
  // private firstName: string;
  // private lastName: string;
  // private age: number;

  // constructor(firstName: string, lastName: string, age: number) {
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  //   this.age = age;
  // }

  // shorthand way
  constructor(
    private firstName: string,
    private lastName: string,
    private age: number
  ) {}

  getName(): string {
    return this.firstName + " " + this.lastName;
  }
}

const otherMe = new otherPerson("Marielle", "Lopez", 24);
console.log(otherMe);

class Pet implements Greetable {
  constructor(public name: string, public animal: string) {}

  getName(): string {
    return this.name;
  }
}

const myCat = new Pet("Serena", "Cat");

const greet = (obj: Greetable) => {
  console.log(`Hello there, ${obj.getName()}!`);
};

greet(myCat);
greet(otherMe);

// below is discouraged, why use TS if you're using any?
// avoid using any type
// very limited use cases for using any type
const addStuff = (a: any, b: any) => {
  return a + b;
};
