const input = document.querySelector("#number");
const ok = document.querySelector("#ok");
const cancel = document.querySelector("#cancel");

ok.addEventListener("click", function (event) {
  event.preventDefault();
  const computerZahl = Math.floor(Math.random() * 10) + 1;
  if (computerZahl !== Number(input.value)) {
    console.log(Number(input.value));
    console.log(computerZahl);
    console.log(`Du hast verloren,Die nummer lautet ${computerZahl}`);
  } else {
    console.log(`Du hast gewonnen,Die nummer lautet ${computerZahl}`);
  }
  input.value = "";
});
