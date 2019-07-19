var express=require('express')
var fs=require('fs')
var app=express()
//设置引擎
// app.engine('views engine','ejs')
app.set('views',__dirname+'/views')
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    console.log(res)
    res.render('ind.ejs',{
        list:["1","2","3"]
    })
})
app.listen(3000)