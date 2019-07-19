var express=require('express')
var path=require('path')
var app=express()
var pub=path.resolve(__dirname,"public")
console.log(pub)
//静态资源服务器
app.use(express.static(pub))
app.listen(3000)