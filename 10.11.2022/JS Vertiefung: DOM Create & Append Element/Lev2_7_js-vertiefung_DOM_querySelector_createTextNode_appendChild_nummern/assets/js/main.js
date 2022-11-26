const click = document.querySelector("button");
let output = document.querySelector(".umwickeln");
let counter = 0;
// click.addEventListener("click", () => {
//   let div = document.createElement("div");

//   if (counter % 10 == 0) {
//     div.classList.add("weiss");
//   } else {
//     div.classList.add("rechteck");
//   }
//   div.textContent = counter++;
//   output.appendChild(div);
// });

click.addEventListener("click", () => {
  let div = document.createElement("div");

  if (counter % 10 == 0) {
    div.classList.add("weiss");
  }
  div.classList.add("rechteck");
  div.textContent = counter++;
  output.appendChild(div);
});
