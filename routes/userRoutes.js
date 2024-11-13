const express = require("express");
const router = express.Router();
import {jwtmiddleware} from"../middleware/jwtmiddleware";

const{
    registerUser,
    loginUser

}= require("../controllers/userController");
//route for user registration

router.post("/register",registerUser);

//route for user login

router.post("/login",loginUser);

//route for get the user specific data

router.get("/myaccount",jwtmiddleware,getUserprofile)

//roue for updating user specific data
router.patch("/myaccount",jwtmiddleware,updateUserProfile)

module.exports=router;