const names = document.querySelector("#name");
const age = document.querySelector("#age");
const examCheck = document.querySelector("#examCheck");
const submit = document.querySelector("#button");
const ul = document.querySelector("#result");

class Person {
  constructor() {}
}
class PersonResult extends Person {
  constructor(name, age, examCheck) {
    super();
    this.name = name;
    this.age = age;
    this.examCheck = examCheck;
  }
  //Method
  write() {
    if (this.examCheck === true) {
      ul.innerHTML += `<li class="black">${this.name}, ${this.age} Years old.</li>`;
    } else if (this.examCheck === false) {
      ul.innerHTML += `<li class="red">${this.name}, ${this.age} Years old.</li>`;
    }
  }
}
submit.addEventListener("click", (event) => {
  event.preventDefault();
  let neu = new PersonResult(names.value, age.value, examCheck.checked);
  console.log(neu);
  neu.write();
});
