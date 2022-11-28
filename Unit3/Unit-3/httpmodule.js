var http = require('http');
var server = http.createServer((req,res)=>{
    if(req.url=='/')
    {
        res.write("Welcome to index page");
        res.end();
    }
    else if(req.url=='/emp')
    {
        res.write("welcome to employee page");
        res.end();
    }
    else if(req.url=='/admin')
    {
        res.write("welcome to admin page");
        res.end();
    }
    else{
        res.end("Invalid request");
    }
});

server.listen(2020);
console.log("server is running on port 2020");