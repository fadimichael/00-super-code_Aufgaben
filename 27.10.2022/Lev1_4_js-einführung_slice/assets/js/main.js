const A = "Susi is going to codingschool";

console.log(A.slice(0, 4));
console.log(A.slice(5, 7));
console.log(A.slice(5, 16) + " " + A.slice(-6));
console.log(A.slice(-6));
console.log(A.slice(0, 7) + " " + A.slice(-6));

let var1 = A.slice(0, 4);
let var2 = A.slice(5, 7);
let var3 = A.slice(5, 16) + " " + A.slice(-6);
let var4 = A.slice(-6);
let var5 = A.slice(0, 7) + " " + A.slice(-6);

document.write(
  var1 + "<br>" + var2 + "<br>" + var3 + "<br>" + var4 + "<br>" + var5
);
