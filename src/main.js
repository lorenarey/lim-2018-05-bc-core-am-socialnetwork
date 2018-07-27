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
const confirPassword = document.getElementById('confirPassword');


formInicio.classList.remove('hidden');
//optionEmail.classList.add('hidden');
formRegister.classList.add('hidden');
// formSesion.classList.add('hidden');

registerLink.addEventListener('click', () => {
  formInicio.classList.add('hidden');
  formRegister.classList.remove('hidden');
})

// ***************** en Proceso ************************
registerButton.addEventListener('click', () => {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  
  if (validationRegisterUser(nameUser.value,email.value,password.value,confirPassword.value)){
    // mistakeEmail.textContent = "Ingrese Correo";
    // mistakePassword.textContent = "IngresePassword";

    registerNew(email, password);    
    alert('Tu usuario ha sido registrado! \nConfirma el mensaje de verificación en tu correo y seguidamente puedes Iniciar Sesión')
    // console.log(email);
    // console.log(password);
    
    formRegister.classList.add('hidden');
    formInicio.classList.remove('hidden');  
 
}
});
// **************************************************

// *********** OK
loginButton.addEventListener('click', () => {

if (isValidLogin(emailLogin.value, passwordLogin.value)){
  login(emailLogin.value, passwordLogin.value);
  validation();
} else {
  alert ('email y/o pasword incorrecto');
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

/****barra menu ****/
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});