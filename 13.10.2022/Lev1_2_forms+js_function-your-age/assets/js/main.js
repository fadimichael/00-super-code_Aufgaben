function calculateAge() {
  event.preventDefault();
  const outputNumber = document.querySelector(".result");

  let birthdayYear = document.querySelector("#num1").value;

  birthdayYear = 2022 - birthdayYear;
  console.log(birthdayYear);
  outputNumber.innerHTML = birthdayYear;
}
