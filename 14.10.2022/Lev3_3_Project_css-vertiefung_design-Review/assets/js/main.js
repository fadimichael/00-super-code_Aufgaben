const darkModeToggle = document.querySelector("#dark-mode-toggle");
const darkModeName = document.querySelector("#dark-mode-name");
const wrapper = document.querySelector(".wrapper");
darkModeToggle.innerHTML = "&#xf204;";
darkModeName.innerHTML = "Dark Mode";

darkModeToggle.addEventListener("click", function () {
  this.classList.toggle("active");
  this.innerHTML = "&#xf205;";
  wrapper.classList.toggle("active");
  if (darkModeToggle.classList.contains("active")) {
    darkModeName.innerHTML = "Light Mode";
    darkModeToggle.innerHTML = "&#xf205;";
  } else {
    darkModeName.innerHTML = "Dark Mode";
    darkModeToggle.innerHTML = "&#xf204;";
  }
});
