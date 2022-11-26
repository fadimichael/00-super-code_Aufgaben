const count = document.querySelector("#count");
const message = document.querySelector(".message");
let counter = 10;

window.onload = countDown = () => {
  if (counter < 1) {
    clearInterval(interval);
    message.classList.add("hide");
  } else {
    count.innerHTML = counter--;
  }
};
interval = setInterval(countDown, 1000);
