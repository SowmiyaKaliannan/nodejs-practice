var h1=require('http')
h1.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write('<h1>helloworld</h1>')
}).listen(8081);
console.log("server is running")