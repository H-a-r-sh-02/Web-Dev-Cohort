const express = require('express');

const app = express();
// access express...

app.use(express.json());

const notes = [];

app.get('/home', (req, res)=>{
    res.send("server is live now.. and you'r in home page...");
});
// server is created and api is also...

// Creating note API -> title & description
app.post('/notes', (req, res)=> {
    notes.push(req.body);
    // res.json({
    //     Message: "Note added successfully ✅",
    //     Notes: notes
    // });// json method..

    res.send({
        Message: "Note added successfully ✅",
        Notes: notes
    });// direct send.. 
});

app.listen(3000, ()=>{
    console.log("server is running on port 3000");
});
// server is started and port no. is assigned...

