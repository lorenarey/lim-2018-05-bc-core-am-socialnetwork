const outButton = document.getElementById('signOut');
const publicButton = document.getElementById('buttonPost');
const selectPrivacy = document.getElementById('privacy');
const publications = document.getElementById('publications');

// Inicializando el side-nav
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});
    

outButton.addEventListener('click', () => {
  signOut();
  window.location.href = 'index.html';
});

publicButton.addEventListener('click', () => {
  let userId = firebase.auth().currentUser.uid;
  firebase.database().ref('/users/' + userId).once('value')
    .then((user) => {
    const nameUser = (user.val().username);
    let newPost = document.getElementById('post').value;
    let state = selectPrivacy.value;
    if (selectPrivacy.value != '0' && validationPublicPost(newPost)) {
      writeNewPost(userId, nameUser, newPost, state);
      printPost();
      document.getElementById('post').value = '';
      document.getElementById('privacy').value = '0';
  } else {
    alert('Selecciona privacidad y/o escribe un mensaje');
  }
})
})
