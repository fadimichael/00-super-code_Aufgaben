function ageDifference() {
  const outputNumber = document.querySelector(".result");

  let age1 = document.querySelector("#num1").value;
  let age2 = document.querySelector("#num2").value;
  let difference = age1 - age2;

  outputNumber.innerHTML = "Die Differenz ist: " + difference;
}
