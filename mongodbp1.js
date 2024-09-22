const {MongoClient}=require('mongodb')
var url="mongodb+srv://admin:admin@cluster0.ry51b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client=new MongoClient(url)

async function run()
{
    try
    {
        const db=client.db("sowmiyadb")
        const collection=db.collection("mycol")
        var obj={name:"sowmi",age:21,salary:200000};
        await collection.insertOne(obj);
        console.log("Data Inserted..")
    }
    finally
    {
        await client.close();
    }
}
run().catch(console.error)