const http=require("http")
const fs=require("fs/promises")
const server=http.createServer(async(req,res)=>
{
    res.statusCode=200;
    res.setHeader("Content-type","text/plain")
    res.writeHead(200,{"Content-type":"text/html"})
   // res.write("hello cse c")
   const readdata=await fs.readFile("./home.html","utf-8")
    res.end(readdata)
})
const port=3000
server.listen(port,()=>console.log(`server started at ${port}`))

