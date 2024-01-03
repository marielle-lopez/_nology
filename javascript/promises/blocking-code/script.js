const wait = (ms) => {
  let start = Date.now();
  let now = start;

  while (now - start < ms) {
    now = Date.now();
  }
};

// console.log("Hello");
// wait(3000);
// console.log("there!");

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

document.querySelector("button").addEventListener("click", () => {
  alert("You clicked the button!");
});
