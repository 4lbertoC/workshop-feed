var rootRef = new Firebase('https://scorching-torch-7585.firebaseio.com');

var messageFeed = new MessageFeed({
  element: document.querySelector('.message-feed')
});

var newMessageField = new NewMessageField({
  element: document.querySelector('.new-message'),
  onSubmit: function(messageData) {
    rootRef.child('messages').push(messageData);
  }
});

document.querySelector('.user-id').innerText = window.sessionStorage.getItem(
  'userId');

rootRef
  .child('messages')
  .limitToFirst(5)
  .orderByChild('timestamp')
  .on("value", messageFeed.update);
