const express=require("express");
const User = require("../models/user");
const {handleGetAllUser,getUserById,handleUpdateUserById,handleDeleteUserById,handleCreateNewUser}=require("../controllers/user");

const router=express.Router()
router.get("/",handleGetAllUser);
router.get("/:id", getUserById);

// router.get("/api/users", (req, res) => {

//     //headers
//     res.setHeader("X-myName","Harshit Maurya") //custom header
//     // Alwayas add X to cusstom headers
//     return res.json(users);
// });






///post request

//create new user
router.post("/", handleCreateNewUser)
    

    /*

    users.push({ ...body, id: users.length + 1 });
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.status(201).json({ status: "succes", id: users.length });
    });

    */




//edit new uer with id
router.patch("/:id",handleUpdateUserById )

//delete user with id
router.delete("/:id", handleDeleteUserById);
module.exports=router;