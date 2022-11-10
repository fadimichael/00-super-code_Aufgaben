const emoh = document.getElementById("navHome");
const change = document.getElementById("navChange");

change.addEventListener("click", () => {
  emoh.innerHTML = `emoH`;
  emoh.style.color = "black";
  emoh.style.backgroundColor = "#EEA7CA";
});
