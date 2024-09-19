console.log("hello world")
console.log(global)

console.log("-----------------")

const os = require('os')  //import os
console.log(os.type())
console.log(os.version())
console.log(os.homedir())

//default
console.log(__dirname) //dir--directory
console.log(__filename)

console.log("-------")

const path =require('path')  //import path
console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename)) //ext--extension
console.log(path.parse(__filename))  //parse-->display-root,dir,base,ext,name

console.log("-------------")

const p2=require('./p2') //import another file("p2")
console.log(p2.add(3,3))
console.log(p2.sub(3,3))
console.log(p2.mul(3,3))
console.log(p2.div(3,3))

console.log("-------------")

const {add,sub,mul,div}=require('./p2')
console.log(add(3,3))
console.log(sub(3,3))
console.log(mul(3,3))
console.log(div(3,3))