let select = document.querySelector("#my-select");
const output = document.querySelector("#option-selected");

select.addEventListener("change", (e) => {
  output.innerHTML = `Sie haben ausgewählt ${e.target.value}`;
});
