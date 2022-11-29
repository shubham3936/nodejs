const dbConnect = require('./connection');

const deletedata = async()=>{
    let data = await dbConnect();
    let result = await data.deleteOne({name:'oneplus nord'})
    console.warn(result);
    if(result.acknowledged)
    {
        console.log("record deleted")
    }
}

deletedata();