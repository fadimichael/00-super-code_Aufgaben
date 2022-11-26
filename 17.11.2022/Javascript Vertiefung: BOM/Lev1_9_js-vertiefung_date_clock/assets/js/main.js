let heute = new Date();
let std = heute.getHours();
let min = heute.getMinutes();
let sec = heute.getSeconds();
const output = document.querySelector("#txt");

const startTime = () => {
  output.innerHTML = `${std}:${min}:${sec}`;
};
