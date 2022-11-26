const submitBtn = document.getElementById("submit-btn");
const inputAge = document.getElementById("input-age");
let age;

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  age = inputAge.value;
  if (Number(age) >= 18) {
    console.log(true);
    document.getElementById("output").innerHTML = "over 18";
  } else {
    console.log(false);
    document.getElementById("output").innerHTML = "under 18";
  }
});
