const themeBtn = document.querySelector('.theme-btn');
const themeMenu = document.querySelector('.theme-menu');
const lightBtn = document.querySelector('.light-btn');
const darkBtn = document.querySelector('.dark-btn');

const systBtn = document.querySelector('.syst-btn');
const systemMenu = document.querySelector('.system-menu');


themeBtn.addEventListener('click', () => {
    themeMenu.classList.toggle('active');
})

darkBtn.addEventListener('click', () => {
    document.body.classList.add('dark-theme');
    localStorage.setItem("theme", "dark");
})

lightBtn.addEventListener('click', () => {
    document.body.classList.remove('dark-theme');
    localStorage.setItem("theme", "light");
})

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
}

systBtn.addEventListener('click', () => {
    systemMenu.classList.toggle('show');
})