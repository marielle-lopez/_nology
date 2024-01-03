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

const divide = (num1, num2) => {
  if (num2 === 0) {
    throw new Error("Denominator cannot be 0.");
  }

  return num1 / num2;
};

try {
  const answer = divide(10, 0);
  console.log("The answer is " + answer);
} catch (e) {
  console.warn(e.message);
} finally {
  console.log("Continuing the program...");
}

try {
  const answer = divide(10, 1);
  console.log("The answer is " + answer + ".");
} catch (e) {
  console.warn(e.message);
} finally {
  console.log("Continuing the program...");
}
