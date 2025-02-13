const http=require("http");
const myserver=http.createServer((req,res)=>{
    console.log("new req received");
    res.end("hello from server");

});
myserver.listen(7000,()=>console.log("server started"));