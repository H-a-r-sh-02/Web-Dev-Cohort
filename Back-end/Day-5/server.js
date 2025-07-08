 const express = require('express');
 const connectToDB = require('./src/db/db');

 connectToDB();
 const app = express();

 app.post('/notes', (req, res)=>{
   const { title, content } = req.body;
   console.log(title, content);
 });

 app.get('/notes', (req, res)=>{
   res.json(notes);
 });

 app.listen(3000, ()=>{
    console.log("server is running on port 3000");
 })