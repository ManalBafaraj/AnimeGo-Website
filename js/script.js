const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const navToggle = document.querySelector('.nav-toggle');
const navigation = document.querySelector('.navigation');

if (registerLink && wrapper) {
    registerLink.addEventListener('click', () => {
        wrapper.classList.add('active');
    });
}

if (loginLink && wrapper) {
    loginLink.addEventListener('click', () => {
        wrapper.classList.remove('active');
    });
}

if (btnPopup && wrapper) {
    btnPopup.addEventListener('click', () => {
        wrapper.classList.add('active-popup');
    });
}

if (iconClose && wrapper) {
    iconClose.addEventListener('click', () => {
        wrapper.classList.remove('active-popup');
        wrapper.classList.remove('active');
    });
}

if (navToggle && navigation) {
    navToggle.addEventListener('click', () => {
        navigation.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}