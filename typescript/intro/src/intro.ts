// String variable in Java: String myName = "Marielle";
// String variable in JavaScript: let nyName = "Marielle";
let myName: string = "Marielle"; // this is the convention
let middleName = "Louisse"; // can do this as TS is smart enough to infer type

// error below, re-assigning with different value type not allowed
// myName = 12;

// function param and return type typing
// TS infers the return value type, but you should specify the type anyway
function add(a: number, b: number): number {
  return a + b;
}

const subtract = (a: number, b: number): number => {
  return a - b;
};

let result: number = add(1, 1);

// arrays
const names: string[] = ["John", "Kate"];
names.push("Alice"); // can't add anything other than strings to names array

const numbers: number[] = [1, 2, 3];
numbers.push(4);

// TypeScript allows generics
const combineArrays = <T>(arr1: T[], arr2: T[]): T[] => {
  return [...arr1, ...arr2];
};

const strArr = combineArrays<string>(["Hi", "Hello"], ["World!"]); // passed arguments need to be of the same time
const numArr = combineArrays<number>([1, 2, 3], [4, 5]);
