var rootRef = new Firebase('https://scorching-torch-7585.firebaseio.com');

document
  .querySelector('.main-form')
  .addEventListener('submit', function(evt) {
    evt.preventDefault();

    var emailField = document.querySelector('#user-email');
    var passwordField = document.querySelector('#user-password');

    rootRef.authWithPassword({
      email: emailField.value,
      password: passwordField.value
    }, function(error, authData) {
      if (error) {
        alert('Error logging in: ' + error);
      } else {
        rootRef
          .child('users/' + authData.uid)
          .on('value', function(userData) {
            window.sessionStorage.setItem('userName', userData.val().userName);
            window.location.href = 'feed.html';
          });
      }
    });

  });
