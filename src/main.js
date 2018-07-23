const faceButton = document.getElementById('faceButton');
const googleButton = document.getElementById('googleButton');
const registerButton = document.getElementById('registerButton');
const loginButton = document.getElementById('loginButton');
const formInicio = document.getElementById('formInicio');
const formRegister = document.getElementById('formRegister');
const registerLink = document.getElementById('registerLink');
const emailLogin = document.getElementById('email-login');
const passwordLogin = document.getElementById('password-login');
const updatePassword = document.getElementById('update-password');

formInicio.classList.remove('hidden');
//optionEmail.classList.add('hidden');
formRegister.classList.add('hidden');
// formSesion.classList.add('hidden');

registerLink.addEventListener('click', () => {
  formInicio.classList.add('hidden');
  formRegister.classList.remove('hidden');
})

// registerLink.addEventListener('click', () => {
//   formRegister.classList.remove('hidden');
//   optionEmail.classList.add('hidden');
// })

// sButton.addEventListener('click', () => {
//   formSesion.classList.remove('hidden');
//   optionEmail.classList.add('hidden');
// })

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
    
    formRegister.classList.add('hidden');
    formInicio.classList.remove('hidden');  
  }  
});

loginButton.addEventListener('click', () => {
  login(emailLogin.value, passwordLogin.value);
  validation();
});

updatePassword.addEventListener('click', () => {
  resetPassword(emailLogin.value);
  alert('Se envió correo para el cambio de contraseña')
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

