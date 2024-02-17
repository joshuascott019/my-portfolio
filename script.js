const menuBtn = document.getElementById('menuBtn')
const menu = document.getElementById('nav-menu')
const menuItemList = document.getElementById('menu-items')
const menuItems = document.querySelectorAll('.menu-item')
const portfolioBtn = document.getElementById('portfolio-btn')
const heroTitle = document.getElementById('hero-title')
const heroImg = document.getElementById('hero-img')
const aboutEl = document.getElementById('about-section')
const techEl = document.getElementById('tech-section')
const portfolioEl = document.getElementById('portfolio-section')
const headerEl = document.getElementById('header-section')
const mainEl = document.getElementById('main-section')

let menuActive = false

menuBtn.addEventListener('click', () => {
    if (menuActive === false) {
        menu.classList.add('active')
        menuItemList.classList.add('active')
        menuBtn.classList.remove('fa-bars')
        menuBtn.classList.add('fa-circle-xmark')
        menuActive = true
        document.body.style.overflow = 'hidden'
        // console.log(menuActive);
    } else {
        menu.classList.remove('active')
        menuItemList.classList.remove('active')
        menuBtn.classList.remove('fa-circle-xmark')
        menuBtn.classList.add('fa-bars')
        menuActive = false
        document.body.style.overflow = 'visible'
        // console.log(menuActive);
    }
})

menuItems.forEach((item) => {
    item.addEventListener('click', (e) => {
        console.log(e.target.innerText);
        if (e.target.innerText === 'Portfolio') {
            portfolioEl.classList.remove('hidden')
            heroTitle.classList.add('hidden')
            heroImg.classList.add('hidden')
            aboutEl.classList.add('hidden')
            techEl.classList.add('hidden')
            headerEl.classList.add('portfolio')
            mainEl.classList.add('portfolio')
        } else if (e.target.innerText === 'About') {
            portfolioEl.classList.add('hidden')
            heroTitle.classList.remove('hidden')
            heroImg.classList.remove('hidden')
            aboutEl.classList.remove('hidden')
            techEl.classList.remove('hidden')
            headerEl.classList.remove('portfolio')
            mainEl.classList.remove('portfolio')
        }
        menu.classList.remove('active')
        menuItemList.classList.remove('active')
        menuBtn.classList.remove('fa-circle-xmark')
        menuBtn.classList.add('fa-bars')
        menuActive = false
        document.body.style.overflow = 'visible'
        // console.log(menuActive)
    })
})
