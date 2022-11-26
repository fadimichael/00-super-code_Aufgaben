let myMusic = [
  {
    artist: "The Beatles",
    title: "Abbey Road",
    release_jahr: 1969,
    format: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
  {
    artist: "Pink Floyd",
    title: "Dark Side of the Moon",
    release_jahr: 1978,
    format: ["CS", "CD", "LP", "Download"],
    gold: true,
  },
  {
    artist: "Led Zeppelin",
    title: "Led Zeppelin IV",
    release_jahr: 1971,
    format: ["CS", "LP", "Download"],
    gold: true,
  },
  {
    artist: "Metallica",
    title: "Kill ’Em All und Ride the Lightning",
    release_jahr: 1983,
    format: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
];

const res = document.getElementById("res");

myMusic.forEach((elt) => {
  res.innerHTML += `${elt.artist} <br> ${elt.title} <br> ${elt.format} <br><br>`;
});
