person = {
  name: "Fadi",
  alter: "38",
  sagNameAlter: () => {
    alert(`${person.name} ${person.alter}`);
  },
};
console.log(person.name, person.alter);
person.sagNameAlter();
