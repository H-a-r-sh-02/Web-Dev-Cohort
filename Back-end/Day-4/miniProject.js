const express = require('express');
const app = express();

const notes = [];

// Using middle-ware for data sending to backend
app.use(express.json());

// Create notes => title & content
app.post('/notes', (req, res)=> {
    notes.push(req.body);
    res.json({
        Message: "Note created successfully ✅",
        Notes: notes
    });
});

// Show Notes 
app.get('/notes', (req, res)=>{
    res.json(notes);
});

// Delete Notes
app.delete('/notes/:index', (req, res)=>{
    const index = req.params.index;
    delete notes[index];
    res.json({
        Message: "Note Deleted Successfully !"
    });
});

// Update Notes
app.patch('/notes/:index', (req, res)=>{
    const index = req.params.index;
    const {title} = req.body;

    notes[index].title = title;
    res.json({
        Message: "Note Updated Successfully ✅"
    });
});

app.listen(3000, ()=>{
    console.log("server is running on port 3000");
});