const allItems = document.querySelectorAll(".side-bar ul li a");
allItems.forEach((item) => {
  item.addEventListener("click", () => {
    removeActiveClasses();
    item.classList.add("active");
  });
});

function removeActiveClasses() {
  allItems.forEach((item) => {
    item.classList.remove("active");
  });
}
