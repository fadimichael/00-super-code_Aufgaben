const inputNumber = document.querySelector("#number");
const result = document.querySelector("h1");

function weather(event) {
  event.preventDefault();
  if (inputNumber.value >= 0 && inputNumber.value <= 3) {
    result.innerHTML = "Das Wetter ist Schlecht";
  } else if (inputNumber.value >= 3 && inputNumber.value <= 5) {
    result.innerHTML = "Das Wetter ist okay";
  } else if (inputNumber.value >= 6 && inputNumber.value <= 7) {
    result.innerHTML = "Das wetter ist gut";
  } else if (inputNumber.value >= 8 && inputNumber.value <= 10) {
    result.innerHTML = "Das wetter ist super";
  } else {
    result.innerHTML = "Unbekannte Zahl";
  }
}
