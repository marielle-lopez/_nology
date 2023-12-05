// calculting moon orbits

function calculateMoonOrbits(numEarthDays) {
  return numEarthDays / 27;
}

let userInput = Number(prompt("Enter number of Earth days: "));
let numOrbits = calculateMoonOrbits(userInput);

console.log(`The moon will orbit the Earth ${numOrbits} times.`);

// circles

function calculateCircleArea(radius) {
  return Math.PI * radius ** 2;
}

function calculateCircumference(radius) {
  return 2 * Math.PI * radius;
}

userInput = Number(prompt("Enter the circle radius: "));
let circleArea = calculateCircleArea(userInput);

console.log(`The area of the circle is ${circleArea} units^2.`);

userInput = Number(prompt("Enter the circle radius: "));
let circumference = calculateCircumference(userInput);

console.log(`The circumference of the circle is ${circumference}.`);

// years to days and seconds

function yearsToDays(numYears) {
  let extraDays = numYears / 4;
  return numYears * 365 + extraDays;
}

function yearsToSeconds(numYears) {
  return numYears * 365 * 24 * 60 * 60;
}

userInput = Number(prompt("Enter your age: "));
let ageToDays = yearsToDays(userInput);
let ageToSeconds = yearsToSeconds(userInput);

console.log(`You're ${ageToDays} days old.`);
console.log(`You're ${ageToSeconds} seconds old.`);
