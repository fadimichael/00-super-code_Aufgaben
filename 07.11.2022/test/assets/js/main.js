// let sum = 0
// for (i = 1; i <= 100; i++) {
//   sum += i
// }

// console.log(sum)

// let stars = ""
// for (let i = 0; i < 6; i++) {
//   stars += "*"
//   console.log(stars)
// }

// for (let i = 5; i <= 10; i++) {
//   console.log(i);
// }

// let country = ["france", "germany", "spain"];
// for (let i = 0; i < country.length; i++) {
//   console.log(country[i].toUpperCase());
// }

let array = [10, 20, 30];
for (let i = 0; i < array.length; i++) {
  console.log(array[i] * 2);
}

array.forEach((ele) => {
  console.log(ele * 2);
});
