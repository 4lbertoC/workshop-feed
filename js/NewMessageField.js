function NewMessageField(params) {

  var _element = params.element;

  var _textField = _element.querySelector('.new-message-text');

  function submitNewMessage() {
    var text = _textField.value;

    if (text.length === 0) {
      return;
    }

    params.onSubmit({
      userId: window.sessionStorage.getItem('userId'),
      text: text,
      timestamp: +(new Date)
    });

    _textField.value = '';
  }

  _element
    .querySelector('.submit-new-message')
    .addEventListener('click', submitNewMessage);

  _element
    .querySelector('.new-message-text')
    .addEventListener('keydown', function(evt) {
      if (evt.keyCode === 13 && !evt.shiftKey) {
        submitNewMessage();
        evt.preventDefault();
      }
    });

}
