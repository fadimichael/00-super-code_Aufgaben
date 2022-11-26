const userInput = document.querySelector("#userinput");
const speichern = document.querySelector("#enter");
const ul = document.querySelector("ul");
const addLists = () => {
  if (userInput.value === "") {
    alert("please write your rewe list");
  } else {
    let newItem = document.createElement("li");
    newItem.textContent = userInput.value;
    ul.appendChild(newItem);
    userInput.value = "";
  }
};

speichern.addEventListener("click", (event) => {
  event.preventDefault();
  addLists();
});
window.addEventListener("keydown", (keyboard) => {
  if (keyboard.keyCode === 13) {
    //oder man kann keyboard.code="enter"
    addLists();
  }
});
