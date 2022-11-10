const divs = document.getElementsByClassName("example");

function myFunction() {
  for (let i of divs) {
    i.style.backgroundColor = "black";
    divs[divs.length - 1].style.color = "white";
  }
}
