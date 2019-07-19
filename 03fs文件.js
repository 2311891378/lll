var http=require('http')
var fs=require('fs')
http.createServer((req,res)=>{
    fs.writeFile('./static/1.txt','我是1TXT内容',{flag:"a"},(err)=>{
        if(err){
            throw error
        }else{
            res.end('success')
        }
    })
    fs.readFile('./static/1.txt',(err,data)=>{  //读
        fs.writeFile('./static/2.txt',data,(err)=>{  //写
            res.end(data)
        })
    })
    fs.copyFile('./static/1.txt','./static/3.txt',(err)=>{  //复制
        res.end('succ')
    })
    fs.rename('./static/11.txt','./static/1.txt',(err)=>{  //改名
        res.end('suc')
    })
    fs.unlink('./static/3.txt',(err)=>{  //删除
        res.end('sc')
    })
}).listen(3000)