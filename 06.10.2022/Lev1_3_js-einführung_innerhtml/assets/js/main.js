// id="gallery

let img1 = '<img src="./assets/imgs/aliya-amangeldi-P_gB8h6znSQ-unsplash.jpg">';
let img2 = '<img src="./assets/imgs/artem-mihailov-9-znz8eekMI-unsplash.jpg">';
let img3 = '<img src="./assets/imgs/peter-kalonji-ULzwnJiYM-8-unsplash.jpg">';

document.getElementById("gallery").innerHTML =
  "<figure>" +
  img1 +
  "<figcaption>Fig.1</figcaption></figure><figure>" +
  img2 +
  "<figcaption>Fig.2</figcaption></figure><figure>" +
  img3 +
  "<figcaption>Fig.3</figcaption></figure>";
