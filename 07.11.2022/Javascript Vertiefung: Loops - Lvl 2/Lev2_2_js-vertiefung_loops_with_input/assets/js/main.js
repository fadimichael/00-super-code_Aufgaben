let inputNumber = document.querySelector("#num");
const loopMe = document.querySelector("#submit");
const output = document.querySelector("#output");

let myLoop = ["L", "o", "p"];

// loopMe.addEventListener("click", (event) => {
//   event.preventDefault();
//   if (inputNumber.value == 0) {
//     output.innerHTML = `${myLoop[0]}${myLoop[1]}`;
//   } else {
//     for (let i = 1; i <= inputNumber.value; i++) {
//       let result = myLoop.splice(0, 0, "o");
//     }
//     output.innerHTML = myLoop.join("");
//     inputNumber.value = "";
//   }
// });

submit.addEventListener("click", (event) => {
  event.preventDefault();

  if (inputNumber.value == 0) {
    output.innerHTML = myLoop[0] + myLoop[2];
  } else {
    for (let i = 1; i < inputNumber.value; i++) {
      result = myLoop.splice(1, 0, "o");
    }
    output.innerHTML = myLoop.join("");
    inputNumber.value = "";
  }
});
