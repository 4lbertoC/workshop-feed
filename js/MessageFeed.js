function MessageFeed(params) {

  var MESSAGE_TEMPLATE = document.getElementById('template-message').innerText;

  var _element = params.element;

  function _clear() {
    while (_element.firstChild) {
      _element.removeChild(_element.firstChild);
    }
  }

  function _addMessage(message) {
    var messageHtml = _renderMessageHtml(message);

    // Prepends the new message at the beginning of the list
    var container = document.createElement('div');
    container.innerHTML = messageHtml;
    _element.insertBefore(container.firstElementChild, _element.firstChild);
  }

  function _renderMessageHtml(message) {
    var messageData = {
      userId: message.userId,
      text: message.text,
      date: (new Date(message.timestamp)).toLocaleString()
    };

    return Mustache.render(MESSAGE_TEMPLATE, messageData);
  }

  this.update = function(messages) {
    _clear();

    messages.forEach(function(message) {
      _addMessage(message.val());
    });
  }

}
