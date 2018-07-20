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

// const userName = document.getElementById('user-name');
// const userNameEmail = document.getElementById('user-email');
// const userImage = document.getElementById('user-image');
// const conectKey = "";
// const cerrarSesion = document.getElementById('cerrar');

rButton.addEventListener('click', event => {
  event.preventDefault();
  formRegister.classList.replace('hidden', 'show');
  formButton.classList.replace('show', 'hidden');
});

// Boton Guardar datos de Usuario Registrado
registerButton.addEventListener('click', () => { 
  validationRegisterUser();
  email = email.value;
  password = password.value;
  // validationEmailOK (email);
  // if(errorEmail.value =='incorrecto'){
  // alert('ingrese un email válido')
  // }
  registerNew(email, password);
    formRegister.style.display = 'none';
    formButton.style.display = 'block';
});

loginButton.addEventListener('click', () => {
  
  email2 = email2.value;
  password2 = password2.value;
  // validationLoginUser(email2, password2);
  let userLogin = login(email2, password2);
  validation();
});


googleButton.addEventListener('click', (e) => {
  if (e.target) {
    loginGoogle()
  }
});

faceButton.addEventListener('click', (e) => {
  if (e.target) {
    loginFacebook()
  }
});

// const outButton.addEventListener('click', () => {
//   signOut();
//   // window.location.href = 'index.html';
//   formTimeline.style.display = 'none';
//   formRegister.style.display = 'none';
//   formButton.style.display = 'block';
// });

outButton.addEventListener('click', () => {
  signOut();
  window.location.href = 'index.html';
})