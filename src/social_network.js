const outButton = document.getElementById('signOut');
const publicButton = document.getElementById('buttonPost');
const selectPrivacy = document.getElementById('privacy');
const publications = document.getElementById('publications');

outButton.addEventListener('click', () => {
  signOut(); 
  window.location.href = 'index.html';
});

publicButton.addEventListener('click', () => {
  let userId = firebase.auth().currentUser.uid;
  // console.log(userId);
   firebase.database().ref('/users/' + userId).once('value')
    .then((user) => {
    const nameUser = (user.val().username);
    let newPost = document.getElementById('post').value;
    let state = selectPrivacy.value;
    if (selectPrivacy.value != '0'){
      writeNewPost(userId, nameUser, newPost, state);
      document.getElementById('post').value = '';
      document.getElementById('privacy').value = '0';
      if (state.value === 'publico'){
        publications.innerHTML = `
            <div class="card-content white-text">
              <div><span class="card-title">Nombre: ${nameUser}</span></div>
              <div class="card-action">
                <a href="#"><i class="material-icons prefix">edit</i></a>
                <a href="#"><i class="material-icons prefix">delete</i></a>
              </div>
              <div><textarea>${newPost}</textarea></div>
              <div class="card-action">
                <i class="material-icons prefix">public</i>
                <i class="material-icons prefix">favorite_border</i>
              </div>
            </div>
       `
      } else if (state.value === 'amigos'){
        publications.innerHTML = `
          <div class="card-content white-text">
            <div><span class="card-title">Nombre: ${nameUser}</span></div>
            <div class="card-action">
              <a href="#"><i class="material-icons prefix">edit</i></a>
              <a href="#"><i class="material-icons prefix">delete</i></a>
            </div>
            <div><textarea>${newPost}</textarea></div>
            <div class="card-action">
              <i class="material-icons prefix">public</i>
              <i class="material-icons prefix">favorite_border</i>
            </div>
          </div>
       `
      }

      
    } else {
      alert('Selecciona privacidad');
    }
  })
})


