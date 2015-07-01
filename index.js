//network vars
var port = 3000;
var express = require('express');
var app     = express();
var http    = require('http');
var server  = app.listen( port , function(){
  console.log("listening on port " + port)
});
var io      = require('socket.io')(server);


app.use( express.static("public") );

io.on('connection', function(socket){

  console.log('a user connected');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('chat message', function(msg){
    console.log( 'message: ' + msg.username + ": " + msg.message );
    io.emit( 'chat message', msg );
  });

});



