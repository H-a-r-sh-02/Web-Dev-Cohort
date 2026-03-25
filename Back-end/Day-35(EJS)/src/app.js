const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan("dev"));

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render("index", {message: "Hello from express!"});
});


module.exports = app;