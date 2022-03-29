
var anythingIWant = document.body;
var isDark = false;
var darkModeButton = document.getElementById("buttonDarkMode");
darkModeButton.addEventListener("click", changeToDarkMode);

function changeToDarkMode(){
  if(isDark === true) {
    
    darkModeButton.textContent = "DARK MODE";
    anythingIWant.style.background = "radial-gradient(#88F1EA, #9198e5)";
    anythingIWant.style.color = "white" ;
    console.log("dark mode is off!");
    isDark = false;
    
} else if(isDark === false) {
  
    darkModeButton.textContent = "LIGHT MODE";
    anythingIWant.style.background = "radial-gradient(#89ACF6, #044CC4)";
    anythingIWant.style.color = "white" ;
    isDark = true;
    console.log("dark mode is on!");
}
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
   
function setRandomColor() {
    $("#colorpad").css("background", getRandomColor());
}

function increaseFontSize() {
    txt = document.getElementById('name');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize + 100) + 'px';
    // if(txt > 450 + 'px') {
    //   txt = document.getElementById('name');
    //   style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    //   currentSize = parseFloat(style);
    //   txt.style.fontSize = (currentSize) + 'px';
    // }
}

function decreaseFontSize() {
        txt = document.getElementById('name');
        style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
        currentSize = parseFloat(style);
        txt.style.fontSize = (currentSize - 100) + 'px'; 
}

function runClock() {
  
  var now = new Date()
  
  var hour = now.getHours() % 12
  var min  = now.getMinutes()
  var sec  = now.getSeconds()
  var ms   = now.getMilliseconds()
  
  var clock = document.querySelector("div.clock")
  var hourHand = clock.querySelector("div.hour")
  var minHand  = clock.querySelector("div.minute")
  var secHand  = clock.querySelector("div.second")
  
  var hourRotation = 30 * hour + (0.5 * min)
  var minRotation = 6 * min + (0.1 * sec)
  var secRotation = 6 * sec + 0.006 * ms
  
  hourHand.style.transform = "rotate(" + hourRotation + "deg)"
  minHand.style.transform = "rotate(" + minRotation + "deg)"
  secHand.style.transform = "rotate(" + secRotation + "deg)"
  
  requestAnimationFrame(runClock)
}

runClock()
