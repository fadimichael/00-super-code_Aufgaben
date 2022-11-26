console.log("Start Warten für 3 sekunden...");
const ausgabeInConsole = () => {
  console.log("Erledigt. Du hast 3 sekunden verschwendet");
};
setTimeout(ausgabeInConsole, 3000);

// let timeStamp = new Date().getTime();
// console.log(timeStamp);

let date1 = new Date();
let hours = date1.getHours();
let minutes = date1.getMinutes();
let seconds = date1.getSeconds();

// const timeStamp = () => {
//   console.log(`${hours}:${minutes}:${seconds++}`);
// };

// const intval = setInterval(timeStamp, 1000);

let counter = 10;
const countDown = () => {
  if (counter < 1) {
    console.log("endlich Feriabned");
    clearInterval(intval);
  } else {
    console.log(counter--);
  }
};
let intval = setInterval(countDown, 1000);
