const background = document.getElementById('background')
const password = document.getElementById('password')

password.addEventListener('input', () => {
    const passwordLength = password.value.length
    background.style.filter = `blur(${20 - (passwordLength * 2)}px)`
})