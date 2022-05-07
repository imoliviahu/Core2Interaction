
// let myCursor = document.querySelector(".customCursor");

// window.addEventListener("mousemove", function(event){
//   console.log(event);
//   console.log("X:" , event.pageX);
//   console.log("Y:" , event.pageY);
//   console.log(myCursor);
//   myCursor.style.top = event.pageY + "px";
//   myCursor.style.left = event.pageX + "px";
// });

// EXAMPLE 3 Change position of cursor and adjust alignment of cursor
const imageArray = [
  src="images/flower1.png",
  src="images/flower2.png",
];

let myCursor = document.querySelector(".customCursor");

window.addEventListener("mousemove", function(event){
  console.log(event);
  console.log("X:" , event.pageX);
  console.log("Y:" , event.pageY);
  console.log(myCursor);
  myCursor.style.top = event.pageY - 50 + "px";
  myCursor.style.left = event.pageX - 50 + "px";
});



