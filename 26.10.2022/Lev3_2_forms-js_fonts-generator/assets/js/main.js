const result = document.querySelector("h1");
const textInput = document.querySelector("#text");

function changeFontSize() {
  result.innerHTML = textInput.value;
  result.style.fontSize = range.value + "px";
  result.style.fontFamily = select.value;
  // result.style.fontFamily=Id.attribute
  if (textInput.value == "") {
    result.innerHTML = "Test";
  }
}

// const sliderElement = document.getElementById("range");
// const selectElement = document.getElementById("fonts-select");
// const inputElement = document.getElementById("text");

// const resultElement = document.getElementById("result");

// function fontChange(event) {
//   event.preventDefault();

//   let myFontSize = sliderElement.value + "px";
//   let myFontFamily = selectElement.value;
//   let exampleText = inputElement.value;

//   resultElement.style.fontFamily = myFontFamily;
//   resultElement.style.fontSize = myFontSize;
//   resultElement.innerHTML = exampleText;

//   if (exampleText == "") {
//     resultElement.innerHTML = "Test";
//   }
// }
