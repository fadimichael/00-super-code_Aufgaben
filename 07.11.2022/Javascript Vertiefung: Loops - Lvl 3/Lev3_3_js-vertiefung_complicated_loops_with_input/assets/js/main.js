let inputNumber = document.querySelector("#num");
const form = document.querySelector("form");
const output = document.querySelector("#output");

let textResult = ["L", "o", "p"];
form.addEventListener("submit", () => {
  textResult = ["L", "o", "p"];
  output.innerHTML = "";
  if (inputNumber.value == 0) {
    output.innerHTML = `ERROR`;
    output.style.color = "red";
    return;
  } else {
    if (inputNumber.value % 2 == 0) {
      for (i = 0; i < inputNumber.value; i++) {
        textResult.splice(1, 0, "o");
        output.innerHTML = textResult.join("");
      }
    } else if (inputNumber.value % 2 != 0) {
      // loop inside loop we have to change the itrator i or y
      for (y = 0; y < Number(inputNumber.value / 2).toFixed(0) - 1; y++) {
        textResult.splice(1, 0, "o", "O");
        output.innerHTML = textResult.join("");
      }
    }
  }
});
