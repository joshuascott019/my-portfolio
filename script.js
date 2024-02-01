const menuBtn = document.getElementById('menuBtn')
const menu = document.getElementById('nav-menu')
const menuItemList = document.getElementById('menu-items')
const menuItems = document.querySelectorAll('.menu-item')

let menuActive = false

menuBtn.addEventListener('click', () => {
    if (menuActive === false) {
        menu.classList.add('active')
        menuItemList.classList.add('active')
        menuBtn.classList.remove('fa-bars')
        menuBtn.classList.add('fa-circle-xmark')
        menuActive = true
        document.body.style.overflow = 'hidden'
        console.log(menuActive);
    } else {
        menu.classList.remove('active')
        menuItemList.classList.remove('active')
        menuBtn.classList.remove('fa-circle-xmark')
        menuBtn.classList.add('fa-bars')
        menuActive = false
        document.body.style.overflow = 'visible'
        console.log(menuActive);
    }
})

menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        menu.classList.remove('active')
        menuItemList.classList.remove('active')
        menuBtn.classList.remove('fa-circle-xmark')
        menuBtn.classList.add('fa-bars')
        menuActive = false
        document.body.style.overflow = 'visible'
        console.log(menuActive)
    })
})
