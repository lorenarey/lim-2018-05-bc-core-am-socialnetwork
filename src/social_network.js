const outButton = document.getElementById('signOut');
const publicButton = document.getElementById('buttonPost');
const selectPrivacy = document.getElementById('privacy');
const publications = document.getElementById('publications');

outButton.addEventListener('click', () => {
  signOut();
  window.location.href = 'index.html';
});
console.log(publicButton)
publicButton.addEventListener('click', () => {
 
  let userId = firebase.auth().currentUser.uid;
  console.log(userId);
   firebase.database().ref('/users/' + userId).once('value')
    .then((user) => {
    const username = (user.val().username);
    let newPost = document.getElementById('post').value;
    let state = selectPrivacy.value;
    if (selectPrivacy.value != '0'){
      writeNewPost(userId, username, newPost, state);
      document.getElementById('post').value = '';
      document.getElementById('privacy').value = '0';
      publications.innerHTML = `
        <div>
          <p>Nombre: ${username}</p>
          <p>${newPost}</p>
        </div>
      `
    } else {
      alert('Selecciona privacidad');
    }
  })
})


