var rootRef = new Firebase('https://scorching-torch-7585.firebaseio.com');

function registerNewUser(userName, email, password) {
  rootRef.createUser({
    email: email,
    password: password
  }, function(error, userData) {
    if (error) {
      alert('Error creating user! Look at the console for details.');
      console.log('Error creating user:', error);
    } else {
      rootRef.child('users/' + userData.uid).set({
        userName: userName
      });
      console.log('Successfully created user account with uid:',
        userData.uid);
      window.location.href = 'index.html';
    }
  });
}

document
  .querySelector('.main-form')
  .addEventListener('submit', function(evt) {
    evt.preventDefault();

    var userNameField = document.querySelector('#user-name');
    var emailField = document.querySelector('#user-email');
    var passwordField = document.querySelector('#user-password');

    registerNewUser(userNameField.value, emailField.value, passwordField.value);
  });
