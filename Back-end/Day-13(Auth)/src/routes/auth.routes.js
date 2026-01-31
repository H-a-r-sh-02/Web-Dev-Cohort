const express = require("express");
const userModel = require("../model/user.model");
const router = express.Router();

// Creates/register a user
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const user = await userModel.create({
    username,
    password,
  });

  res.status(201).json({
    message: "User Registered!",
    user,
  });
});

// User Login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await userModel.findOne({
    username: username,
  });

  if (!user) {
    res.status(401).json({
      message: "User Account Not Found!",
    });
  } else if (user.password !== password) {
    return res.status(401).json({
      message: "Password doesn't match!",
    });
  } else {
    return res.status(200).json({
      message: "User Logged In!",
    });
  }
});

// Fetch users data [Protected]
router.get("/user", (req, res) => {});

module.exports = router;
