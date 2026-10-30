const name = prompt("Enter your name: ")
// let name = "john doe"
const nameDiv = document.getElementById('user-name')

if (name !== null) {
    // console.log(`Hello, ${name}!`);
    nameDiv.innerText = name
}

const themeBtn = document.getElementById('theme-btn')
const themeMenu = document.querySelector('.theme-menu')

let isThemeMenuShowing = false

themeBtn.addEventListener('click', () => {
    if (isThemeMenuShowing) {
        themeMenu.style.display = 'none'
        isThemeMenuShowing = false
    }
    else {
        themeMenu.style.display = 'flex'
        isThemeMenuShowing = true
    }
})


const ghostBtn = document.getElementById('ghost')
const pumpkinBtn = document.getElementById('pumpkin')
const body = document.querySelector('body')
const mainImg = document.getElementById('main-img')

ghostBtn.addEventListener('click', () => {
    body.style.background = 'url("./assets/bg2.jpg") no-repeat center center fixed'
    body.style.backgroundSize = 'cover'

    mainImg.src = './assets/ghost2.png'
})

pumpkinBtn.addEventListener('click', () => {
    body.style.background = 'url("./assets/bg.jpg") no-repeat center center fixed'
    body.style.backgroundSize = 'cover'

    mainImg.src = './assets/pumpkin.png'
})