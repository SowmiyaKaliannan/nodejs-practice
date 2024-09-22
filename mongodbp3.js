const {MongoClient}=require('mongodb');
var url="mongodb+srv://admin:admin@cluster0.q4fm4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client=new MongoClient(url);
async function run()
{
    try
    {
        const db=client.db('sowmiyadb')
        const collection=db.collection('mycol');
        //Update
        const cu=await collection.updateOne(
            {"name":"sowmi"},{"$set":{"name":"xyz"}}
        )
         console.log(`${cu.modifiedCount} document was updated`);
         //Display

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