const boutonCt = document.querySelector('.contact-btn');
const menuCt = document.querySelector('.menu-contacts');
const boutonLk = document.querySelector('.menu-links-btn');
const menuLk = document.querySelector('.menu-links');

boutonCt.addEventListener('click', () => {
    menuCt.classList.toggle('active');
})

boutonLk.addEventListener('click', () => {
    menuLk.classList.toggle('deplie');
})

let navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 70) {
        navbar.classList.add('navbar2')
    } else {
        navbar.classList.remove('navbar2')
    }
})