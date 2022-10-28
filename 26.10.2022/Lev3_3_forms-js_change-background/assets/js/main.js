const bodyBgColor = document.querySelector("body");

function changeBackground() {
  bodyBgColor.style.backgroundColor =
    "rgb(" +
    rangeRed.value +
    "," +
    rangeGreen.value +
    "," +
    rangeBlue.value +
    ")";

  // we write the rgb( between ganze füssschen because it is a string and we need to print it like that
}
