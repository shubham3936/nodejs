var MongoClient=require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url,function(err,db){
    var dbo=db.db('student1');
    dbo.createCollection('course',function(err,data){
        if(err) throw err;
        console.log('collection is created');
        db.close();
    });
});
