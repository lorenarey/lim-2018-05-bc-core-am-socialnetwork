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
  firebase.database().ref('/users/' + userId).once('value')
    .then((user) => {
    const nameUser = (user.val().username);
    let newPost = document.getElementById('post').value;
    let state = selectPrivacy.value;
    if (selectPrivacy.value != '0') {
      document.getElementById('post').value = '';
      document.getElementById('privacy').value = '0';
      writeNewPost(userId, nameUser, newPost, state);
      printPost();
      window.location.reload(true);
    } else {
      alert('Selecciona privacidad');
    }
  })
})
      
//const deleteButton = document.getElementById('delete-button');







    // if (selectPrivacy.value != '0'){
      
      
    //   if (state.value === 'publico'){
    //     publications.innerHTML = `
    //     <div class="show-post">
    //       <div><p>Nombre:Geraldine Saco</p><div class="actions"><img src="img/amigos.png" alt="icono de privacidad"></div></div>
    //       <textarea class="textarea-post" disabled>Post:aquí irá el nuevo post </textarea>
    //       <hr>
    //       <div>
    //         <div class="icon-like"><a href="#"><img src="img/like.jpg" alt="icono de like" width="20px"></a><p class="count-like">0</p></div>
    //         <div class="actions"><a href="#"><img src="img/edit (1).png" alt="icono de editar" width="24px"></a><a href="#"><img src="img/delete.png" alt="icono de eliminar" width="24px"></a></div>
    //       </div>
    //     </div>
    //    `
    //   // } else if (state.value === 'amigos'){
    //   //   publications.innerHTML = `
    //   //     <div class="card-content white-text">
    //   //       <div><span class="card-title">Nombre: ${nameUser}</span></div>
    //   //       <div class="card-action">
    //   //         <a href="#"><i class="material-icons prefix">edit</i></a>
    //   //         <a href="#"><i class="material-icons prefix">delete</i></a>
    //   //       </div>
    //   //       <div><textarea>${newPost}</textarea></div>
    //   //       <div class="card-action">
    //   //         <i class="material-icons prefix">public</i>
    //   //         <i class="material-icons prefix">favorite_border</i>
    //   //       </div>
    //   //     </div>
    //   //  `
    //   // }

      



