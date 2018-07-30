const outButton = document.getElementById('signOut');
const publicButton = document.getElementById('buttonPost');
const selectPrivacy = document.getElementById('privacy');
const publications = document.getElementById('publications');
const startButton = document.getElementById('start');
const myPostButton = document.getElementById('myPost');
const search = document.getElementById('searchUsers');

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
    if (selectPrivacy.value != '0' && newPost !=  '') {
      writeNewPost(userId, nameUser, newPost, state);
      printPost();
      document.getElementById('post').value = '';
      document.getElementById('privacy').value = '0';
    } else {
      alert('Selecciona privacidad y escribe un post');
    }
  })
})

startButton.addEventListener('click', () => {
  printPost();
})
  
myPostButton.addEventListener('click', () => {
  let userId = firebase.auth().currentUser.uid;
  showMyPost(userId);
})
