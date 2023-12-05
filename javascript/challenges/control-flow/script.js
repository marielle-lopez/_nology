const n = Math.floor(Math.random() * 100);

if (n % 2 === 0) {
  console.log("n is even");
} else {
  console.log("n is odd");
}

const x = Math.floor(Math.random() * 100);
const y = Math.floor(Math.random() * 100);

if (x > y) {
  console.log("x is greater than y");
} else if (x < y) {
  console.log("x is smaller than y");
} else {
  console.log("x is equal to y");
}

let userInput = prompt("Enter something:");

if (isNaN(Number(userInput))) {
  if (typeof userInput === "string" && isNaN(userInput)) {
    console.log(userInput);
  } else {
    console.log("invalid input");
  }
} else {
  console.log(Number(userInput) ** 2);
}

let day = Number(prompt("Enter a number: "));

switch (day) {
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;
  case 7:
    console.log("Today is Sunday");
  default:
    console.log("I have no idea what day it is!");
}

let parent1 = prompt("Enter parent 1 eye colour: ").toLowerCase();
let parent2 = prompt("Enter parent 2 eye colour: ").toLowerCase();

let brownChance; // child's chance of having brown eyes
let greenChance; // child's chance of having green eyes
let blueChance; // child's chance of having blue eyes

if (parent1 === "brown") {
  if (parent2 === "brown") {
    [brownChance, greenChance, blueChance] = [75, 18.75, 6.25];
  }
} else if (parent1 === "green") {
  if (parent2 === "brown") {
    [brownChance, greenChance, blueChance] = [50, 37.5, 12.5];
  } else if (parent2 === "green") {
    [brownChance, greenChance, blueChance] = ["<1", 75, 25];
  } else {
    [brownChance, greenChance, blueChance] = [0, 50, 50];
  }
} else if (parent1 === "blue") {
  if (parent2 === "brown") {
    [brownChance, greenChance, blueChance] = [50, 0, 50];
  } else if (parent2 === "blue") {
    [brownChance, greenChance, blueChance] = [0, 1, 99];
  }
}

console.log(
  `Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is ${blueChance}%, brown is ${brownChance}% and green is ${greenChance}%.`
);

let child; // variable storing child's most likely eye colour

if (brownChance > blueChance && brownChance > greenChance) {
  child = "brown";
} else if (greenChance > brownChance && greenChance > blueChance) {
  child = "green";
} else {
  child = "blue";
}

switch (child) {
  case "brown":
    console.log("favourite");
    break;
  case "blue":
    console.log("least (sorry)");
    break;
  case "green":
    console.log("mediocre");
    break;
  default:
    console.log("no idea");
}
