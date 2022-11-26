const mySelect = document.getElementById("farbeAuswahlen");
const myButton = document.getElementById("button");
console.log(typeof mySelect.value);
myButton.addEventListener("click", (e) => {
  e.preventDefault();
  let myColor = mySelect.value.split(" ").join().replace(",", "").toLowerCase();
  console.log(myColor);
  document.body.style.background = myColor;
});
