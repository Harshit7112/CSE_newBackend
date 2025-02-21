const express = require("express");

const app = express();
const PORT = 1000;


const userRouter=require('./routes/user')
const {logReqRes}=require("./Middlewares") //need not to mention file location here of indexjs because it automticalyy selects index file
const {connectMongodb}=require("./connection")
connectMongodb("mongodb://127.0.0.1:27017/newapp").then(()=>
 console.log("mongo db conncected"))







//middelware plugin
////////////////////////////////////////////////////////////////////////////////////
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));












app.use("/api/users",userRouter)
app.listen(PORT, () => console.log(`server started at port:${PORT}`));


