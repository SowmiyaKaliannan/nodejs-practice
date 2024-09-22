const {MongoClient}=require('mongodb');
var url="mongodb+srv://admin:admin@cluster0.ry51b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client=new MongoClient(url);
async function run()
{
    try
    {
        const db=client.db('sowmiyadb')
        const collection=db.collection('mycol');
        var obj=[{name:"sowmi",age:21,email:"sowmi@gmail.com",salary:100000},
        {name:"kavi",age:21,email:"kavi@gmail.com",salary:150000}]
        await collection.insertMany(obj);
        console.log("Data inserted");
        
        //find data in the database
        const cf=collection.find()
        const data=await cf.toArray()
        console.table(data)
    }
    finally
    {
        await client.close();
    }
}
run().catch(console.error)