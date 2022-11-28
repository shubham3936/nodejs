var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
   res.sendFile( __dirname + "/" + "login.html" );
});

app.post('/chat',function(req,res){
   if(req.body.username == 'Jaskirat' && req.body.password == '123456789')
   {
      res.sendFile(__dirname + "/" + "chat.html");
   }
   else
   {
      res.sendFile( __dirname + "/" + "login.html");
      res.write("hi");
   }
});

users = [];
io.on('connection', function(socket) {
   console.log('A user connected');
   socket.on('createUser', function(data) {
      console.log(data);
      
      if(users.indexOf(data) >=0) {
         socket.emit('userExists', data + ' user already exists');
      } else {
         users.push(data);
         socket.emit('setUser', {username: data});
      }
   });
   
   socket.on('msg', function(data) {
      //Send message to everyone
      io.emit('newmsg', data);
   })
});

http.listen(2000, function() {
   console.log('listening on localhost:2000');
});