const body = document.querySelector("body");
const backgournds = document.getElementsByTagName("li");
let h1 = document.querySelector("h1");
let p = document.querySelector("p");

backgournds[0].addEventListener("click", () => {
  body.style.backgroundColor = "#757575";
  h1.style.color = "black";
  p.style.color = "black";
});
backgournds[1].addEventListener("click", () => {
  body.style.backgroundColor = "#757575";
  h1.style.color = "white";
  p.style.color = "white";
});
backgournds[2].addEventListener("click", () => {
  body.style.backgroundColor = "#1C01F4";
  h1.style.color = "white";
  p.style.color = "white";
});
backgournds[3].addEventListener("click", () => {
  body.style.backgroundColor = "#F7FF12";
  h1.style.color = "black";
  p.style.color = "black";
});
