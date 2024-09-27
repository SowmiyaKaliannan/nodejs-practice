const express=require('express')
const app=express();
const PORT=3001;
app.get("/",(req,res)=>{
    res.send(
        `<div>
            <h1>Hello World</h1>
        </div>`
    )
}).listen(PORT)
console.log("Server is Running...")