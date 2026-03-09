const boutonCt = document.querySelector('.contact-btn');
const menuCt = document.querySelector('.menu-contacts');

boutonCt.addEventListener('click', () => {
    menuCt.classList.toggle('active');
})

let navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 70) {
        navbar.classList.add('navbar2')
    } else {
        navbar.classList.remove('navbar2')
    }
})