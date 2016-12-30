var express		= require('express');
var morgan		= require('morgan');
var bodyParser		= require('body-parser');
var app			= require('express')();
var http 		= require('http').Server(app);
var io			= require('socket.io')(http);


app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser());

app.get('/', (req, res)=>{res.sendFile(process.cwd() + '/public/layout.html')})


io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(4000);
console.log('Listening on port 4000');
