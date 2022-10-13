function verdoppel() {
  event.preventDefault();
  const outputNumber = document.querySelector(".result");
  let number = document.querySelector(".number").value;
  number *= 2;
  console.log(number);
  outputNumber.innerHTML = number;
}
