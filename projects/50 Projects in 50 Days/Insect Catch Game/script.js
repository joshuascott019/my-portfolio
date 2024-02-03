const screens = document.querySelectorAll('.screen')
const chooseInsectButtons = document.querySelectorAll('.choose-insect-btn')
const startButton = document.getElementById('start-btn')
const gameContainer = document.getElementById('game-container')
const timeElement = document.getElementById('time')
const scoreElement = document.getElementById('score')
const messageElement = document.getElementById('message')
let seconds = 0
let score = 0
let selectedInsect = {}

startButton.addEventListener('click', () => screens[0].classList.add('up'))

chooseInsectButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')
        selectedInsect = { src, alt }
        screens[1].classList.add('up')
        setTimeout(createInsect, 1000)
        startGame()
    })
})

function startGame() {
    setInterval(increaseTime, 1000)
    setInterval(updateBugs, 100)
}

function updateBugs() {
    const bugs = document.querySelectorAll('.insect')
    if (bugs.length > 0) {
        bugs.forEach(bug => {
            if (bug.classList.contains('active') === false) {
                const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
                bug.classList.add('active')
                bug.firstChild.classList.add('wiggleBug')
                const rect = bug.getBoundingClientRect()
                const currX = Math.floor(rect.left)
                const currY = Math.floor(rect.top)
                const newX = getRandom(200, window.innerWidth - 200)
                const newY = getRandom(200, window.innerHeight - 200)
                bug.style.left = `${newX}px`
                bug.style.top = `${newY}px`
                const deg = angle(newX, newY, currX, currY)
                bug.style.transform = `rotate(${deg}deg)`
                // console.log(`X:${currX}/${newX}, Y:${currY}/${newY}`);
                setTimeout(() => bug.firstChild.classList.remove('wiggleBug'), 2000)
                setTimeout(() => bug.classList.remove('active'), 3000)
            }
        })
    }
}

function angle(cx, cy, ex, ey) {
    var dy = ey - cy;
    var dx = ex - cx;
    var theta = Math.atan2(dy, dx); // range (-PI, PI]
    theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
    //if (theta < 0) theta = 360 + theta; // range [0, 360)
    return theta;
}




function calcRotation(ax, ay, bx, by) {
    var cy = by - ay
    var cx = bx - ax
    var theta = Math.atan2(cy, cx)
    theta *= 180 / Math.PI
    return theta
}

function increaseTime() {
    let m = Math.floor(seconds / 60)
    let s = seconds % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    timeElement.innerHTML = `Time: ${m}:${s}`
    seconds++
}

function createInsect() {
    const insect = document.createElement('div')
    insect.classList.add('insect')
    const { x, y } = getRandomLocation()
    insect.style.top = `${y}px`
    insect.style.left = `${x}px`
    // insect.innerHTML = `<img src="${selectedInsect.src}" alt="${selectedInsect.alt}" style="transform: rotate(${Math.random() * 360}deg)" draggable="false"/>`
    insect.innerHTML = `<img src="${selectedInsect.src}" alt="${selectedInsect.alt}" draggable="false"/>`
    insect.addEventListener('click', catchInsect)
    gameContainer.appendChild(insect)
}

function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100
    return { x, y }
}

function catchInsect() {
    increaseScore()
    this.remove()
    // this.classList.add('caught')
    // setTimeout(() => this.remove(), 2000)
    addInsects()
}

function addInsects() {
    setTimeout(createInsect, 1000)
    setTimeout(createInsect, 1500)
}

function increaseScore() {
    score++
    if (score > 19) {
        messageElement.classList.add('visible')
    }
    scoreElement.innerHTML = `Score: ${score}`
}