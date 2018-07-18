const config = {
  apiKey: "AIzaSyDfyJ-7jBUjMH1zE7sCopkci1_5djmtwf4",
  authDomain: "project1-272727.firebaseapp.com",
  databaseURL: "https://project1-272727.firebaseio.com",
  projectId: "project1-272727",
  storageBucket: "project1-272727.appspot.com",
  messagingSenderId: "984818879513"
};
firebase.initializeApp(config);


// Registro de Usuarios Nuevos
let registerNew = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(() => {
    check();
  })
  .catch((error) => {
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    alert('Error al Registrar! verifica que los datos ingresados sean válidos')
    alert(errorCode);
    alert(errorMessage);
  })
}

// Inicio de sesión de usuario existente
let login = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
    let errorCode = error.code;
    let errorMessage = error.message;
  })
}

// Validación de autenticación de usuarios
const validation = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      let displayName = user.displayName;
      console.log(user);
      let email = user.email;
      let emailVerified = user.emailVerified;
      console.log(emailVerified);
      let photoURL = user.photoURL;
      let isAnonymous = user.isAnonymous;
      let uid = user.uid;
      let providerData = user.providerData;
    } 
    if (user.emailVerified) {
      console.log('usuario validó email correctamente');
      window.location.href = 'timeline.html';
    } else {
      alert('Por favor valida tu correo');
      //hacer un modal
    }   
  });
}


// Login con Google
const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  provider.addScope('https://www.googleapis.com/auth/plus.login');
  
  firebase.auth().signInWithPopup(provider).then((result) => {
    const token = result.credential.accessToken;
    // Información de usuario
    const userData = result.user;
    console.log(userData);
    window.location.href = 'timeline.html';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
      console.log(errorMessage);  
  });
}

// Validación de correo al usuario
const check = () => {
  const user = firebase.auth().currentUser;
  user.sendEmailVerification().then(() => {
    console.log('Enviando correo');
  }).catch((error) => {
    console.log(error);
  });
}

// funcion para cerrar sesion
const signOut = () => {
  firebase.auth().signOut().then(() => {
    console.log('Sesión finalizada')
    }).catch((error) => {
     console.log(error);
  });
}

// Login con Facebook
const loginFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  provider.setCustomParameters({
    'display' : 'popup'
  });
 
  firebase.auth().signInWithPopup(provider)
    .then((result) => { 
      console.log('Login con facebook')
      const token = result.credential.accessToken;
      const user = result.user;
      console.log(user)
      window.location.href = 'timeline.html';   
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
      console.log(error.email);
      console.log(error.credential);
  });
}


// ***************************************************
// ***************************************************

// // Agregamos un registro en formato JSON para nuestro directorio.
// function agregarUserBD(uid, name) {
//   const conectados = userConect.push({
//     uid: uid,
//     name: name
//   });
//   conectKey= conectado.key;
// }

// function eliminarUserBD(){
//   database.ref("/user/"+conectKey).remove();
// }

// cerrarSesion.addEventListener('click',eliminarUserBD);

// function inicializarFire() {
//   // body...
//   firebase.auth().onAuthStateChanged(function (userData) {
//     if (userData) {
//       const displayName = userData.displayName;
//       const userPhoto = userData.photoURL;
//       const userEmail = userData.email;
//       userName.textContent = displayName;
//       if (userPhoto) {
//         userImage.style.backgroundImage = "url(" + userPhoto + ")";
//       } else {
//         userImage.style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2000px-User_icon_2.svg.png)";
//       }
//       userConect = database.ref("/user");
//       agregarUserBD(userData.uid.userData.displayName);

//       userConect.on('child_added', function (data) {
//         console.log("Ha ingresado a la sala " + data.val().name);
//       });
//       userConect.on('child_removed', function(data){
//         console.log(data.val().name+" Ha Cerrado Sesion");
//       })
//       userName.textContent = displayName;
//       userNameEmail.textContent = userEmail;
//       console.log(userData);
//     }
//   });
// }
