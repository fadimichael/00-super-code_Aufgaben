let clickMe = document.getElementById("clickMe");
counter = 0;
clickMe.addEventListener("click", () => {
  counter++;
  console.log(counter);
  clickMe.innerHTML = `Click me: ${counter}`;
});
