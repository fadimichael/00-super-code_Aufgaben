const buttons = document.getElementsByTagName("button");
const h1 = document.querySelector("h1");
buttons[0].addEventListener("click", () => {
  h1.style.border = "5px solid black";
  h1.style.color = "green";
  h1.style.borderRadius = "10px";
  h1.classList.remove("active");
});
buttons[1].addEventListener("click", () => {
  h1.style.border = "15px solid black";
  h1.style.color = "green";
  h1.style.borderRadius = "10px";
  h1.classList.remove("active");
});
buttons[2].addEventListener("click", () => {
  h1.classList.add("active");
});
