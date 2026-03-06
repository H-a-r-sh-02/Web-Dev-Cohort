const express = require("express");
const authController = require("../controllers/auth.controller");

const router = express.Router();

/* User-Auth Routes */
router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);

module.exports = router; 
