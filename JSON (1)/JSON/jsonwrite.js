const fs = require('fs');
let student = { 
    name: 'Mike',
    age: 23, 
    gender: 'Male',
    department: 'English',
    car: 'tata' 
};
//let data = JSON.stringify(student);
 let data = JSON.stringify(student, ['name','age','gender','department']);
fs.writeFile('student0.json', data, (err) => {
    if (err) throw err;
    console.log('Data written to file');
});
