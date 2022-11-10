const key = document.querySelector("#key");
const keyCode = document.querySelector("#keyCode");
const code = document.querySelector("#code");
const h1 = document.querySelector("h1");

document.addEventListener("keydown", (event) => {
  key.innerHTML = event.key;
  keyCode.innerHTML = event.keyCode;
  code.innerHTML = event.code;
  h1.innerHTML = event.keyCode;
});
