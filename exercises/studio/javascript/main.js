// let navElement = document.querySelector(".nav");
// let headline = document.querySelector("h1");
// headline.classList.add("other")
// navElement.classList.add("special");

// let body = document.body;

// function turnOnLight() {
//   body.classList.toggle("light");
//   button.classList.toggle("buttonOn");
// }

// let button = document.querySelector(".button");
// button.addEventListener("click", turnOnLight);


let body = document.body;
let headline = document.querySelector("h1");
let headlines = document.querySelectorAll("h1");

console.log(headline);
console.log(headlines);

// uses forEach to loop through all of the headlines
headlines.forEach(function(headline) {
  // add an event listener to each individual headline
  headline.addEventListener('click', function (event) {
    // toggle the red class on this headline
    headline.classList.toggle("red");
  });
});