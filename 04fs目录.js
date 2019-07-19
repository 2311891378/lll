var http=require('http')
var fs=require('fs')
http.createServer((req,res)=>{
    // fs.mkdir('./aa',(err)=>{  //创建
    //     res.writableFinished('sc')
    // })
    // fs.rmdir('./aa',(err)=>{  //删除
    //     res.end('sc')
    // })
    // fs.readdir('./static',(err,data)=>{  //读取
    //     console.log(data)
    //     res.end('sc')
    // })
    // fs.stat('./static/1.txt',(err,stats)=>{
    //     console.log(stats.isFile())  //判断是不是文件
    //     console.log(stats.isDirectory())  //判断是不是目录
    //     res.end()
    // })
    var stream=fs.createReadStream('./static/1.txt')
        var content=''
        stream.on('data',(chunk)=>{
            content+=chunk
        })
        stream.on('end',(err)=>{
            console.log('finish'+content)
        })
        res.end()
}).listen(3000)
