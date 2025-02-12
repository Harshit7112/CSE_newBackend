const fs=require("fs");
 const data=fs.readFileSync("./data.txt","utf-8");
//console.log(data.toString());
console.log(data);
if(data.match("H"))
{
    console.log("file contains h");
    const newdata=data.replace("H","hahaha");
    fs.writeFileSync("./data.txt",newdata,"utf-8")
}

// fs.writeFileSync("./data1.txt","hello abes","utf-8");
// fs.writeFileSync("./data1.txt","hello abesec,waow","utf-8");
// fs.appendFileSync("./data1.txt","new append function ke through","utf-8");
// // fs.renameSync("./data2.txt","./data3.txt");//for renaming the file
// fs.unlinkSync("./data3.txt"); // for deletin any file


