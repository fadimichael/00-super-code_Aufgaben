// const body = document.querySelector("body");

// fetch("https://picsum.photos/v2/list")
//   .then((response) => response.json())
//   // .then((response) => console.log(response));
//   .then((data) =>
//     data.forEach((objectItem) => {
//       let autorName = objectItem.author;
//       let autorUrl = objectItem.download_url;
//       let figure = document.createElement("figure");
//       let imgSrc = document.createElement("img");
//       let figCaptions = document.createElement("figcaption");
//       imgSrc.src = autorUrl;
//       figCaptions.innerHTML = autorName;
//       figure.appendChild(imgSrc);
//       figure.appendChild(figCaptions);
//       body.appendChild(figure);
//     })
//   );

let apiKey = "630e5fd0b9bc17119f180d0fbedc4d97";
fetch(
  "http://api.openweathermap.org/geo/1.0/direct?q=berlin&appid=630e5fd0b9bc17119f180d0fbedc4d97"
)
  .then((response) => response.json())
  .then((data) => console.log(data));
