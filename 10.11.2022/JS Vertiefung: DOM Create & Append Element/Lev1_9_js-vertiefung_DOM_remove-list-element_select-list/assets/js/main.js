const removeFarbe = document.body.firstElementChild.lastElementChild;
let farben = document.querySelector("#farbeAuswahlen");
// let options = document.querySelectorAll("option");
console.log(farben[0]);
removeFarbe.addEventListener("click", (event) => {
  event.preventDefault();
  // let indexOfSelectedFarbe = farben.selectedIndex;
  // farben.removeChild(farben[farben.selectedIndex]);

  farben.remove(farben.selectedIndex);
});
