let list = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

let date1 = new Date(2001, 2, 4);
console.log(date1);
let month1 = list[date1.getMonth()];
console.log(month1);
let date2 = new Date(2019, 11, 24);
let month2 = list[date2.getMonth()];
console.log(month2);
let date3 = new Date(1410, 06, 15);
let month3 = list[date3.getMonth()];
console.log(month3);
