const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controller/auth.controller");
const { authMiddleware } = require("../middleware/auth.middleware");

/*
POST '/register' ✅
POST '/login'✅
GET '/user'[protected] 
*/

router.post("/register", authMiddleware, registerUser);

router.post("/login", loginUser);

module.exports = router;
