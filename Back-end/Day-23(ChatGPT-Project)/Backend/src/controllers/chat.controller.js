const chatModel = require("../models/chat.model");
const messageModel = require("../models/message.model");

async function createChat(req, res) {
  const user = req.user;
  const { title } = req.body;

  const chat = await chatModel.create({
    user: user._id,
    title,
  });

  res.status(201).json({
    message: "Chat created successfully",
    chat: {
      _id: chat._id,
      title: chat.title,
      lastActivity: chat.lastActivity,
      user: chat.user,
    },
  });
}

async function getAllChats(req, res) {
  const user = req.user;
  const chats = await chatModel.find({ user: user._id }); 

  res.status(200).json({
    message: "Chats retrieved successfully",
    chats: chats.map((chat) => ({
      _id: chat._id,
      title: chat.title,
      lastActivity: chat.lastActivity,
      user: chat.user,
      name: user.fullName,
    })),
  });
}

async function getMessages(req, res) {
  const chatId = req.params.id;

  const messages = await messageModel.find({chat: chatId}).sort({createdAt: -1});

  res.status(200).json({
    message: "Messages retrieved successfully",
    messages
  });

}

module.exports = {
  createChat,
  getAllChats,
  getMessages
};
