const inputText = document.querySelector("#input-text");
const submit = document.querySelector("#submit");
const form = document.querySelector("form");
const output = document.querySelector("#output");
const select = document.querySelector("#select");

let textArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let encrypter = [];

console.log(encrypter);
form.addEventListener("submit", () => {
  encrypter = [];
  output.innerHTML = "";
  textArray.forEach((element) => {
    encrypter.push(element.toUpperCase());
  });
  let inputArray = inputText.value.split("");
  console.log(inputArray);
  for (let i = 0; i < select.value; i++) {
    let cuttedelement = encrypter.shift();
    encrypter.push(cuttedelement);
    console.log(encrypter);
  }
  for (let x = 0; x < inputArray.length; x++) {
    for (let y = 0; y < textArray.length; y++) {
      if (inputArray[x] == textArray[y]) {
        output.innerHTML += encrypter[y];
      }
    }
  }
  inputText.value = "";
});

// form.addEventListener("submit", () => {
//   let KlarTextArray = textArray;
//   let cuttedArray = KlarTextArray.slice(0, select.value);
//   // console.log(cuttedArray);
//   for (let i = 0; i < select.value; i++) {
//     KlarTextArray.shift(i);
//     console.log(KlarTextArray);
//     let geheimTextArray = KlarTextArray.concat(cuttedArray);
//     console.log(geheimTextArray);
//   }
//   let words = inputText.value.split("");
//   console.log(words[3]);
//   words.map((word) => {
//     let encrypter = [];
//     for (let x = 0; x < words.length; x++) {
//       for (let j = 0; j < KlarTextArray.length; j++) {
//         if (words[x] == KlarTextArray[j]) {
//           output.innerHTML += geheimTextArray[j];
//         }
//       }
//     }
// console.log(encrypter);
//   });
// });
