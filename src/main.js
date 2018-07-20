const emailButton = document.getElementById('emailButton');
const faceButton = document.getElementById('faceButton');
const googleButton = document.getElementById('googleButton');
const registerButton = document.getElementById('register');
const loginButton = document.getElementById('loginButton');
const formButton = document.getElementById('formButton');
const formRegister = document.getElementById('formRegister');
const formSesion = document.getElementById('formSesion');
let errorEmail = document.getElementById('error-email');
let errorEmail2 = document.getElementById('error-email2');
let errorPassword = document.getElementById('error-password');
let errorPassword2 = document.getElementById('error-password2');
const optionEmail = document.getElementById('optionEmail');
const rButton = document.getElementById('optionR');
const sButton = document.getElementById('optionS');
const outButton = document.getElementById('signOut');
const formTimeline = document.getElementById('formTimeline');
// *******************************************************
let email2 = document.getElementById('email2');
let password2 = document.getElementById('password2');
const cerrarSesion=document.getElementById('cerrar');
let nameUser = document.getElementById('nameUser');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirPassword = document.getElementById('confirPassword');

// cerrarSesion.addEventListener('click',eliminarUserBD);
// const errorNameUser = document.getElementById('error-nameUser');

emailButton.addEventListener('click', () => {
  formButton.classList.add('hidden');
  optionEmail.classList.remove('hidden');
})

rButton.addEventListener('click', () => {
  formRegister.classList.remove('hidden');
  optionEmail.classList.add('hidden');
})

sButton.addEventListener('click', () => {
  formSesion.classList.remove('hidden');
  optionEmail.classList.add('hidden');
})

registerButton.addEventListener('click', () => {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  
  if (email == ''){
    errorEmail.textContent = "Ingrese Correo";
    errorPassword.textContent = "IngresePassword";
  }else {
    registerNew(email, password);
    
    alert('Tu usuario ha sido registrado! \nConfirma el mensaje de verificación en tu correo y seguidamente puedes Iniciar Sesión')
    console.log(email);
    console.log(password);
    
    formRegister.style.display = 'none';
    formSesion.style.display = 'block';  
  }  
});

loginButton.addEventListener('click', () => {
  let email2 = document.getElementById('email2').value;
  let password2 = document.getElementById('password2').value;
  login(email2, password2);
  validation();
});

googleButton.addEventListener('click', (e) => {
  if (e.target) {
    loginGoogle();
  }
});

faceButton.addEventListener('click', (e) => {
  if (e.target) {
    loginFacebook()
  }
});

