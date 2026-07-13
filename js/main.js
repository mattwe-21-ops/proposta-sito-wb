// Effetto Header scuro allo scroll della pagina
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Gestione Menu Mobile (Toggle Hamburger)
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = navToggle.querySelector('i');
    if(navMenu.classList.contains('active')) {
        icon.className = 'fa-solid fa-xmark';
        header.classList.add('scrolled');
    } else {
        icon.className = 'fa-solid fa-bars';
        if(window.scrollY <= 50) header.classList.remove('scrolled');
    }
});

// Chiudi il menu mobile in automatico dopo aver cliccato un link di navigazione
const navLinks = document.querySelectorAll('#nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if(window.innerWidth <= 768) {
            navMenu.classList.remove('active');
            navToggle.querySelector('i').className = 'fa-solid fa-bars';
        }
    });
});
