const button = document.querySelector("#button");
const choose = document.querySelector("#farbeAuswahlen");
const body = document.querySelector("body");

button.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(choose.value);
  body.style.backgroundColor = `${choose.value}`;
});
