// console.log("Program starting...");

// const myFirstPromise = Promise.resolve("Hello world!");
// console.log(myFirstPromise);

// // const myBrokenPromise = Promise.reject(new Error("No ice-cream."));
// // console.log(myBrokenPromise);

// myFirstPromise.then((response) => {
//   console.log(`The response is: ${response}`);
// });

// console.log("Program continues...");

// const anotherPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Banana!");
//   }, 5000);
// });

// anotherPromise.then((response) => {
//   console.log("The value is: " + response);
//   document.querySelector("h1").innerText = `${response}`;
// });

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

const numberPromise = generateRandomNumber();

console.log(numberPromise);

numberPromise
  .then((number) => {
    console.log(numberPromise);
    console.log("The random number is: " + number + ".");
  })
  .catch((error) => console.warn(`Got an error: ${error}.`))
  .finally(() => {
    console.log("Continuing the program...");
  });
