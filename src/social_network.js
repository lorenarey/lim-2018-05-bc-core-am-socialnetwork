// BOTONES DEL HTML  **************************************
let btnIngresaWeb=document.getElementById("ingresa-a-web");
const divRegisterUser=document.getElementById("registra-usuario");
const divPrincipal=document.getElementById('div-principal');

btnIngresaWeb.addEventListener('click', () => { 
    divRegisterUser.classList.replace('none', 'block');
    divPrincipal.classList.replace('block','none');
});


// FUNCIONES DE FIREBASE **********************************
function registrar() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('contrasena').value;
    console.log("Datos registrados correctamente");

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function () {
             verificar();
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            console.log("******ERROR AL REGISTRAR*****");
            console.log(errorCode);
            console.log(errorMessage);
            console.log("ingrese password o user");
        });
}


function ingresar() {
    const email2 = document.getElementById('email2').value;
    const password2 = document.getElementById('contrasena2').value;

    firebase.auth().signInWithEmailAndPassword(email2, password2)
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("******ERROR AL INGRESAR*****");
            console.log(errorCode);
            console.log(errorMessage);
            console.log("ingrese password o user");
            // ...
        });
}

function observador() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log("Si existe usuario activo")
            aparecer(user);
            // User is signed in. "user es un objeto"
            var displayName = user.displayName;
            var email = user.email;
            console.log("******************");
            console.log(user.emailVerified); // True or False
            console.log("******************");

            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            // ...
        } else {
            // User is signed out.
            console.log("No existe usuario activo")
            contenido.innerHTML = `
            `;
        }
    });
}
observador();

function aparecer(user) {
    var user = user;
    const contenido = document.getElementById('contenido');
    if (user.emailVerified){
        contenido.innerHTML =`
    <div class="container mt-5">
        <div class="alert alert-success" role="alert">
        <h4 class="alert-heading">Bienvenido! ${user.email}</h4>
        <p>Bienvenida, ahora puedes empezar a compartir tu experiencia y ver las experiencias de otros usuarios. Recuerda, COMER RICO! es sinonimo de COMER SANO!</p>
        <hr>
        <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
        </div>
        <button class="btn btn-danger" id="cerrar" onclick="cerrar()">Cerrar Sesion </button>
    </div>
    `;
    }
}


function cerrar() {
    firebase.auth().signOut()
        .then(function () {
            console.log('Saliendo...');
        })
        .catch(function (error) {
            console.log(error);
        })
}

function verificar() {
    var user = firebase.auth().currentUser;
    user.sendEmailVerification().then(function () {
        console.log("Enviando correo.....")
        // Email sent.
    }).catch(function (error) {
        // An error happened.
        console.log(error)
    });
}
      // luz@hotmail.com 
      //  123@hotmail.com     123456



