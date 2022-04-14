// let t = 0; // time variable
// const yaxis = 1;
// const xaxis = 2;
// let b1, b2, c1, c2;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   noStroke();
//   fill(0, 0, 200);

//   b1 = color(255);
//   b2 = color(0);
//   c1 = color(204, 102, 0);
//   c2 = color(0, 102, 153);
  

// }

// function draw(){
//   setGradient(50, 90, 540, 80, c1, c2, Y_AXIS);
//   setGradient(50, 190, 540, 80, c2, c1, X_AXIS);
// }

// function setGradient(x, y, w, h, c1, c2, axis) {
//   noFill();

//   if (axis === X_AXIS) {
//     // Left to right gradient
//     for (let i = x; i <= x + w; i++) {
//       let inter = map(i, x, x + w, 0, 1);
//       let c = lerpColor(c1, c2, inter);
//       stroke(c);
//       line(i, y, i, y + h);
//     }
//   }
// }

// function draw() {
//   background(10, 10); // translucent background (creates trails)

//   // make a x and y grid of ellipses
//   for (let x = 0; x <= width; x = x + 30) {
//     for (let y = 0; y <= height; y = y + 30) {
//       // starting point of each circle depends on mouse position
//       const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
//       const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
//       // and also varies based on the particle's location
//       const angle = xAngle * (x / width) + yAngle * (y / height);

//       // each particle moves in a circle
//       const myX = x + 20 * cos(2 * PI * t + angle);
//       const myY = y + 20 * sin(2 * PI * t + angle);

//       ellipse(myX, myY, 10); // draw particle
//     }
//   }

//   t = t + 0.01; // update time
// }

function setup() {
  resizeCanvas(windowWidth, windowHeight);
  background("white");
}

function draw() {
  var d = random(0, 255);
  var e = random(0, 255);
  var f = random(0, 255);
  fill(d,e,f);
  noStroke();
  var size = random(0, 200);
  ellipse(mouseX, mouseY, size, size);
}

