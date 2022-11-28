var express = require('express'); 
var app = express();  
app.get('/', function (req, res) {  
       //res.sendFile("button.html");
      //console.log(__dirname);
      //res.sendFile(__dirname + "/" + "button.html" ); 
   res.sendFile("C:/Users/dell/Downloads/Node ALL Code/Node ALL Code/Unit3/button.html"); 
 }) 
app.get('/down', function(req, res){ 
	res.download('test.txt', function(err){ 
        if(err) {console.error("No such file");}
        else
        {console.log("File downloaded successfully");}
	}); 
}); 
app.listen(2000, function(err){ 
    if (err) {console.error(err);}
    else
	{console.log("Server started"); }
});
