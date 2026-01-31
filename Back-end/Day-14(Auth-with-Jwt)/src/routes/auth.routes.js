const express = require("express");
const userModel = require("../model/user.model");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Creates/register a user
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const user = await userModel.create({
    username,
    password,
  });
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );
  
  res.cookie("token", token)
  res.status(201).json({
    message: "User Registered Successfully",
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
    return res.status(401).json({
      message: "User not found",
    });
  } else if (user.password !== password) {
    return res.status(401).json({
      message: "Invalid Password",
    });
  } else {
    return res.status(200).json({
      message: "Login Successful",
    });
  }
});

// Fetch users data [Protected]
router.get("/user", async (req, res) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({
      meaasge: "Unauthorized, Token missing",
    });
  }
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findOne({
        _id: decode.id,
    }).select("-password -__v").lean();

    res.status(200).json({
        message: "User data fetched successfully",
        user,
    })

  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized, Invalid Token",
    });
  }
});

module.exports = router;
