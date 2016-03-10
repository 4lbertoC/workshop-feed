function Database(params) {

  var _rootRef = new Firebase(params.databaseUrl);

  this.pushMessage = function(messageData) {
    _rootRef.child('messages').push(messageData);
  };

  _rootRef
    .child('messages')
    .limitToFirst(5)
    .orderByChild('timestamp')
    .on('value', params.onValueChanged);

}
