var express=require('express')
var app=express()
app.get('/do',(req,res)=>{
    res.send('成功')
    console.log(req.query)
})
app.listen(3000)