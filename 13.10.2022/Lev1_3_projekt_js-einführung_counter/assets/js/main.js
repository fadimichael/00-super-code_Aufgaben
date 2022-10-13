let n = 0;
function add1() {
  n += 1;
  output = document.querySelector(".result");
  console.log(n);
  output.innerHTML = n;
}
function minus1() {
  n -= 1;
  console.log(n);
  output.innerHTML = n;
}
function add10() {
  n = n + 10;
  console.log(n);
  output.innerHTML = n;
}
function minus10() {
  n = n - 10;
  console.log(n);
  output.innerHTML = n;
}
function add100() {
  n = n + 100;
  console.log(n);
  output.innerHTML = n;
}
function minus100() {
  n = n - 100;
  console.log(n);
  output.innerHTML = n;
}
function times2() {
  n = n * 2;
  console.log(n);
  output.innerHTML = n;
}
function reset() {
  n = 0;
  console.log(n);
  output.innerHTML = n;
}
