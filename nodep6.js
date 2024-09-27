var fs=require('fs')
fs.writeFile('sample2.txt',"WelcomeApp",function(err){
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log("FileCreated..")
    }
    fs.readFile("sample2.txt",function(err,d){
        if(err)
            console.log(err)
        else
        console.log(d.toString())
    })
})