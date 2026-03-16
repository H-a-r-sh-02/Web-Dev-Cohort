const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const chatController = require("../controllers/chat.controller");

/* Post /api/chat/ */
router.post("/", authMiddleware.authUser, chatController.createChat);

/* Get /api/chat/ */
router.get("/", authMiddleware.authUser, chatController.getAllChats);

/* Get /api/chat/messages/:id */
router.get("/messages/:id", authMiddleware.authUser, chatController.getMessages);

module.exports = router; 