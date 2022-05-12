const imageArray = [
  src="images/flower1.png",
  src="images/flower2.png",
  src="images/flower3.png",
  src="images/flower4.png",
  src="images/flower5.png",
  src="images/flower6.png",
  src="images/flower7.png",
  src="images/flower8.png",
  src="images/flower9.png",
  src="images/flower10.png",
  src="images/flower11.png",
  src="images/flower12.png",
  src="images/flower13.png",
  src="images/flower14.png",
  src="images/flower15.png",
  src="images/flower16.png",
  src="images/flower17.png",
  src="images/flower18.png",
  src="images/flower19.png",
  src="images/flower20.png",
  src="images/flower21.png",
  src="images/flower22.png"
];

let wrapper = document.querySelector(".wrapper");
let myCursor = document.querySelector(".customCursor");

window.addEventListener("mousemove", function(event){
  console.log(event);
  console.log(myCursor);
  let newImg = document.createElement("img");
  newImg.classList.add("flower");
  var random = Math.floor(Math.random() * imageArray.length);
  newImg.src = imageArray[random];
  newImg.style.top = event.pageY - 60 + "px";
  newImg.style.left = event.pageX - 60 + "px";
  var randomWidth = Math.floor(Math.random() * 15) + "vw";
  newImg.style.width = randomWidth;
  wrapper.appendChild(newImg);

});