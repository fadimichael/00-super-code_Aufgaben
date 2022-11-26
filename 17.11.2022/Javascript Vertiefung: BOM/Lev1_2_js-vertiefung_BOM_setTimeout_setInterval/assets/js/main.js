const start = document.querySelector("#btn");
const output = document.querySelector(".zeit");
let counter = 100;

start.addEventListener("click", () => {
  let interval = setInterval(fadi, 200);
});
const fadi = () => {
  if (counter === 0) {
    clearInterval(interval);
  } else {
    output.innerHTML = `${counter}%`;
    counter--;
  }
};
