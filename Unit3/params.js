var express = require('express');
var app = express();

app.get('/',(req,res)=>{
   res.send("Enter your firstname and lastname in route");
   
})

app.get('/:fname/:lname', function(req, res){
   // res.send('Your first name is ' + req.params.fname);
   // res.send('Your last name is ' + req.params.lname);
   res.send('firstname: ' + req.params.fname + ' and lastname: ' + req.params.lname);
   console.log(req.params);
});
app.listen(3000);


/*var express = require('express');
var app = express();

app.get('/apply/:firstname/:lastname', function(req, res) {
   res.send('firstname: ' + req.params.firstname + ' and lastname: ' + req.params.lastname);
});
app.listen(3000);*/