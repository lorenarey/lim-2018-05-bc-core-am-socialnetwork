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
    .then((result) => {
      const user = result.user;
      if (user.displayName == null) {
        username = document.getElementById('nameUser').value;
      } else {
        username = user.displayName;
      }
      if (user.photoURL == null){
        picture = "https://thumbs.dreamstime.com/b/icono-del-usuario-46707697.jpg";
      } else {
        picture = user.photoURL;
      }
      saveData(user.uid, username, user.email, picture);
      check();
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    })
}

// Inicio de sesión de usuario existente
let login = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
  });
}

// Validación de autenticación de usuarios
const validation = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      let displayName = user.displayName;
      let email = user.email;
      let emailVerified = user.emailVerified;
      let photoURL = user.photoURL;
      let isAnonymous = user.isAnonymous;
      let uid = user.uid;
      let providerData = user.providerData;
    }
    if (user.emailVerified) {
      window.location.href = 'timeline.html';
    } else {
      alert('Por favor valida tu correo');
    }
  });
}

// Login con Google
const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

  firebase.auth().signInWithPopup(provider)
    .then((result) => {
    const token = result.credential.accessToken;
    // Información de usuario
    const userData = result.user;
    saveData(userData.uid, userData.displayName, userData.email, userData.photoURL);
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
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      console.log('Login con facebook')
      const token = result.credential.accessToken;
      const user = result.user;
      console.log(user)
      saveData(user.uid, user.displayName, user.email, user.photoURL);
      window.location.href = 'timeline.html';
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
      console.log(error.email);
      console.log(error.credential);
    });
}

// Registro de login en BD
const saveData = (userId, name, email, imageUrl) => {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    picture: imageUrl,
    id: userId,
  });
}

// Función para escribir nuevo post
const writeNewPost = (uid, name, textPost, state ) => {
  let postData = {
    author: name,
    id: uid,
    newPost: textPost,
    privacy: state,
    starCount: 0,
  };
  
  // Key para nueva publicación
  let postKey = firebase.database().ref().child('posts').push().key;
        
  let updates = {};
  updates['/posts/' + postKey] = postData;
  updates['/users/' + uid + '/' + postKey] = postData;
  return firebase.database().ref().update(updates);
}
