// var fs = require('fs');
// fs.writeFile('test.txt', 'Hello World!', function (err) 
// { 
//         if (err)console.log(err);
//         else
//         console.log('Write operation complete.');
// });

//the callback function can be left as empty also
var fs = require('fs');
fs.writeFile('myfile1.txt', 'Hello', function () { 
        console.log('Content added to the file.');
});