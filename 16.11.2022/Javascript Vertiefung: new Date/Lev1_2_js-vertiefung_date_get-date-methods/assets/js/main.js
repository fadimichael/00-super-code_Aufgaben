let monate = [
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

let wochenTag = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
];

setInterval(() => {
  let date1 = new Date();

  let date2 = date1.getFullYear();

  let date3 = date1.getMonth();

  let date4 = date1.getDay();

  let date5 = date1.getHours();

  let date6 = date1.getMinutes();

  let date9 = date1.getSeconds();

  let date7 = wochenTag[date1.getDay()];

  let date8 = monate[date1.getMonth()];

  const day = document.querySelector("#day");
  const hour = document.querySelector("#hour");
  const minute = document.querySelector("#minute");
  const second = document.querySelector("#second");
  const ampm = document.querySelector("#ampm");

  day.innerHTML = date7.slice(0, 3);
  hour.innerHTML = date5;
  minute.innerHTML = date6;
  second.innerHTML = date9;

  /* -------------------------------------------------------------------------- */
  /*                                    AM PM                                   */
  /* -------------------------------------------------------------------------- */
  if (date5 >= 12) {
    ampm.innerHTML = "PM";
  } else {
    ampm.innerHTML = "AM";
  }
  /* -------------------------------------------------------------------------- */
  /*                            CONVERT 24HR TO 12HR                            */
  /* -------------------------------------------------------------------------- */
  if (date5 > 12) {
    date5 -= 12;
  }
  /* -------------------------------------------------------------------------- */
  /*                        ADD ZERO BEFORE SINGLE DIGIT                        */
  /* -------------------------------------------------------------------------- */

  if (date5 < 10) {
    hour.innerHTML = `0${date5}`;
  }
  if (date6 < 10) {
    minute.innerHTML = `0${date6}`;
  }
  if (date9 < 10) {
    second.innerHTML = `0${date9}`;
  }
});
