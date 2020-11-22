const windowWidth = document.documentElement.scrollWidth
const windowHeight = document.documentElement.scrollHeight

const image = document.getElementById("image")

function randImage() {
    image.style.display = 'block'
    image.style.left = Math.floor(Math.random() * windowWidth) + "px"
    image.style.top = Math.floor(Math.random() * windowHeight) + "px"
}

let click = 0;

image.addEventListener("click", () => {
    click++
    
    const cont = document.querySelector("#cont")
    cont.innerHTML = click

    image.style.display = 'none'
})

window.setInterval(randImage, 2000)