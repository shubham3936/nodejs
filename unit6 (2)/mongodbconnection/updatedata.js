const dbConnect = require('./connection');

const updateData = async ()=>{
    let data = await dbConnect();
    let result = await data.updateOne(
        {name:'s9'},{
            $set:{name:'oneplus nord'}
        }
    );
    console.log(result);
}

updateData();