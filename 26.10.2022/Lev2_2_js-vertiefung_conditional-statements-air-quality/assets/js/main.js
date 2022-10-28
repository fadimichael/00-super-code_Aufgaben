const result1 = document.querySelector("#result1");
const result2 = document.querySelector("#result2");
const mainbgcolor = document.querySelector("main");

function checkAirQuality(event) {
  event.preventDefault();
  if (range.value <= 50) {
    result1.innerHTML = "Level of health concern : Good";
    result2.innerHTML = "Level of health effect :Little or no risk";
    mainbgcolor.style.backgroundColor = "#007300";
  } else if (range.value > 50 && range.value <= 100) {
    result1.innerHTML = "Level of health concern : Moderate";
    result2.innerHTML = "Level of health effect : Acceptable quality";
    mainbgcolor.style.backgroundColor = "#FCD000";
  } else if (range.value > 100 && range.value <= 150) {
    result1.innerHTML =
      "Level of health concern : Unhealthy for sensitive groups";
    result2.innerHTML =
      "Level of health effect : Generable publics not likely affected";
    mainbgcolor.style.backgroundColor = "#FD9900";
  }
}
