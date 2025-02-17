// const http = require("http");
const express=require("express");
const app=express();
app.get('/',(req,res)=>{
    return res.send("hello from home page");
});
app.get('/about',(req,res)=>{
    // return res.send("hello from about page"+" hey"+ req.query.name+"your age is "+req.query.age);
    //or
    return res.send(`Hello ${req.query.name}`);

});
// const myServer = http.createServer(app);
// myServer.listen(2000,()=> console.log("server started"));

app.listen(2000,()=> console.log("server started"));




