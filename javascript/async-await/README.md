# Async and Await

- What is async/await syntax?
- Why was it introduced?
- Why is it preferred?
- How to handle errors?
- The 'gotchas'
  - Awaiting inside of a loop

Async/await is syntactic sugar for writing prototypical inheritance and promises. It's also just promises. It was introduced because it lets us write asynchronous code in a way that looks synchronous. In general, we can write code using promises that's easier to reason and think about. It's preferred because it's often more reaable and a more modern syntax. However, there are times where `.then` and `.catch` are better to use.

## Async

Async is a keyword we can add to function definitions to make them asynchronous.

```js
async function myFunction() {};

const myOtherFunction = async () => {};
```

Every asynchronous function returns a **promise**. Below are identical functions that return the same promise.

```js
async function multiply() {
  return 42;
};

async function multiply() {
  return Promise.resolve(42);
}
```

As with all promises, we only have access to promises with `.then`.

```js
async function number() {
  return 42;
};

const result = number();
result.then((answer) => console.log(answer));
```

Below is a promise that rejects.

```js
const theProblem = async () => {
  // return Promise.reject(new Error('Oh no!'));
  throw new Error("Oh no!");
}

const result = theProblem();
result.catch((error) => console.warn(error.message));
```

The `async` keyword alone isn't very useful.

## Await

The `await` keyword can only be used within an `async` function. `await` pauses the execution of the code within the `async` function until the promise we are waiting for resolves or rejects.

You don't just have to await functions, but there's not really any cases to await anything other than functions.

```js
const slowAdd = (num1, num2) => {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    reject(new Error("Must use numbers."));
  }

  setTimeout(() => {
    resolve(num1 + num2);
  }, 1000);
};

async function printAnswer(a, b) {
  console.log("Calculating...");
  const result = await slowAdd(a, b); // we wait for this promise to fulfil
  console.log('The answer is: ' + result);
  console.log('This happened after we waited!');
}

printAnswer(10, 5);
```

## Avoiding 'Promise Hell'

In 'promise hell', we we have some sort of computation where one result relies on a previous result. We can only access the result of a promise inside of a `.then()`.

This issue also causes your typical `catch()` statement to not work if it only exists at the end of the chain of your `then()`. Instead, you have to add a `catch()` at the end of every `then()`, which makes your code look like a pyramid.

```js
const rememberName = (input) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof input !== "string") {
        reject(new Error("Input is not a string."));
      }

      resolve(input);
  }), 2000}) 
};

const rememberLocation = (name) => {
  const locations = {
    fred: 'Ashfield',
    sara: 'Terrigal',
    reece: 'Glenning Valley',
    xandra: 'Sydenham'
  };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const location = locations[name.toLowerCase()];

      if (location) {
        resolve(location);
      }

      reject(new Error("I forgot where you live!"));
    }, 2000)
  })
}

function makeSmallTalk(input) => {
  rememberName(input)
    .then((name) => {
      console.log(`Hi, how are you ${name}!`);
      rememberLocation(name)
        .then((location) => {
          console.log(`How is the weather in ${location}?`);
        })
        .catch((error) => console.log(error.message));
    })
    .catch((error) => console.log(error.message))
};

makeSmallTalk('Fred');
```

Below makes for cleaner and more readable code. In addition, you can use a try-catch to catch any errors instead of making a pyramid in your code.

```js
async function makeSmallTalk(input) {
  try {
    const name = await rememberName(input);
    console.log(`Hi, how are you, ${name}?`);
    const location = await rememberLocation(name);
    console.log(`How's the weather in ${location}?`);
  } catch(error) {
    console.log(`Universal error: ${error}`);
  }
};

makeSmallTalk('Fred');
```

## Doing Things in Parallel

The problem with async/await is that we start thinking sequentially, when some scenarios can have things runnings simultaneously.

Below is an example that will take so long if the input is a long array. For each person in the array, you add an additional 2 seconds to your wait time.

```js
async function greetSomePeople(...people) {
  const names = [];

  for (const person of people) {
    const name = await rememberName(person);
    names.push(name);
  }

  console.log(`Hello ${names.toString()}.`);
};
```

This is where `Promise.all()` and `Promise.allSettled()` comes into play. You pass in an array of promises and they are processed in parallel. This is possible due to the event loop.

If you see yourself using `await` inside of a loop, you'll probably want to use `Promise.all()` in your circumstance.

```js
async function greetSomePeople(...people) {
  const namePromises = [];

  for (const person of people) {
    const namePromise = rememberName(person);
    namePromises.push(namePromises);
  }

  const names = await Promise.all(namePromises);
  console.log(`Hello ${names.toString()}!`);
}
```