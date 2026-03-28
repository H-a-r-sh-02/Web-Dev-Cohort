const express = require("express");
const songRoutes = require("./routes/song.routes");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.static(path.join(__dirname, "../public")));

app.use("/", songRoutes);

app.get("*name", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;
