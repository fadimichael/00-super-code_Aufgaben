const fName = document.querySelector("#fName");
const lName = document.querySelector("#lName");
const stageName = document.querySelector("#stageName");
const albums = document.querySelector("#albums");
const singels = document.querySelector("#singels");
const netWorth = document.querySelector("#netWorth");
const age = document.querySelector("#age");
const famusQute = document.querySelector("#famusQute");
const url = document.querySelector("#url");
const add = document.querySelector("#button");
const output = document.querySelector("#result");

class Merkmalen {
  constructor(
    rapperFirstName,
    rapperLastName,
    stageName,
    albumNumber,
    verkaufteSingels,
    netWorth,
    alter,
    famusQute,
    imageUrl
  ) {
    this.rapperFirstName = rapperFirstName;
    this.rapperLastName = rapperLastName;
    this.stageName = stageName;
    this.albumNumber = albumNumber;
    this.verkaufteSingels = verkaufteSingels;
    this.netWorth = netWorth;
    this.alter = alter;
    this.famusQute = famusQute;
    this.imageUrl = imageUrl;
  }

  write() {
    output.style.backgroundImage = `url(${this.imageUrl})`;
    output.innerHTML = `<section>
    <div class = "one">
      <p>Albums: </p>
      <p>${this.albumNumber}</p>
    </div>
    <div class = "one">
      <p>Hits: </p>
      <p>${this.verkaufteSingels}</p>
    </div>
    <div class = "one">
      <p>networth: </p>
      <p>€${this.netWorth}</p>
    </div>
    <div class = "one">
      <p>Age: </p>
      <p>${this.alter}</p>
    </div>
  </section>
  <p class = "name">${this.rapperFirstName} ${this.rapperLastName}</p>;
  <p class = "stageName">${this.stageName}</p>`;
  }
}

add.addEventListener("click", (event) => {
  event.preventDefault();
  let neu = new Merkmalen(
    fName.value,
    lName.value,
    stageName.value,
    albums.value,
    singels.value,
    netWorth.value,
    age.value,
    famusQute.value,
    url.value
  );
  console.log(neu);
  neu.write();
});
