const text = "Sam is going to codingschool";

console.log(
  text.slice(0, 3).toUpperCase() +
    " " +
    text.slice(4, 15) +
    " " +
    text.slice(-6).toUpperCase()
);

var1 = text.slice(0, 16).toUpperCase() + text.slice(-6).toUpperCase();

var2 = text.slice(0, 16).toLowerCase() + text.slice(-6).toLowerCase();

var3 =
  text.slice(0, 3).toUpperCase() +
  " " +
  text.slice(4, 15) +
  " " +
  text.slice(-6).toUpperCase();

var4 =
  text.slice(0, 3).toLocaleLowerCase() +
  " " +
  text.slice(4, 15).toUpperCase() +
  " " +
  text.slice(-6).toLocaleLowerCase();

var5 =
  text.charAt(0).toUpperCase() +
  "am " +
  text.charAt(4).toUpperCase() +
  "s " +
  text.charAt(7).toUpperCase() +
  "oing " +
  text.charAt(13).toUpperCase() +
  "o " +
  text.slice(-6).charAt(0).toUpperCase() +
  "chool";

document.write(
  var1 + "<br>" + var2 + "<br>" + var3 + "</br>" + var4 + "<br>" + var5
);
