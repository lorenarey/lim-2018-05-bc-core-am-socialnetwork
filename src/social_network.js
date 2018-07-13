const outButton = document.getElementById('signOut');

outButton.addEventListener('click', () => {
  signOut();
  window.location.href = 'index.html';
})