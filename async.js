const fs=require("fs");
fs.readFile("./data1.txt","utf-8",(err,result)=>{
    if(err)
    {
        console.log("error",err);
    }
    else
    {
        console.log(result);
    }

});