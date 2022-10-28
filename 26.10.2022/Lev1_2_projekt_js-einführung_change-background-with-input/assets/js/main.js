const colorInput = document.querySelector("#color");
const mainBgcolor = document.querySelector("main");

function getColor(event) {
  event.preventDefault();
  // colorInput.style.border = "10px blur #000fff";
  mainBgcolor.style.backgroundColor = colorInput.value;
}
