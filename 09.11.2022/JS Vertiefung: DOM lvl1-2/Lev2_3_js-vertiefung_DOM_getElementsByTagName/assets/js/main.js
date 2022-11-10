// // Farben: #f6c89f, #ffe7d1, #4b8e8d, #396362, #666, #333

const change = document.getElementById("navChange");
const navs = document.getElementsByTagName("a");
console.log(navs);

change.addEventListener("click", () => {
  navs[0].style.backgroundColor = "#f6c89f";
  navs[0].style.color = "#666";
  navs[1].style.backgroundColor = "#ffe7d1";
  navs[1].style.color = "#666";
  navs[2].style.backgroundColor = "#4b8e8d";
  navs[2].style.color = "#333";
  navs[3].style.backgroundColor = "#396362";
  navs[3].style.color = "#333";
});
