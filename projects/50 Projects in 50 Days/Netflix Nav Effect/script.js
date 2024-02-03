const openButton = document.querySelector('.open-btn')
const closeButton = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')

openButton.addEventListener('click', () => nav.forEach(navEl => navEl.classList.add('visible')))
closeButton.addEventListener('click', () => nav.forEach(navEl => navEl.classList.remove('visible')))