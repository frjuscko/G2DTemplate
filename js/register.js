const slides = document.querySelector('.slides');
const next = document.querySelector('.next');
const preview = document.querySelector('.preview');
const pass = document.getElementById('pass');
const password = document.getElementById('password');
const submit = document.querySelector('.reg');

desactiver(submit);

next.addEventListener('click', () =>{
    slides.style.transform = 'translateX(-100%)';
})

preview.addEventListener('click', () =>{
    slides.style.transform = 'translateX(0)';
})

pass.addEventListener('blur', () => {
    if (password.value === pass.value) {
        activer(submit);
    } else {
        alert('Les mots de passe ne correspondent pas !');
        pass.value = "";
    }
})

function desactiver(btn) {
    btn.disabled = true;
    btn.style.background = '#0d6dfd77';
}

function activer(btn) {
    btn.disabled = false;
    btn.style.background = '#0d6efd';
}