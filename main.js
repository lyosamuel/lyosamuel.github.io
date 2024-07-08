const cursorTag = document.querySelector("div.cursors")
const balls = cursorTag.querySelectorAll("div")

let aimX = 0
let aimY = 0

balls.forEach((ball, index) => {
    let currentX = 0
    let currentY = 0
    let speed = 1 - index * 0.175

    const animate = function () {
        currentX += (aimX - currentX) * speed
        currentY += (aimY - currentY) * speed
    
        ball.style.left = currentX + "px"
        ball.style.top = currentY + "px"
    
        requestAnimationFrame(animate)
    }
    
    animate()
})


document.addEventListener("mousemove", function (event) {
    aimX = event.pageX
    aimY = event.pageY
})

document.body.onmousemove = function(e) {
    document.documentElement.style.setProperty('--x', (e.clientX+window.scrollX) + 'px');
    document.documentElement.style.setProperty('--y', (e.clientY+window.scrollY) + 'px');
  }