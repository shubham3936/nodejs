const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'ecom';
const client =new MongoClient(url);

async function dbConnect()
{
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('products');
    //let response = await collection.find({}).toArray();
    //console.log(response);
}

// dbConnect().then((resp)=>{
//     resp.find().toArray().then((data)=>{
//         console.warn(data);
//     })
// });

// const main = async ()=>{
//     let data =await dbConnect();
//     data = await data.find().toArray();
//     console.warn(data);
// }

// main();

module.exports = dbConnect;