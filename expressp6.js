const express=require('express')
const app=express()
const PORT=3001;

//Multiple Routing

const r1=express.Router()
const r2=express.Router()
const r3=express.Router()

r1.get("/",function(req,res){
    res.send("Hello from route 1")
})
r2.get("/",function(req,res){
     res.send("About route 1")
     })
r3.get("/",function(req,res){
    res.send("Login route 1")
})

app.use("/user",r1)
app.use("/about",r2)
app.use("/login",r3)

app.listen(PORT,function(err){
    if(err)console.log(err)
    console.log("Server is Running...")
})