require("dotenv").config();
const app = require("./src/app");
const { createServer } = require("http");
const { Server } = require("socket.io");
const generateResponse = require("./src/service/ai.service");

const httpServer = createServer(app);
const io = new Server(httpServer, {
  /* options */
  cors: {
    origin: "http://localhost:5173",
  }
});

const chatHistory = [];

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("discconnect", () => {
    console.log("a user discconnected");
  });

  socket.on("ai-message", async (data) => {
    chatHistory.push({
      role: "user",
      parts: [{ text: data }],
    });
    const res = await generateResponse(chatHistory);
    chatHistory.push({
      role: "model",
      parts: [{ text: res }],
    });
    socket.emit("ai-message-response", { res });
  });
});

httpServer.listen(3000, () => {
  console.log("Server is running on port 3000");
});
