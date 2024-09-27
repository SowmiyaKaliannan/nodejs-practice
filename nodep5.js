var fs=require('fs')
//Synchrous read
var data=fs.readFileSync('sample1.txt')
console.log(data.toString())

//Asynchrous read the callback function
fs.readFile('sample1.txt',function(err,d){
    if(err)
    {
        console.log(err)
    }
    console.log(d.toString())
})