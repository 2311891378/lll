var express=require('express')
var app=express()
app.get('/',(req,res)=>{
    res.send('首页')
}).get('/about:id',(req,res)=>{
    console.log(req.params)
    res.send('此时id为：'+req.params.id)
})
app.listen(3000)