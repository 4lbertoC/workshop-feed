var DATABASE_URL = 'https://scorching-torch-7585.firebaseio.com';

var database = new Database({
  databaseUrl: DATABASE_URL,
  onValueChanged: function(messages) {
    messageFeed.update(messages);
  }
});

var messageFeed = new MessageFeed({
  element: document.querySelector('.message-feed')
});

var newMessageField = new NewMessageField({
  element: document.querySelector('.new-message'),
  onSubmit: function(message) {
    database.pushMessage(message);
  }
});

document
  .querySelector('.user-id')
  .innerText = window.sessionStorage.getItem('userName');
