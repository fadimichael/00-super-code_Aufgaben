let Person = [
  {
    alias: "Mr Green",
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 45,
    description: "He has a lot of connections",
    image:
      "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    color: "green",
  },

  {
    alias: "Dr Orchid",
    firstName: "Doctor",
    lastName: "Orchid",
    occupation: "Scientist",
    age: 26,
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "white",
  },
  {
    alias: "Prof Plum",
    firstName: "Victor",
    lastName: "Plum",
    occupation: "Designer",
    age: 22,
    description: "Billionaire video game designer",
    image:
      "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
    color: "purple",
  },
  {
    alias: "Miss Scarlet",
    firstName: "Kasandra",
    lastName: "Scarlet",
    occupation: "Actress",
    age: 31,
    description: "She is an A-list movie star with a dark past",
    image:
      "https://static.standard.co.uk/s3fs-public/thumbnails/image/2016/07/04/10/cluedo-miss-scarlett.jpg",
    color: "red",
  },

  {
    alias: "mrs Peacock",
    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "Socialité",
    age: 36,
    description:
      "She is from a wealthy family and uses her status and money to earn popularity",
    image:
      "https://pm1.narvii.com/6722/3bd0d86d367315d9e81a12390c17343a27d8a4d9_hq.jpg",
    color: "blue",
  },

  {
    alias: "Mr Mustard",
    firstName: "Jack",
    lastName: "Mustard",
    occupation: "Retired Football player",
    age: 62,
    description:
      "He is a former football player who tries to get by on his former glory",
    image:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
    color: "yellow",
  },
];

const murderName = document.querySelector("#murder-name");
const click = document.querySelector("#click");
const murderInfo = document.querySelector("#murder-info");
const occupation = document.querySelector("#occupation");
const description = document.querySelector("#discription");
const murderTool = document.querySelector("#murder-tool");
const murderPlace = document.querySelector("#murder-place");
const output = document.querySelector("#output");
let suspectArray = [];
for (let suspect of Person) {
  suspectArray.push(suspect.alias);
}
console.log(suspectArray);
let weaponArray = [
  "pistol",
  "trophy",
  "bat",
  "axe",
  "poison",
  "dumbell",
  "candlestick",
  "knife",
  "rope",
];

let placeArray = [
  "dining Room",
  "conservatary",
  "kitchen",
  "study",
  "library",
  "billiard Room",
  "lounge",
  "ball Room",
  "hall",
  "spa",
  "living Room",
  "obervatory",
  "theater",
  "guest House",
  "patio",
];
let index = Math.floor(Math.random() * suspectArray.length);
let randomSuspect = suspectArray[index];
let randomPlace = placeArray[Math.floor(Math.random() * placeArray.length)];
let randomWeapon = weaponArray[Math.floor(Math.random() * weaponArray.length)];
console.log(randomSuspect);
console.log(index);

click.addEventListener("click", () => {
  output.innerHTML = `${Person.alias[indexof(randomSuspect)].firstName}${
    Person[indexof(randomSuspect).lastName]
  } killed Mr Boddy using ${randomWeapon} in the ${randomPlace} `;
});
