const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

async function authMiddleware(req, res, next) {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).json({
        message: "Unauthorized Access! Login to continue",
      });
    } else {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel
          .findOne({
            _id: decoded.id,
          });
        req.user = user;
        next();
      } catch (error) {
        return res.status(401).json({
          message: "Invalid Token, please login again",
        });
      }
    }
  } catch (error) {
    console.error("Error authenticating user:", error);
  }
}

module.exports = authMiddleware;
