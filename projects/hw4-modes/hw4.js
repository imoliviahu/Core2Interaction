console.log(100 - 500);

var anythingIWant = document.body;
var isDark = false;

// console.log(anythingIWant.style.lineHeight);


var random = Math.random();


var darkModeButton = document.getElementById("buttonDarkMode");
darkModeButton.addEventListener("click", changeToDarkMode);
// console.log(darkModeButton);

function changeToDarkMode(){
  if(isDark === true) {
    
    darkModeButton.textContent = "DARK MODE";
    anythingIWant.style.background = "white";
    anythingIWant.style.color = "black" ;
    console.log("dark mode is off!");
    isDark = false;
    
} else if(isDark === false) {
  
    darkModeButton.textContent = "LIGHT MODE";
    anythingIWant.style.background = "black";
    anythingIWant.style.color = "white" ;
    isDark = true;
    console.log("dark mode is on!");
}
}