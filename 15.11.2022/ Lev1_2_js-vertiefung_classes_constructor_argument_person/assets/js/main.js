class Person {
  constructor() {}
}

class addedPerson extends Person {
  constructor(namen, alter) {
    super();
    this.namen = namen;
    this.alter = alter;
  }
  info() {
    console.log(`${this.namen} is ${this.alter} years old`);
  }
}
let emmi = new addedPerson("Emanuela", 18);
emmi.info();
