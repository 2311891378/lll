var express=require('express')
var bodyparser=require('body-parser')
var app=express()
var path=require('path')
var pub=path.resolve(__dirname,'public')
console.log(pub)
app.use(bodyparser.json()) //处理json数据请求
app.use(bodyparser.urlencoded({extends:false})) //处理字符串数据请求
// app.use(express.static(pub))
app.get('/',(req,res)=>{
    res.send('首页')
})
app.post('/do',(req,res)=>{
    var body=req.body
    console.log(body)
    res.send('success')
})
app.listen(3000)