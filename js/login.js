document
  .querySelector('#login-button')
  .addEventListener('click', function(evt) {
    var userIdField = document.querySelector('#user-id-text');

    if (!userIdField.checkValidity()) {
      alert('Invalid User ID!');
      return;
    }

    window.sessionStorage.setItem('userId', userIdField.value);
    window.location.href = 'index.html';
  });
