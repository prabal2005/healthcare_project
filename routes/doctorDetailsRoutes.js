const express = require("express");
const router = express.Router();
const { registerDoctor } = require("../controllers/doctorDetailsController");
const{jwtmiddleware}=require("../middleware/jwtmiddleware");

// Doctor registration route
router.post("/register",jwtmiddleware, registerDoctor);

module.exports = router;