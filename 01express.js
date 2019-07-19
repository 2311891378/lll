var express=require('express')
var app=express()
app.get('/',(req,res)=>{
    res.end('hello word')
})
var server=app.listen(3000,()=>{
    var host=server.address().address
    var port=server.address().port
    console.log('应用实例，访问地址为http://%s:%s',host,port)
})