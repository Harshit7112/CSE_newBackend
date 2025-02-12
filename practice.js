const fs=require("fs");
const data=fs.readFileSync("./datarename.txt","utf-8");
console.log(data)
// fs.writeFileSync("./datanew.txt","hello this is updating data","utf-8");
// fs.writeFileSync("./datanew.txt","this is overwriting data","utf-8");
// fs.appendFileSync("./datanew.txt","this is appending data","utf-8");
// fs.renameSync("./datanew.txt","./datarename.txt");

if(data.match("H"))
{
    console.log("contains h");
    const newdata1=data.replace("H","replalced");
    fs.writeFileSync("./datarename.txt",newdata1,"utf-8");

}
else{
    console.log("h not found");
}



