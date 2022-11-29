const dbConnect=require('./connection');

const insert = async ()=>{
    const db=await dbConnect();
    const res = await db.insert(
        [
            {
                name:'s9',
                price:000,
                ram:'16GB',
                storage:'128GB'
            }
        ]
    );

}
insert();