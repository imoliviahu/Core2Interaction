
var darkModeButton = document.getElementById("buttonDarkMode");
darkModeButton.addEventListener("click", changeToDarkMode);
// console.log(darkModeButton);

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

// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   } 
  
//   function setRandomColor() {
//     $("#colorpad").css("background", getRandomColor());
//   }

const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.background = "#" + randomColor;
  }
  
  genNew.addEventListener("click", setBg);
  setBg();