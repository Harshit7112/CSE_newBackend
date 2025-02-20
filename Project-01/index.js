const express = require("express");
// const users = require("./MOCK_DATA.json")
const app = express();
const PORT = 1000;
const fs = require("fs");
const mongoose=require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/newapp").then(()=>console.log("mongodb connected")).catch((err)=>console.log("mongo erro",err))



const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,

    },
    lastName:{
        type:String,

    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    jobTitle:{
        type:String,
    },
    gender:{
        type:String,
    }

})
const User=mongoose.model("user",userSchema)

//middelware plugin
////////////////////////////////////////////////////////////////////////////////////
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    console.log("hello form 1")
    next()
})

app.use((req, res, next) => {
    console.log("hello form 2")

    next()
})

app.use((req, res, next) => {
    fs.appendFile("log1.txt", `\n${Date.now()}:${req.method}:${req.path}`, (err, data) => {
        next();
    });

});
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//routes

app.get("/api/users", (req, res) => {

    //headers
    res.setHeader("X-myName","Harshit Maurya") //custom header
    // Alwayas add X to cusstom headers
    return res.json(users);
});

app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id == id);
    if(!user) return res.status(404).json({error:"no user found"})
            return res.json(user);



});

app.get("/users", async(req, res) => {
    const allDbUsers=await User.find({})
    const html = `
    <ul>
    ${allDbUsers.map(user => `<li>${user.firstName}</li>`).join(" ")}
    </ul>

    `;
    res.send(html);
});


///post request

//create new user
app.post("/api/users", async(req, res) => {
    const body = req.body;
    if(!body||!body.first_name ||!body.email)
    {
        return res.status(400).json({msg:"all fieldsn are required"})
    }
    const result=await User.create({
        firstName:body.first_name,
        lastName:body.last_name,
        email:body.email,
        gender:body.gender,
        jobTitle:body.job_title,

    })
    // console.log("result",result)
    return res.status(201).json({msg:"successs"})

    /*

    users.push({ ...body, id: users.length + 1 });
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.status(201).json({ status: "succes", id: users.length });
    });

    */


});

//edit new uer with id
app.patch("/api/users/:id", (req, res) => {
    return res.json({ status: "pending" });
})

//delete user with id
app.delete("/api/users/:id", (req, res) => {
    return res.json({ status: "pending" })
});





app.listen(PORT, () => console.log(`server started at port:${PORT}`));


