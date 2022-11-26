let date1 = new Date("september 2 ,2019 09:00:00");

let date2 = new Date(0);

let date3 = new Date(31556908800);

let date4 = new Date(86400000);

const body = document.querySelector("body");

body.innerHTML = `<p>${date1} = new Date("september 2 ,2019 09:00:00")</p>
<p>${date2} = new Date(0)</p>
<p>${date3} = new Date(31556908800)</p>
<p>${date4} = new Date(86400000)</p>`;
