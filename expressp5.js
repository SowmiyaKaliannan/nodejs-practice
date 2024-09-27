const express=require('express')
const app=express()
const PORT=3001;
//Single Rounting

const r1=express.Router()

r1.get('/',function(req,res){
    console.log("Routing working")
})

app.use(r1)

app.listen(PORT,function(err){
    if(!err)console.log("Server is Running...")
    
})