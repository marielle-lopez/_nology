# Promises

- What is the difference between blocking and unblocking code?
- What is asynchronous JavaScript?
- What are promises?
- How do we use promises?
- Why do we use promises?

## Asynchronous JavaScript

JavaScript is a single-threaded language; it doesn't do multi-threading. JavaScript as a language can do only one thing at a time (...sort of). There are tricks to make it do multiple things asynchronously.

```js
const wait = (ms) => {
  let start = Date.now();
  let now = start;

  while (now - start < ms) {
    now = Date.now();
  }
};

const doSomethingLater = (callback, ms) => {
  wait(ms);
  callback();
};

console.log("I'm starting the program...");

// This blocks the main thread, prevents other things from being done
doSomethingLater(() => {
  console.log("I finished what I'm doing");
}, 5000);

console.log("Continuing the program...");
```

`setTimeout()` takes the callback function and puts it away, saying that JavaScript doesn't need to worry about it for however many specified milliseconds, and this allows JavaScript to continue executing following lines of code.

How is this possible if JavaScript is single-threaded?

```js
console.log("I'm starting my program...");

setTimeout(() => {
  console.log("I finshed what I was doing!");
}, 5000);

console.log("Continuing the program...");
```

The example below will show the output of `1 3 2` even when the number of milliseconds is set to `0`.

```js
console.log(1);

setTimeout(() => {
  console.log(2);
}, 200);

console.log(3);
```

### The Event Loop

When we use `setTimeout()`, we're passing instructions (the passed function) over to the callback queue. JavaScript runs all the code in the main thread and once the main thread is clear, it starts grabbing things from the callback queue.

The example below will show the output of `1 3 4 5 2` even when the number of milliseconds is set to `0`. This is because JavaScript is waiting for the main thread to clear up with instructions, and then it'll start looking at the callback queue.

```js
console.log(1);

setTimeout(() => {
  console.log(2);
}, 200);

console.log(3);
console.log(4);
console.log(5);
```

#### Related Links

- [What the heck is the event loop?](https://youtu.be/8aGhZQkoFbQ?si=q_Sw0Z2Me_PNGpLu)

## Promises

They are like real-life promises. Someone makes a promise to do something later on in the week, and the other promise doesn't know if it'll be fulfilled until said day passes. A promise is an agreement that we either keep or break, which usually has some kind of timeframe.

In JavaScript, a promise is an object. It's a particular type of object that has 3 potential states (state is an internal property).

- Pending - we don't know the outcome yet
- Fulfilled - it did what we expected it to do
- Rejected - it didn't do what we wanted it to do due to an error

We use promises to deal with things that take time (asynchronous operations) like accessing files, retrieving information from databases, accessing an external API (HTTP (web requests)), etc.

Most of the time, we won't be creating our own promises. Instead, we'll be using code that writes them for us. As a junior, this is usually the case, such as for HTTP requests. It's more important to know how to consume promises. In order how to consume promises, you'll need to see how promises are written!

Below is a basic way to write a promise.

```js
const myFirstPromise = Promise.resolve("Hello world!");
```

Above, if you `console.log()` the promise `myFirstPromise`, it will show up as an object. It shows you the promise status, promise result, and shows it is a prototype, which also tells you that it has methods (i.e., catch, constructor, finally, then).

```js
const myBrokenPromise = Promise.reject(new Error("No ice-cream."));
myBrokenPromise.catch((e) => console.warn(e.message));
```

When you `console.log()` the `myBrokenPromise`, the shown status is 'rejected'.

In order to access the result of promises, we need to use the methods associated with promises (i.e., then, etc.). To access the value of a promise (the promise result), we use `.then`, which is a callback function. We pass in a function, and the argument of the passed function is the value of the promise result. Basically, with `.then`, we are saying what to do when we receive a result from the promise.

```js
const myFirstPromise = Promise.resolve("Hello world!");

myFirstPromise.then((response) => {
  console.log(`The response is: ${response}`);
});
```

Please remember that the 3 most recent code snippets are not the greatest examples of showing the purpose of promises.'

Below, the function passed in is called the executor, and the executor takes 2 parameters. The convention to call these parameters is 'resolve' and 'reject'. The parameters are what will be done when the promise is resolved or rejected.

```js
// Using setTimeout to simulate a 'slow' process

const anotherPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Banana!");
  }, 5000);
});

anotherPromise.then((response) => {
  console.log("The value is: " + response);
  document.querySelector("h1").innerText = `${response}`;
});
```

```js
const generateRandomNumber = () => {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random();

    setTimeout(() => {
      if (randomNumber < 0.5) {
        return reject(new Error("Too small!"));
      }

      const number = Math.round(randomNumber * 10);
      resolve(number);
    }, 5000);
  });
};

generateRandomNumber()
  .then((number) => {
    console.log("The random number is: " + number + ".");
  })
  .catch((error) => console.warn(`Got an error: ${error}.`))
  .finally(() => {
    console.log("Continuing the program...");
  });
```

The `.then` method on a promise is what to do when the promise is fulfilled.

## Error-Handling

### Try-Catch

This is a tangent, but there is overlap with the topic of promises.

```js
const myName = "Marielle";
console.log(`Hello ${myName}!`);

myName = "Mari";
console.log(`Call me ${myName}.`);
```

The above example will cause an error because you are trying to assign a new value to a `const` variable.

Errors crash programs if they're not 'caught'. If we 'throw' anything and don't 'catch' them, then our program will crash. To solve this, we use a try-catch block to catch errors.

```js
try {
  // some code that might throw an error
} catch (e) {
  // some code that handles the error (e) we just caught
} finally {
  // some code that runs no matter what
}
```

Below, the code no longer crashes because possible errors are 'caught'. A common thing to do in the `catch` block is to add the error message to a logging service.

```js
try {
  const myName = "Marielle";
  console.log(`Hello ${myName}!`);
  myName = "Mari";
  console.log(`Call me ${myName}.`);
} catch (e) {
  console.warn("Oops: ", e.message);
} finally {
  console.log("Continuing the program...");
}
```

```js
const divide = (num1, num2) => {
  if (num2 === 0) {
    throw new Error("Denominator cannot be 0.");
  }

  return num1 / num2;
};

try {
  const answer = divide(10, 0);
} catch (e) {
  console.log(e.message);
} finally {
  console.log("Continuing the program...");
}
```
