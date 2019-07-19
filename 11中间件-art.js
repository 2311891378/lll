var express=require('express')
var art=require('express-art-template')
var app=express()
app.engine('art',art)
app.get('/',(req,res)=>{
    res.render('form.art',{list:["1","2","3"]})
    // res.send()
})
app.listen(3000)