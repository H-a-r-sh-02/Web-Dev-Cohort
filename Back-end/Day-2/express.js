const express = require('express');

const app = express();

app.get('/', (req, res)=> {
    res.send("server is live");
});

app.get('/home', (req, res)=> {
    res.send("you are in home page");
});

app.listen(3000, ()=>{
    console.log("server is running on port 3000");
});