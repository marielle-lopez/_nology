import { fibonacci } from "./math.js";

const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const fibString = formData.get("fibN");
  const fibSequenceNumber = parseInt(fibString);
  let result;

  try {
    value = fibonacci(fibSequenceNumber);
  } catch (e) {
    alert(e.message);
  } finally {
  }

  const container = document.querySelector(".result");
  container.innerHTML = `<p>Number at n = ${fibSequenceNumber} is ${result}.</p>`;
});
