const outButton = document.getElementById('signOut');
const publicButton = document.getElementById('buttonPost');
const selectPrivacy = document.getElementById('privacy');

outButton.addEventListener('click', () => {
  signOut();
  window.location.href = 'index.html';
});

publicButton.addEventListener('click', () => {
  let userLogin = firebase.auth().currentUser;
  console.log(userLogin);
  let newPost = document.getElementById('post').value;
  let state = selectPrivacy.value;
  console.log(state);
  console.log(newPost);
  if (selectPrivacy.value != '0'){
    writeNewPost(userLogin.uid, userLogin.displayName, newPost, state);
    document.getElementById('post').value = '';
    document.getElementById('privacy').value = '0';
    console.log(writeNewPost);
  } else {
    alert('Selecciona privacidad');
  }
})


