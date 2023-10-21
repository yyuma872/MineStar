let burger = document.querySelector('.header__mobile_burger')
let menu = document.querySelector('.header__mobile_menu')
let scroll = document.querySelector('body')
let close = document.querySelector('.header__mobile_close')

burger.onclick = () => {
    openMobileMenu()
}
close.onclick = () => {
    closeMobileMenu()
}

function openMobileMenu() {
    //body.style.display = 'block'
    menu.classList.add('active')
    scroll.style.overflowY = 'hidden'
}

function closeMobileMenu() {
    menu.classList.remove('active')
    scroll.style.overflowY = ''
}