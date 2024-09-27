var f1=require('fs')
f1.rename('sample.txt','sample1.txt',function(err){
    if(err)
        console.log(err)
    else
    console.log("file Renamed")
})
console.log("Server Running...")