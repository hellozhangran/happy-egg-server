const express = require('express');
const fs=require("fs");
const app = express();
app.use(express.static("public"));

// 使用fs.readFile打开html文件
app.get("/hello.html", function(request, response) {
   fs.readFile("./"+request.path.substr(1),function(err,data){
        // body
        if(err){
            console.log(err);
            //404：NOT FOUND
            response.writeHead(404,{"Content-Type":"text/html"});
        }
        else{
            //200：OK
            response.writeHead(200,{"Content-Type":"text/html"});
            response.write(data.toString());
        }
        response.end();
    });
});
app.listen(3000, function() {   //监听http://127.0.0.1:3000端口
    console.log("server start");
});