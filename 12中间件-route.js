var express=require('express')
var router=express.Router()
var app=express()
app.use(router)
function fn(min,max){
    var num=Math.ceil(Math.random()*(max-min)+min)
    return num
}
var str='abcdefghijklmnopqrstuvwxyz0123456789'
router.get('/',(req,res)=>{
    var number=''
    for(var i=0;i<4;i++){
        number+=str[fn(0,str.length-1)]
    }
    res.send(number)
})
app.listen(3000)
