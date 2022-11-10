const red = document.querySelector("#rot");
const green = document.querySelector("#grun");
const blue = document.querySelector("#blau");
const body = document.querySelector("body");
const buttons = document.querySelectorAll("button");
const demo = document.querySelector("#demo");

function changeBackground(i) {
  body.style.backgroundColor = i;
}
function changeHandle() {
  body.style.backgroundColor = `rgb(${red.value},${green.value} , ${blue.value})`;
  demo.innerHTML = `rgb(${red.value},${green.value},${blue.value}) = ${rgbToHex(
    Number(red.value),
    Number(green.value),
    Number(blue.value)
  )}`;
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
