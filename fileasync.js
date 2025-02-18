const fspromise=require("fs/promises");
const read= async()=>{
    try {
        const data=await fspromise.readFile("./data4.txt","utf-8");
        console.log(data);
    } catch (error) {
        console.log(error.msg);
        
    }

}
const write=async()=>{
    await fspromise.writeFile("./data4.txt","this is async updation","utf-8");
}
// read();
// write();
module.exports=read;

