const userInput = document.querySelector("#text");
let result = document.querySelector("#result");
let addBtn = document.querySelector("#add");
let removeBtn = document.querySelector("#remove");
const array = [];
let arrayString = "";

function listMaker() {
  arrayString = array.toString();
  arrayString = arrayString.replaceAll(",", "");
  result.innerHTML = arrayString;
}

addBtn.addEventListener(`click`, (event) => {
  event.preventDefault();
  let val = `<li>${userInput.value}</li>`;
  array.push(val);
  listMaker();
  userInput.value = "";
});

removeBtn.addEventListener(`click`, (event) => {
  event.preventDefault();
  array.pop();
  listMaker();
});
