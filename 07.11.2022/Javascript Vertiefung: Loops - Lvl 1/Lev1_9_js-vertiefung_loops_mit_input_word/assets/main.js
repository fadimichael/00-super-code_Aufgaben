let words = [
  "hallo",
  "Auto",
  "Waschmaschine",
  "Schrank",
  "Katze",
  "Beispiel",
  "Eltern",
  "Fenster",
  "Geburtstag",
  "Himmel",
  "schwimmen",
  "Zeitung",
];

const submit = document.querySelector("#submit");
const inputNum = document.querySelector("#num");
const output = document.querySelector("#output");
submit.addEventListener("click", () => {
  output.innerHTML = "";
  // for (let i = 0; i < words.length; i++) {
  //   if (words[i].length == inputNum.value) {
  //     output.innerHTML += `<li>${words[i]}</li>`;
  //   }
  // }

  /* ------------------------------------------------------------------------ */
  /*                            zweite möglichkeit                            */
  /* ------------------------------------------------------------------------ */

  const filterArr = words.filter((ele) => ele.length == inputNum.value);
  output.innerHTML += `${filterArr.join("<li></li>")}`;
});
