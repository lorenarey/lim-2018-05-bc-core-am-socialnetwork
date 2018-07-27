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

const mistakeUserName = document.getElementById('mistake-userName');
const mistakeEmail = document.getElementById('mistake-email');
const mistakePassword = document.getElementById('mistake-password');
const mistakeConfirPassword = document.getElementById('mistake-confirPassword');
const nameUser = document.getElementById('nameUser');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirPassword = document.getElementById('confirPassword')
const validInputs = document.getElementById('valid-inputs');
const validInputs2 = document.getElementById('valid-inputs2');

//formInicio.classList.remove('hidden');
//formRegister.classList.add('hidden');

registerLink.addEventListener('click', () => {
  formRegister.classList.remove('hidden');
  formInicio.classList.add('hidden');
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
  if (isValidLogin(emailLogin.value, passwordLogin.value)) {
    login(emailLogin.value, passwordLogin.value);
    validation();

  } else {
    validInputs2.innerHTML = 'email y/o pasword incorrecto';
  }
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
