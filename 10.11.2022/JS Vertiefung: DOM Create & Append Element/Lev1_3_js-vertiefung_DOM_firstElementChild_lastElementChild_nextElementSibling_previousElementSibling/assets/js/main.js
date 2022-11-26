const buttons = document.querySelectorAll("button");
let output = document.querySelector("output");
let ul = document.getElementsByTagName("li");
console.log(ul.length);

buttons[0].addEventListener("click", () => {
  output.innerHTML = document.body.firstElementChild.children[0].textContent;
});

buttons[1].addEventListener("click", () => {
  // output.innerHTML =
  //   document.body.firstElementChild.children[ul.length - 1].textContent;
  output.innerHTML =
    document.body.firstElementChild.lastElementChild.textContent;
});
buttons[2].addEventListener("click", () => {
  output.innerHTML =
    document.body.firstElementChild.children[0].nextElementSibling.textContent;
});
buttons[3].addEventListener("click", () => {
  // output.innerHTML =
  //   document.body.firstElementChild.children[
  //     ul.length - 1
  //   ].previousElementSibling.textContent;
  output.innerHTML =
    document.body.firstElementChild.lastElementChild.previousElementSibling.textContent;
});
