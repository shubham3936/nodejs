
var express = require('express');
var session = require('express-session')
var app = express()

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

// Access the session as req.session
app.get('/', function(req, res, next) {
	console.log(req.session)
  res.send('Hello World!')
})

app.listen(2000);