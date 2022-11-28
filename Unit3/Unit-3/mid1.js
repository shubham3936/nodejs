var express = require('express')
var app = express()

var myLogger1 = function (req, res, next) {
  console.log('LOGGED1')
  next()
}

var myLogger2 = function (req, res, next) {
  console.log('LOGGED2')
  next()
}
app.use(myLogger1)
app.use(myLogger2)

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000)
