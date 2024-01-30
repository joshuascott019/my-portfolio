const menuBtn = document.getElementById('menuBtn')
const closeBtn = document.getElementById('closeBtn')
const menuItems = document.querySelectorAll('.menu-item')
const navMenu = document.getElementById('menu-items')

menuBtn.addEventListener('click', () => {
    menuBtn.classList.add('hidden')
    closeBtn.classList.remove('hidden')
    navMenu.style.display = 'flex'
})
closeBtn.addEventListener('click', () => {
    closeBtn.classList.add('hidden')
    navMenu.style.display = 'none'
    menuBtn.classList.remove('hidden')
})
menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        closeBtn.classList.add('hidden')
        navMenu.style.display = 'none'
        menuBtn.classList.remove('hidden')
    })
})