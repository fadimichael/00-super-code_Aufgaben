const mainBgcolor = document.querySelector("main");
const header = document.querySelector("h1");

// const colorPicker = document.querySelector("div");

function colorChange1(event) {
  event.preventDefault();
  mainBgcolor.style.backgroundColor = "#1A8F53";
  header.style.color = "#6E0A60";
}
function colorChange2(event) {
  event.preventDefault();
  mainBgcolor.style.backgroundColor = "#444171";
  header.style.color = "#DAAB43";
}
function colorChange3(event) {
  event.preventDefault();
  mainBgcolor.style.backgroundColor = "#00001F";
  header.style.color = "#C65D0B";
}
function colorChange4(event) {
  event.preventDefault();
  mainBgcolor.style.backgroundColor = "#050356";
  header.style.color = "#26CCFE";
}
