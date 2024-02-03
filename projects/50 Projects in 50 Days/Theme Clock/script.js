const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggleDarkEl = document.querySelector('.toggle-dark')
const toggleHourFormat = document.querySelector('.toggle-hour-format')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let clock24H = 0

toggleDarkEl.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark mode'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode'
    }
})

toggleHourFormat.addEventListener('click', (e) => {
    clock24H++
    if (clock24H > 1) {
        clock24H = 0
    }
    if (clock24H === 0) {
        e.target.innerHTML = '24h Clock'
    } else {
        e.target.innerHTML = '12h Clock'
    }
    // console.log(clock24H)
})

function setTime() {
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hours12H = `${hours > 12 ? `${hours - 12}` : hours}`
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM'


    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hours12H, 0, 12, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`

    if (clock24H === 0) {
        timeEl.innerHTML = `${hours12H}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
    } else {
        timeEl.innerHTML = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`
    }
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`


}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()

setInterval(setTime, 1000)
