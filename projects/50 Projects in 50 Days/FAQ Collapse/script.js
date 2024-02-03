const btn = document.querySelectorAll('.faq-toggle')

btn.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentNode.classList.toggle('active')
    })
})