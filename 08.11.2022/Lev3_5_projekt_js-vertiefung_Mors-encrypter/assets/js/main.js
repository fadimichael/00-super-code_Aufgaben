const inputText = document.querySelector("#input-text");
const submit = document.querySelector("#submit");
const form = document.querySelector("form");
const output = document.querySelector("#output");
let convertedletter = [];

let morseAlphabet = [
  { letter: "1", morseCode: ".----" },
  { letter: "2", morseCode: "..---" },
  { letter: "3", morseCode: "...--" },
  { letter: "4", morseCode: "....-" },
  { letter: "5", morseCode: "....." },
  { letter: "6", morseCode: "-...." },
  { letter: "7", morseCode: "--..." },
  { letter: "8", morseCode: "---.." },
  { letter: "9", morseCode: "----." },
  { letter: "0", morseCode: "-----" },
  { letter: " ", morseCode: "    " },
  { letter: "A", morseCode: ".-" },
  { letter: "B", morseCode: "-..." },
  { letter: "C", morseCode: "-.-." },
  { letter: "D", morseCode: "-.." },
  { letter: "E", morseCode: "." },
  { letter: "F", morseCode: "..-." },
  { letter: "G", morseCode: "--." },
  { letter: "H", morseCode: "...." },
  { letter: "I", morseCode: ".." },
  { letter: "J", morseCode: ".---" },
  { letter: "K", morseCode: "-.-" },
  { letter: "L", morseCode: ".-.." },
  { letter: "M", morseCode: "--" },
  { letter: "N", morseCode: "-." },
  { letter: "O", morseCode: "---" },
  { letter: "P", morseCode: ".--." },
  { letter: "Q", morseCode: "--.-" },
  { letter: "R", morseCode: ".-." },
  { letter: "S", morseCode: "..." },
  { letter: "T", morseCode: "-" },
  { letter: "U", morseCode: "..-" },
  { letter: "V", morseCode: "...-" },
  { letter: "W", morseCode: ".--" },
  { letter: "X", morseCode: "-..-" },
  { letter: "Y", morseCode: "-.--" },
  { letter: "Z", morseCode: "--.." },
];
// console.log(morseAlphabet[0].letter);

// form.addEventListener("submit", () => {
//   let words = inputText.value.split(" "); // split through the space between the letters
//   words.map((word) => {
//     let letters = word.split(""); //split by default
//     letters.map((lett) => {
//       morseAlphabet.forEach((alfa) => {
//         console.log(alfa.letter);
//         if (alfa.letter == lett.toUpperCase()) {
//           console.log(alfa.letter);
//           convertedletter.push(alfa.morseCode);
//         }
//       });
//     });
//     console.log(convertedletter);
//   });
//   output.innerHTML = convertedletter.join("");
// });

/* -------------------------------------------------------------------------- */
/*                             zweite Möglichkeit                             */
/* -------------------------------------------------------------------------- */
form.addEventListener("submit", () => {
  let buchstaben = inputText.value.split("");
  console.log(buchstaben);
  buchstaben.map((buchstabe) => {
    morseAlphabet.forEach((alfa) => {
      if (alfa.letter == buchstabe.toUpperCase()) {
        convertedletter.push(alfa.morseCode);
      }
    });
  });

  output.innerHTML = convertedletter.join("");
});
