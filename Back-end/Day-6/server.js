const express = require('express');
const connectToDb = require('./src/db/db');
const noteModel = require('./src/models/note.model');

const app = express();
app.use(express.json());

app.post('/notes', async (req, res)=>{
    const { title, content } = req.body;

    await noteModel.create({
        title, content
    });

    res.json({
        message: "Note created successful !"
    });
});

app.get('/notes', async (req, res)=>{
       const notes = await noteModel.find();
       
       res.json({
        message: "Notes fetch successful !", 
        notes
       });
});

app.delete('/notes/:id', async (req, res)=>{
    const noteId = req.params.id;

    await noteModel.findOneAndDelete({
        _id: noteId
    });

    res.json({
        message: "note deleted !"
    });
});

app.patch('/notes/:id', async (req, res)=>{
    const noteId = req.params.id;
    const { title } = req.body;

   await noteModel.findOneAndUpdate({
        _id: noteId
    }, {
        title: title
    });

    res.json({
        message: "note updated !"
    });
});

connectToDb();
app.listen(3000, ()=>{
    console.log("server is running on port 3000");
});