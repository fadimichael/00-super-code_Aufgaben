const input = document.querySelector("#minutes");
const output = document.querySelector("#time");
let seconds = 60;
// let interval = null;
function startMinCountdown() {
  interval = setInterval(displayCounter, 1000);
}

function pauseMinCountdown() {
  clear = clearInterval(interval);
}
function continueMinCountdown() {
  let clear = clearInterval(interval);
  interval = setInterval(displayCounter, 1000);
}

function restartMinCountdown() {
  clear = clearInterval(interval);
  output.innerHTML = `00:00`;
}

let displayCounter = () => {
  if (seconds == 0) {
    output.innerHTML = `00:00`;
  } else {
    seconds--;
    if (input.value < 10) {
      output.innerHTML = `0${input.value - 1}:${seconds--}`;
    } else {
      output.innerHTML = `${input.value - 1}:${seconds--}`;
    }
  }
};
