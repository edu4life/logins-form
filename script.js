const loginForm = document.querySelector('.form.login');
const registerForm = document.querySelector('.form.register');


document.getElementById('showRegister').onclick = () => {
loginForm.classList.remove('active');
registerForm.classList.add('active');
};


document.getElementById('showLogin').onclick = () => {
registerForm.classList.remove('active');
loginForm.classList.add('active');
};


loginForm.classList.add('active'); // Show login first