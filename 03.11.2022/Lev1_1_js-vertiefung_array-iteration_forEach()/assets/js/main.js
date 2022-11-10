let getraenke = [
  "Coca-Cola",
  "Apfelsaft",
  "Pepsi",
  "Traubensaft",
  "Sprite",
  "Orangensaft",
  "Red Bull Energy Drink",
  "Fanta",
];

getraenke.sort();

getraenke.forEach((element) => {
  document.write(`<p>${element}</p>`);
});
