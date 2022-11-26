let date1 = new Date();
let month = date1.getMonth() + 1;
let year = date1.getFullYear();
let day = date1.getUTCDate();
const body = document.querySelector("body");
const dateformat1 = function () {
  body.innerHTML += `<h1>${day}/${month}/${year}</h1>`;
};

const dateformat2 = function () {
  body.innerHTML += `<h1>${day}-${month}-${year}</h1>`;
};

dateformat1();
dateformat2();
