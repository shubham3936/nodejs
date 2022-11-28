var MongoClient=require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo=db.db('student1');
    var myobj=[
       { name:"shivam", age:25, course:"node"},
       { name:"shivam verma", age:25, course:"node"},
       { name:"shivam seth", age:25, course:"node"}

    ];
    dbo.collection('course').insertMany(myobj, function(err){
        if(err) throw err;
        console.log('data inserted..');
        db.close();
    });
});
