const themeBtn = document.querySelector('.theme-btn');
const themeMenu = document.querySelector('.theme-menu');
const lightBtn = document.querySelector('.light-btn');
const darkBtn = document.querySelector('.dark-btn');

const systBtn = document.querySelector('.syst-btn');
const systemMenu = document.querySelector('.system-menu');


themeBtn.addEventListener('click', () => {
    afficherBref(themeMenu);
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
    afficherBref(systemMenu);
})

// Fermer le sous-menu avec la touche Échap
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        close(themeMenu);
        close(systemMenu);
    }
});

// Fermer le sous-menu en cliquant ailleurs
document.addEventListener('click', function (e) {
    if (!themeBtn.contains(e.target)) {
        close(themeMenu);
    }
    if (!systBtn.contains(e.target)) {
        close(systemMenu);
    }
});

function close(menu) {
    menu.classList.remove('show');
}
function afficherBref(menu) {
    menu.classList.toggle('show');
}