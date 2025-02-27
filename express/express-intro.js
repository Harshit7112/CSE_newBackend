import { HttpStatusCode } from "axios";
import express from "express";
const app=express();
const port=4001
app.get("/",(req,res)=>{
    res.send("welcome cse students")
})
app.get("/about",(req,res)=>
{
    res.send("this is about")
})

app.get("/api/:name/:age",(req,res)=>{
try {
    const data=req.params;
    res.send(`welcome ${data.name} and your age is ${data.age}` )
    
} catch (error) {
    console.log(error.message)
    
}
})
app.get("/api",(req,res)=>
{
    try {
        const {name,age}=req.query;
        if(!name){
            res.send({status:404,message:"please enter name"})

        }
        else
        {
            res.send(`welcome ${name} and your age is ${age}` )
        }
        
    
        
    } catch (error) {
        console.log("error",error)
        
    }
})
app.listen(port,()=>{console.log(`server started at ${port}`)})