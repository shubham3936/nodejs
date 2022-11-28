var fs= require('fs');
fs.copyFile('myfile2.txt', 'myfile3.txt', function (err) { 
if (err) return console.log('One of the files does not exists');
console.log('data copied');
})