const numberInput = document.querySelector("#num");
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const output = document.querySelector("#output");
const form = document.querySelector("form");
let total = 0;
form.addEventListener("submit", () => {
  for (let i = 0; i < numberInput.value; i++) {
    if (i % num1.value == 0 || i % num2.value == 0) {
      total += i;
      console.log(i);
      output.innerHTML = total;
    }
  }
});
