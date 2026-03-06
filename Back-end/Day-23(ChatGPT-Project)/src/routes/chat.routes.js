const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const chatController = require("../controllers/chat.controller");

/* Post /api/chat/ */
router.post("/", authMiddleware.authUser, chatController.createChat);


module.exports = router;