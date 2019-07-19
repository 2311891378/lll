var http=require('http')
var art=require('art-template')
var fs=require('fs')
http.createServer((req,res)=>{
    var list=["lll","kll","sss"]
    fs.readFile('./views/form.art',(err,data)=>{
        var str=data.toString()
        var result=art.render(str,{list:list})
        res.end(result)
    })
}).listen(3000)






 