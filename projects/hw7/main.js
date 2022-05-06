const imageArray = [
    src="images/1.jpg",
    src="images/3.jpg",
    src="images/2.jpg",
    src="images/4.jpg",
    src="images/5.jpg",
    src="images/6.jpg",
    src="images/7.jpg",
    src="images/8.jpg"
];

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
  let randomNum = Math.floor(Math.random() * array.length); 
  image.setAttribute("src", array[randomNum]);
}