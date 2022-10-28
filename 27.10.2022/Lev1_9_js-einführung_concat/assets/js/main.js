const text1 = "Sam is going to codingschool";
const text2 = "Susi";
const text3 = "programming bike";
const text4 = "and";

var1 =
  text1.slice(0, 16) +
  text1.slice(-6) +
  " " +
  text4 +
  text4.replace("and", " movie theater");

var2 = var1.slice(0, 16) + var1.slice(-13);

var3 =
  text2 +
  " " +
  text4 +
  " " +
  text1.slice(0, 4) +
  text4.replace("and", "are") +
  " " +
  text1.slice(7, 16) +
  text1.slice(-6);

var4 =
  var3.replace("school", "gym ") +
  text4 +
  text4.replace("and", " to movie theater");

var5 = var1.replace("Sam", "Susi");

document.write(
  var1 + "<br>" + var2 + "<br>" + var3 + "<br>" + var4 + "<br>" + var5
);
