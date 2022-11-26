const helloButton = document.querySelector("#hello-button");
const output = document.querySelector("#output");

helloButton.addEventListener("click", () => {
  output.innerHTML = "Hallo zusammen";
});
