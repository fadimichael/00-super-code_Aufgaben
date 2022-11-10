let numArr = [5, 22, 15, 100, 55];

for (let i of numArr) {
  for (x = 1; x <= 9; x++) {
    if (i % x == 0) {
      console.log(`${i} ist durch ${x} teilbar! Das Ergibness ist ${i / x}`);
    }
  }
}
