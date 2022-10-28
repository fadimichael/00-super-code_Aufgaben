const text = "Sam is good at codingschool";

console.log(text.replace("good", "bad").replace("codingschool", "school"));
console.log(text.replace("Sam", "Susi").replace("codingschool", "school"));
console.log(text.replace("codingschool", "tennis"));

var1 = text.replace("good", "bad").replace("codingschool", "school");
var2 = text.replace("Sam", "Susi").replace("codingschool", "school");
var3 = text.replace("codingschool", "tennis");

document.write(var1 + "<br>" + var2 + "<br>" + var3);
