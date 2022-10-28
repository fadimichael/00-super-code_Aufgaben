const johnAge = document.querySelector("#john-age");
const johnHeight = document.querySelector("#john-height");
const meikeAge = document.querySelector("#meike-age");
const meikeHeight = document.querySelector("#meike-height");
const johnPoints = document.querySelector("#john-points");
const meikePoints = document.querySelector("#meike-points");
const theWinner = document.querySelector("#winner");

function difference(event) {
  event.preventDefault();
  let johnResult = johnAge.value * 5 + +johnHeight.value;
  let meikeResult = meikeAge.value * 5 + +meikeHeight.value;
  if (johnResult > meikeResult) {
    johnPoints.innerHTML = "John got " + johnResult + " points";
    meikePoints.innerHTML = "Meike got " + meikeResult + " points";
    theWinner.innerHTML = "The Winner is JOHN";
  } else if (johnResult < meikeResult) {
    johnPoints.innerHTML = "John got " + johnResult + " points";
    meikePoints.innerHTML = "Meike got " + meikeResult + " points";
    theWinner.innerHTML = "The Winner is Meike";
  } else {
    johnPoints.innerHTML = "John got " + johnResult + " points";
    meikePoints.innerHTML = "Meike got " + meikeResult + " points";
    theWinner.innerHTML = "Both got the same Results";
  }
}
