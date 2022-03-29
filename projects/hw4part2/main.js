const panner = document.querySelector("section.panner div.world");

let currentX = 0
let currentY = 0
let aimX = 0
let aimY = 0

document.addEventListener("mousemove", function (event) {
  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight

  const worldWidth = panner.clientWidth
  const worldHeight = panner.clientHeight

  const mouseX = event.pageX
  const mouseY = event.pageY 

  const panWidth = worldWidth - windowWidth
  const panHeight = worldHeight - windowHeight
   
  const percentageX = mouseX / windowWidth
  const percentageY = mouseY / windowHeight

  aimX = -1 * panWidth * percentageX
  aimY = -1 * panHeight * percentageY

})

const animate = function () {
  currentX += (aimX - currentX) * 0.05
  currentY += (aimY - currentY) * 0.05
  panner.style.left = currentX + 'px'
  panner.style.top = currentY  + 'px'

  requestAnimationFrame(animate)

}

animate()