var express=require('express')
var app=express()
var cookieparser=require('cookie-parser')
app.use(cookieparser('sign'))
app.get('/',(req,res)=>{
    res.send('首页')
})
app.get('/set',(req,res)=>{
    res.cookie('username','lll',{maxAge:200000,signed:true})
    res.send('success')
})
app.get('/get',(req,res)=>{
    console.log(req.signedCookies.username)
    res.send(req.signedCookies)
})
app.listen(3000)