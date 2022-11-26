let edelMetallPreise = [
  { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
  { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
  { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
  { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
  { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
  { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
  { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
  { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
  { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" },
];
let nameArr = [];
let preisArr = [];
let changeArr = [];
edelMetallPreise.forEach((element) => {
  nameArr.push(element.name);
  console.log(nameArr);
});

edelMetallPreise.map((element) => {
  let nameArr2 = [];
  console.log(nameArr2.push(element.name));
});
edelMetallPreise.forEach((element) => {
  preisArr.push(element.preiseGramEuro);
  console.log(preisArr);
});
edelMetallPreise.map((element) => {
  let presiArr2 = [];
  console.log(presiArr2.push(element.preiseGramEuro));
});
edelMetallPreise.forEach((element) => {
  changeArr.push(element.veraenderung);
  console.log(changeArr);
});
edelMetallPreise.map((element) => {
  let cahngeArr2 = [];
  console.log(cahngeArr2.push(element.veraenderung));
});
console.log(preisArr);
let preisMore50 = preisArr.filter((element) => {
  return element > 50;
});
console.log(preisMore50);

let tbody = document.querySelector("#tbody");
let arrayTable = [nameArr, preisArr, changeArr];
console.log(arrayTable);
for (let i = 0; i < nameArr.length; i++) {
  let tr = document.createElement("tr");
  for (let j = 0; j < arrayTable.length; j++) {
    let td = document.createElement("td");
    tr.appendChild(td);
    tr.firstElementChild.textContent = nameArr[i];
    tr.lastElementChild.textContent = preisArr[i];
  }
  tr.lastElementChild.textContent = changeArr[i];

  tbody.appendChild(tr);
}
