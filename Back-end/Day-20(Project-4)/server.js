require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/db/db");
const { createServer } = require("http");
const { Server } = require("socket.io");
const generateResponse = require("./src/service/ai.service");

connectDB();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  /* options */
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("discconnect", () => {
    console.log("a user discconnected");
  });

  socket.on("ai-message", async (data) => {
    const res = await generateResponse(data.prompt);
    socket.emit("ai-message-response", {res});
  });
});

httpServer.listen(3000, () => {
  console.log("Server is running on port 3000");
});
