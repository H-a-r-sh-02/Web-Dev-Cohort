const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

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
        message: "User Registered Successfully",
        user,
      });
    }
  } catch (error) {
    console.error("ERROR:", error);
  }
}

const loginUser = async (req, res) => {

}

module.exports = {
    registerUser,
    loginUser,
}