const express = require("express");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const isUser = await userModel.findOne({
    username,
  });

  if (isUser) {
    return res.status(409).json({
      message: "username already exists",
    });
  }
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

  res.cookie("token", token);
  res.status(201).json({
    message: "user registered",
    user,
  });
});

router.get("/user", async (req, res) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({
      message: "unauthorised token not found!",
    });
  }

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findOne({
      _id: decode.id,
    });

    return res.status(200).json({
      message: "user data fetched",
      user,
    });
  } catch (error) {
    res.status(401).json({
      message: "Unauthorized invalid token",
    });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await userModel.findOne({
    username,
  });

  if (!user) {
    return res.status(404).json({
      message: "user account not found",
    });
  } else if (user.password != password) {
    return res.status(401).json({
      message: "Unauthorized, Password is incorrect!",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );

  res.cookie("token", token, {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2), // for 2 days
  });

  res.status(201).json({
    message: "User logged in!",
  });
});

router.get('/logout', (req, res) => {
  res.clearCookie("token");

  res.status(200).json({
    message: "user logout!",
  });
});

module.exports = router;
