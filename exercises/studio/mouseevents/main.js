 
// // EXAMPLE 1 Create a 16 by 16 grid
// let wrapper = document.querySelector(".wrapper");

// for (let i = 0; i < 16 * 16; i++) {
//   let newDiv = document.createElement("div");
//   newDiv.classList.add("pixel");
//   wrapper.appendChild(newDiv);
// }

// // EXAMPLE 2 Translate Input to Output
// let wrapper = document.querySelector(".wrapper");

// for (let i = 0; i < 16 * 16; i++) {
//   let newDiv = document.createElement("div");
//   newDiv.classList.add("pixel");

//   newDiv.addEventListener("click", function(){
//     newDiv.style.backgroundColor = "blue";
//   });

//   wrapper.appendChild(newDiv);
// }

// EXAMPLE 3 Change fill to random color

// let wrapper = document.querySelector(".wrapper");

// for (let i = 0; i < 16 * 16; i++) {
//   let newDiv = document.createElement("div");
//   let valueR = Math.floor(Math.random() * 255);
//   let valueG = Math.floor(Math.random() * 255);
//   let valueB = Math.floor(Math.random() * 255);
//   console.log(valueR , valueG , valueB);


//   newDiv.classList.add("pixel");

//   newDiv.addEventListener("click", function(){
//     newDiv.style.backgroundColor = "rgb(" + valueR + "," + valueG + "," + valueB + ")";
//   });

//   wrapper.appendChild(newDiv);
// }

// EXAMPLE 4 Add in drawing option

// let wrapper = document.querySelector(".wrapper");

// for (let i = 0; i < 16 * 16; i++) {
//   let newDiv = document.createElement("div");
//   let valueR = Math.floor(Math.random() * 255);
//   let valueG = Math.floor(Math.random() * 255);
//   let valueB = Math.floor(Math.random() * 255);

// // create a boolean to check if we are drawing the mouse down
//   let isPainting = false;

//   console.log(valueR , valueG , valueB);


//   newDiv.classList.add("pixel");

// // change event to mousedown
//   newDiv.addEventListener("mousedown", function(){
//     //change ispainting value to true
//     isPainting = true;
//     newDiv.style.backgroundColor = "rgb(" + valueR + "," + valueG + "," + valueB + ")";
//   });

// //new event listener to view if mouse is entering an element
//   newDiv.addEventListener("mouseenter", function(){
//       newDiv.style.backgroundColor = "rgb(" + valueR + "," + valueG + "," + valueB + ")";

//   });

//   wrapper.appendChild(newDiv);
// }

// EXAMPLE 5 Add in drawing functionality only when holding down mouse


// let wrapper = document.querySelector(".wrapper");

// // create a boolean to check if we are drawing the mouse down
//   let isPainting = false;

// for (let i = 0; i < 16 * 16; i++) {
//   let newDiv = document.createElement("div");
//   let valueR = Math.floor(Math.random() * 255);
//   let valueG = Math.floor(Math.random() * 255);
//   let valueB = Math.floor(Math.random() * 255);


//   console.log(valueR , valueG , valueB);


//   newDiv.classList.add("pixel");

// // change event to mousedown
//   newDiv.addEventListener("mousedown", function(){
//     //change ispainting value to true
//     isPainting = true;
//     newDiv.style.backgroundColor = "rgb(" + valueR + "," + valueG + "," + valueB + ")";
//   });

// //new event listener to view if mouse is entering an element
//   newDiv.addEventListener("mouseenter", function(){
//       if (isPainting) {
//         newDiv.style.backgroundColor = "rgb(" + valueR + "," + valueG + "," + valueB + ")";
//       }

//   });

//   //final eventlistener
//   newDiv.addEventListener("mouseup", function(){
//     isPainting = false;
//   });

//   wrapper.appendChild(newDiv);
// }

// EXAMPLE 6 Clear Drawing

// let wrapper = document.querySelector(".wrapper");
// let clearDrawing = document.querySelector(".clearDrawing");

// // create a boolean to check if we are drawing the mouse down
//   let isPainting = false;

// for (let i = 0; i < 16 * 16; i++) {
//   let newDiv = document.createElement("div");
//   let valueR = Math.floor(Math.random() * 255);
//   let valueG = Math.floor(Math.random() * 255);
//   let valueB = Math.floor(Math.random() * 255);


//   console.log(valueR , valueG , valueB);


//   newDiv.classList.add("pixel");

// // change event to mousedown
//   newDiv.addEventListener("mousedown", function(){
//     //change ispainting value to true
//     isPainting = true;
//     newDiv.style.backgroundColor = "rgb(" + valueR + "," + valueG + "," + valueB + ")";
//   });

// //new event listener to view if mouse is entering an element
//   newDiv.addEventListener("mouseenter", function(){
//       if (isPainting) {
//         newDiv.style.backgroundColor = "rgb(" + valueR + "," + valueG + "," + valueB + ")";
//       }
//   });

//   //final eventlistener
//   newDiv.addEventListener("mouseup", function(){
//     isPainting = false;
//   });

// clearDrawing.addEventListener("click", function(){
//   newDiv.style.backgroundColor = "white";
// });

//   wrapper.appendChild(newDiv);
// }



// // EXAMPLE 1 Get Info on mouse move

// window.addEventListener("mousemove", function(event){
//   console.log(event);
//   console.log("X:" , event.pageX);
//   console.log("Y:" , event.pageY);
// });

// // EXAMPLE 2 Change position of cursor

// let myCursor = document.querySelector(".customCursor");

// window.addEventListener("mousemove", function(event){
//   console.log(event);
//   console.log("X:" , event.pageX);
//   console.log("Y:" , event.pageY);
//   console.log(myCursor);
//   myCursor.style.top = event.pageY + "px";
//   myCursor.style.left = event.pageX + "px";
// });

// // EXAMPLE 3 Change position of cursor and adjust alignment of cursor
// let myCursor = document.querySelector(".customCursor");

// window.addEventListener("mousemove", function(event){
//   console.log(event);
//   console.log("X:" , event.pageX);
//   console.log("Y:" , event.pageY);
//   console.log(myCursor);
//   //subtract half the heigth and width from each
//   myCursor.style.top = event.pageY - 50 + "px";
//   myCursor.style.left = event.pageX - 50 + "px";
// });


// // EXAMPLE 1: Click Me
// let clickDiv = document.querySelector(".clickDiv");

// clickDiv.addEventListener("click", function(event){
// //log a phrase in the console
//   console.log("Click!");
// //log the event in the console 
//   console.log(event);
// //use dot notation to grab a part of the event and log it into the console
//   console.log(event.pageX);
// });

// // EXAMPLE 2: Click Me If Statement
// let clickDiv = document.querySelector(".clickDiv");

// clickDiv.addEventListener("click", function(event){
// //log a phrase in the console
//   console.log("Click!");
// //log the event in the console 
//   console.log(event);
// //use dot notation to grab a part of the event and log it into the console
//   console.log(event.pageX);

// //create an if statement 
//   if (event.pageX < 100) {
//     clickDiv.style.backgroundColor = "magenta";
//   } else {
//     clickDiv.style.backgroundColor = "blue";
//   }
// });

// EXAMPLE 3: Click Me If Statement with Loop
// select all not just one
// let clickDiv = document.querySelectorAll(".example");


// //for each loop on the clickDiv array
// clickDiv.forEach((div) => {
//   //for each div add the event listner click and a function
//   div.addEventListener("click", function(event){
// //log a phrase in the console
//   console.log("Click!");
// //log the event in the console 
//   console.log(event);
// //use dot notation to grab a part of the event and log it into the console.
// // pageY is where in the vertical space you clicked
//   console.log(event.pageY);

// let colorDivider = document.body.clientHeight/2;
//   console.log("Color Divider:" , colorDivider);
//   //create an if statement where we check if the events vertical location is above half the page, then it will be magenta
//   // if it is lower than the half of hte page, it will be blue
//     if (event.pageY < colorDivider) {
//       div.style.backgroundColor = "magenta";
//     } else {
//       div.style.backgroundColor = "blue";
//     }
//   });

// });

// EXAMPLE 4 MOUSE ENTER EVENTS

// let hoverDiv = document.querySelector(".hoverDiv");

// hoverDiv.addEventListener("mouseover", function(event){
//   console.log("Mouse over!");
//   console.log(event);
// })

// //mouseleave event
// hoverDiv.addEventListener("mouseleave", function(event){
//   console.log("Mouse leaving!");
//   console.log(event);
// })

// EXAMPLE 5 Mouse Move Events
// let moveDiv = document.querySelector(".moveDiv");

// moveDiv.addEventListener("mousemove", function(event){
//   console.log("Mouse move!");
//   console.log(event);
// });

// EXAMPLE 6 SCROLL DIV

// let scrollDiv = document.querySelector(".scrollDiv");

// scrollDiv.addEventListener("wheel", function(event){
//   console.log("Wheel!");
//   console.log(event);
//   console.log(event.deltaY);
// });