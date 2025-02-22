const express=require("express")
const app=express()
app.use(express.json())
const{connectToMongoDb}=require("./connect")
connectToMongoDb("mongodb://127.0.0.1:27017/short_url")
.then(()=>console.log('mongo db connected ho chuka h'))
const URL=require("./models/url")
const port=5001


const urlRoute=require("./routes/url");
app.use("/url",urlRoute)
app.get("/url/:shortId",async(req,res)=>{
const shortId=req.params.shortId;
const entry=await URL.findOneAndUpdate({
    shortId,
},
{
    $push:{
        visitHistory:{
         timestamp:Date.now(),
        },
    },
},
)
res.redirect(entry.redirectUrl)
})
app.listen(port,()=>console.log(`server started at port ${port}`))

