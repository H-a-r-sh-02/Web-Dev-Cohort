const generateCaption = require("../service/ai.service");
const { uploadFile } = require("../service/storage.service");
const { v4: uuidv4 } = require("uuid");
const postModel = require("../models/post.model");

async function postController(req, res) {
  const file = req.file;
  const base64Image = new Buffer.from(file.buffer).toString("base64");
  const caption = await generateCaption(base64Image);

  const result = await uploadFile(base64Image, `${uuidv4()}`);

  const post = await postModel.create({
    image: result.url,
    caption,
    user: req.user._id
  });

  res.status(201).json({
    message: "Post created successfully",
    post
  });

}

module.exports = { postController };
