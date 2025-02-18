const express=required("express");
const users=require("./MOCK_DATA.json")
const app=express();
const PORT=1000;

//routes

app.get("/users",(req,res)=>{
    return res.json(users);
});
app.listen(PORT,()=>console.log(`server started at port:${PORT}`));


