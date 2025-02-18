const fs =require("fs");
const read =()=>{
    fs.readFile("./data4.txt","utf-8",(error,data)=>{
        if(error)
        {
            console.log(error.message);
        }
        else
        {
        console.log(data);
        }
    });

}
read();