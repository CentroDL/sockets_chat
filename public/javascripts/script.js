console.log("client logic loaded");

$(document).ready(function() {
  var message = $("#m");
  var socket = io();

  var username = prompt("What is your username?");

  $('form').submit(function(e) {
    e.preventDefault();
    if (message.val()) {
      socket.emit('chat message', {
        username: username,
        message: message.val()
      });
      message.val('');
    }
    return false;
  });

  socket.on('chat message', function(msg) {
    $('#messages').append($('<li>').text(msg.username + ": " + msg.message));
  });
});
