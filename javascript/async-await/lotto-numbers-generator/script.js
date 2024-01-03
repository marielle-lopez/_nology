import { addLoading, addLottoNumbers } from "./dom-manipulation.js";
import { generateLottoNumbers } from "./lotto-numbers-generator.js";

document.querySelector('button').addEventListener("click", async () => {
  addLoading();
  const lottoNumbers = await generateLottoNumbers(10);
  addLottoNumbers(lottoNumbers);
});