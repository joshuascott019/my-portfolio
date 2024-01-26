const menuBtn = document.getElementById('menuBtn')
const closeBtn = document.getElementById('closeBtn')
const menuItems = document.querySelectorAll('.menu-item')
const navMenu = document.getElementById('menu-items')

menuBtn.addEventListener('click', () => {
    menuBtn.classList.add('hidden')
    closeBtn.classList.remove('hidden')
    navMenu.classList.remove('hidden')
})
closeBtn.addEventListener('click', () => {
    closeBtn.classList.add('hidden')
    navMenu.classList.add('hidden')
    menuBtn.classList.remove('hidden')
})
menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        closeBtn.classList.add('hidden')
        navMenu.classList.add('hidden')
        menuBtn.classList.remove('hidden')
    })
})