const text = "Susi is back from codingschool";

console.log(text.substring(4, 0));
console.log(text.substring(5, 7));
console.log(text.substring(24, 30));
console.log(text.substring(0, 7) + " " + text.substring(24, 30));

let var1 = text.substring(0, 4);
let var2 = text.substring(5, 7);
let var3 = text.substring(24, 30);
let var4 = text.substring(0, 7) + " " + text.substring(24, 30);

document.write(var1 + "<br>" + var2 + "<br>" + var3 + "<br>" + var4);
