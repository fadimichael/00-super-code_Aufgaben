const brutto = document.querySelector("#netto-zu-brutto");
const netto = document.querySelector("#brutto-zu-netto");
const neuenzehn = document.querySelector("#neuenzehn");
const seben = document.querySelector("#seben");
const userInputTxt = document.querySelector("#user-input-txt");
const userInput = document.querySelector("#user-input");

const steuerBetrag = document.querySelector("#steuer-betrag");
const bruttoNettoEndpreis = document.querySelector("#brutto-netto-endpreis");
const endPreis = document.querySelector("#end-preis");

function bN(event) {
  event.preventDefault();
  if (brutto.checked == true) {
    userInputTxt.innerHTML = `Nettobetrag (Preis ohne Mehrwertsteuer) in Euro`;
    bruttoNettoEndpreis.innerHTML = "Bruttobetrag(Endpreis)";
  } else if (netto.checked == true) {
    userInputTxt.innerHTML = `Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro`;
    bruttoNettoEndpreis.innerHTML = "Nettobetrag";
  }
}

function mwstRechner(event) {
  event.preventDefault();
  if (userInput.value.includes(`-`)) {
    window.alert(`bitte eine positiven wert eingeben`);
    endPreis.innerHTML = `--`;
    steuerBetrag.innerHTML = `--`;
  } else if (brutto.checked == true && neuenzehn.checked == true) {
    steuerBetrag.innerHTML = (Number(userInput.value) * 0.19).toFixed(2) + " €";
    Number(steuerBetrag.value).toFixed(2);
    endPreis.innerHTML = (Number(userInput.value) * 1.19).toFixed(2) + " €";
  } else if (brutto.checked == true && seben.checked == true) {
    steuerBetrag.innerHTML = (Number(userInput.value) * 0.07).toFixed(2) + " €";
    endPreis.innerHTML = (Number(userInput.value) * 1.07).toFixed(2) + " €";
  } else if (netto.checked == true && neuenzehn.checked == true) {
    steuerBetrag.innerHTML =
      ((Number(userInput.value) / 1.19) * 0.19).toFixed(2) + " €";
    endPreis.innerHTML = (Number(userInput.value) / 1.19).toFixed(2) + " €";
  } else if (netto.checked == true && seben.checked == true) {
    steuerBetrag.innerHTML =
      ((Number(userInput.value) / 1.07) * 0.07).toFixed(2) + " €";
    endPreis.innerHTML = (Number(userInput.value) / 1.07).toFixed(2) + " €";
  }
}
