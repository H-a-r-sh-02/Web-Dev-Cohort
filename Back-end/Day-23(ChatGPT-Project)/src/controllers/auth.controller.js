const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
  const { fullName:{ firstName, lastName }, email, password } = req.body;
  const isUser = await userModel.findOne({ email });
  const hashedPass = await bcrypt.hash(password, 10);
  try {
    if (!isUser) {
      const user = await userModel.create({
        fullName: {
          firstName,
          lastName,
        },
        email,
        password: hashedPass,
      });

      const token = jwt.sign(
        {
          id: user._id,
        },
        process.env.JWT_SECRET,
      );

      res.cookie("token", token);
      res.status(201).json({
        message: "User Registered Successfully",
        user: {
          email: user.email,
          _id: user._id,
          fullName: user.fullName,
        },
      });
    } else {
      res.status(409).json({
        message: "User already exists",
      });
    }
  } catch (error) {
    console.error("Error registering user:", error);
  }
}

async function loginUser(req, res) {
  const { email, password } = req.body;
  const user = await userModel.findOne({
    email,
  });
  const isPassword = await bcrypt.compare(password, user.password);
  if (!user) {
    res.status(404).json({
      message: "User not found",
    });
  } else if (!isPassword) {
    res.status(401).json({
      message: "Unauthorized, Password is incorrect",
    });
  } else {
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
    );

    res.cookie("token", token);
    res.status(200).json({
      message: "Login Successful",
      user: {
        email: user.email,
        _id: user._id,
        fullName: user.fullName,
      },
    });
  }
}

module.exports = {
  registerUser,
  loginUser,
};
