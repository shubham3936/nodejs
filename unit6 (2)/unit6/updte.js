var MongoClient=require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";
MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo=db.db('student1');
    var request={name:"shivam", age:25};
    var data={$set:{name:"shubham", age:50}};
    dbo.collection('course').updateMany(request,data,function(err,data){
        if(err)throw err;
        console.log('updated..');
        db.close();
     });
});