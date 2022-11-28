const fs = require('fs');
fs.readFile('student0.json', (err, data) => {
    if (err) throw err;
    let student = JSON.parse(data);
    console.log(student);
   // console.log(data);
    // console.log(data.toString());
    // console.log(data.toString('hex'));
   // console.log(JSON.stringify(student,null,10));
    // console.log(JSON.stringify(student,['marks'],2));
    
});