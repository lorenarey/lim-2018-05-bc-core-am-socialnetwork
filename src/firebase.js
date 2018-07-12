// Iniciando Firebase
let config = {
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
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
    })
}

// Inicio de sesión de usuario existente
let login = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        let errorCode = error.code;
        let errorMessage = error.message;
    })
}


// firebase.auth().createUserWithEmailAndPassword(email, password)
//     .catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   if (errorCode == 'auth/weak-password') {
//     alert('The password is too weak.');
//   } else {
//     alert(errorMessage);
//   }
//   console.log(error);
// });


let validation = () => {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          let displayName = user.displayName;
          let email = user.email;
          let emailVerified = user.emailVerified;
          let photoURL = user.photoURL;
          let isAnonymous = user.isAnonymous;
          let uid = user.uid;
          let providerData = user.providerData;
          console.log('Usuario inicio sesión');
          // ...
        } else {
          // User is signed out.
          console.log('No inició sesión');
        }
      });
}


// funcion para cerrar sesion
const signOut = () => {
    firebase.auth().signOut().then(function() {
        console.log('Sesión finalizada')
      }).catch(function(error) {
        // An error happened.
      });
}
