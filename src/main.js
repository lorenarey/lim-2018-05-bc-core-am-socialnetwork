const emailButton = document.getElementById('emailButton');
const faceButton = document.getElementById('faceButton');
const googleButton = document.getElementById('googleButton');
const registerButton = document.getElementById('register');
const loginButton = document.getElementById('loginButton');
const formButton = document.getElementById('formButton');
const formRegister = document.getElementById('formRegister');
const formSesion = document.getElementById('formSesion');
const errorEmail = document.getElementById('error-email');
const errorPassword = document.getElementById('error-password');
const optionEmail = document.getElementById('optionEmail');
const rButton = document.getElementById('optionR');
const sButton = document.getElementById('optionS');
//const welcomeArea = document.getElementById('post-container');

formRegister.style.display = 'none';
formSesion.style.display = 'none';
optionEmail.style.display = 'none';

emailButton.addEventListener('click', () => {
  formButton.style.display = 'none';
  optionEmail.style.display = 'block';
})

rButton.addEventListener('click', () => {
  formRegister.style.display = 'block';
  optionEmail.style.display = 'none';
})

sButton.addEventListener('click', () => {
  formSesion.style.display = 'block';
  optionEmail.style.display = 'none';
})

registerButton.addEventListener('click', () => {
  let nameUser = document.getElementById('nameUser').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
    
  if (email == ''){
    errorEmail.textContent = "Ingrese Correo";
    errorPassword.textContent = "IngresePassword";
  }else {
    let newsUser = registerNew(email, password);
    alert('Tu usuario ha sido registrado! \nConfirma el mensaje de verificación en tu correo y seguidamente puedes Iniciar Sesión')
    console.log(email);
    console.log(password);
    formRegister.style.display = 'none';
    formSesion.style.display = 'block';  
  }  
})

loginButton.addEventListener('click', () => {
  let email2 = document.getElementById('email2').value;
  let password2 = document.getElementById('password2').value;
  let userLogin = login(email2, password2);
  validation();
})

googleButton.addEventListener('click', loginGoogle());