const vorName = document.getElementById("vorname");
const nachName = document.getElementById("nachname");
const land = document.getElementById("land");
const form = document.getElementById("form1");

form.addEventListener("submit", () => {
  console.log(
    `full name: ,${vorName.value} ${nachName.value}, land: ${land.value}`
  );
});
