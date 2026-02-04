const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

async function registerUser(req, res) {
  const { username, password } = req.body;
  try {
    const isUser = await userModel.findOne({
      username,
    });

    if (isUser) {
      return res.status(409).json({
        message: "username already exists",
      });
    } else {
      const user = await userModel.create({
        username,
        password: await bcrypt.hash(password, 10),
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
        user,
      });
    }
  } catch (error) {
    console.error("ERROR:", error);
  }
}

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await userModel.findOne({
      username,
    });
    const hashedPassword = await bcrypt.compare(password, user.password);

    if (!user) {
      return res.status(404).json({
        message: "User not found!",
      });
    } else if (!hashedPassword) {
      return res.status(401).json({
        message: "Unauthorized, Password is incorrect!",
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
        user,
      });
    }
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

module.exports = {
  registerUser,
  loginUser,
};
