var http = require('http')
var fs = require('fs')
http.createServer((req, res) => {
    if (req.url == '/favicon.ico') {
        return
    }
    // fs.readdir('./aa',(err,data)=>{
    //     for(let i=0;i<data.length;i++){
    //         fs.stat('./aa/'+data[i],(err,stats)=>{
    //             if(stats.isDirectory()==true){
    //                 console.log(data[i])
    //             }
    //         })
    //     }
    // })

    // fs.readdir('./aa',(err,data)=>{
    //     for(var i=0;i<data.length;i++){
    //         (function(i){
    //                 fs.stat('./aa/'+data[i],(err,stats)=>{
    //                     if(stats.isDirectory()==true){
    //                         console.log(data[i])
    //                     }
    //                 })
    //           })(i)
    //     }
    // })

    fs.readdir('./aa', (err, data) => {
        for (var i = 0; i < data.length; i++) {
            var that=this
            fs.stat('./aa/' + that[i], (err, stats) => {
                
                if (stats.isDirectory() == true) {
                    console.log(that[i])
                }
            })
        }
    })

    res.end()
}).listen(3000)