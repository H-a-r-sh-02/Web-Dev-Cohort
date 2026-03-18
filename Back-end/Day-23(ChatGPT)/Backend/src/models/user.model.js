const mongoose = require("mongoose");

/* User Schema */
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    fullName: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);
const userModel = mongoose.model("user", userSchema);

/* Chat Schema */

module.exports = userModel;
