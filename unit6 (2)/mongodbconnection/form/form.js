var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var MongoClient=require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/MongoDatabase"; 
MongoClient.connect(url,function(err,db){
    if(err) throw err;
    console.log('database created');

  var dbo=db.db('MongoDatabase');
  dbo.collection('student').insertOne(data,(err)=>{
    if(err){
        console.log(err);
    }
    console.log('inserted..');
  })

    db.close();
})