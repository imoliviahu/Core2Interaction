
// function setup() {
//     createCanvas(windowWidth, windowHeight);
//     background("NavajoWhite");
//   }

// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
//     background("NavajoWhite");
//   }


//   let slider;

//   function setup() {
//     //create a variable for canvas so that we can reference it for positioning later
//     let canvas = createCanvas(windowWidth, windowHeight);
//     //you can specify the position of your element like this. it's best to do most positioning in CSS, but here I'm setting it to the top
//     canvas.position(0, 0);
//     //you can add a CSS class to something by putting .class after it
//     canvas.class("container");
//     //set the variable to the createSlider function. createSlider values are: minimum, maximum, starting value.
//     slider = createSlider(10, 1000, 0);
//     slider.class("slider");
//   }
//   function draw() {
//     background("PapayaWhip");
  
//     fill("Gold");
//     //set the width and height of the ellipse using slider.value
//     ellipse(windowWidth/2, windowHeight/2, slider.value(), slider.value());
  
//   }

// let bgcolor;
// //create variable for input
// let input;

// function setup() {
//   let canvas = createCanvas(windowWidth, windowHeight);
//   frameRate(15);
//   canvas.position(0, 0);
//   canvas.class("container");

//   //create a random fill
//   bgcolor = {r: 0, g: 255, b:255};
//   bgcolor.r = random(0, 255);
//   bgcolor.g = random(0, 255);
//   bgcolor.b = random(0,255);

//   //create a div for our value
//   // birthday = createDiv("Your birthday");
//   // birthday.class("birthday");

//   //create input
//   input = createInput("whats your bday");
//   //adds a class to the input
//   input.class("input");

// }


// function draw() {
//   background(bgcolor.r,bgcolor.g,bgcolor.b);
//   //target the HTML value of our variable birthday, and set the contents to be the value of our variable input
//   // birthday.html(input.value());

//   for (let i = 0; i < 320; i++) {
//       push();
//       fill(random(255), bgcolor.g, bgcolor.b);
//       translate(random(width), random(height));
//       rotate(random(5 * HALF_PI));
//       textSize(20);
//       text(input.value(), 20, 0);
//       pop();
//     }

// }
  

function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
  
  let circleBgcolor = {r: 255, g: 0, b:255};
  
  
  function circleColor() {
    circleBgcolor.r = random(0, 255);
    circleBgcolor.g = random(0, 255);
    circleBgcolor.b = random(0, 255);
  }
  
  
  function draw() {
    noStroke();
    fill(circleBgcolor.r,circleBgcolor.g,circleBgcolor.b);
    ellipse(mouseX, mouseY, 90, 20);
  }
  
  function mousePressed() {
    clear();
    circleColor();
  }