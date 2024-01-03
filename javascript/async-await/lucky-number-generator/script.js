import { generateLuckyNumber } from "./number-generator.js"
import { addError, addLoading, addLuckyNumber } from "./dom.js";

document.querySelector('button').addEventListener("click", async () => {
  addLoading();

  // try {
  //   const luckyNumber = await generateLuckyNumber(1, 20);
  //   addLuckyNumber(luckyNumber);
  // } catch(error) {
  //   console.warn(error);
  //   addError();
  // }

  // we can set default values on error with await syntax
  const luckyNumber = await generateLuckyNumber(1, 20).catch((error) => {
    console.warn(error);
    return NaN;
  });

  isNaN(luckyNumber) ? addError() : addLuckyNumber(luckyNumber);
})