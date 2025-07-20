const express = require('express');
const multer = require('multer');
const uploadFile = require('../services/storage.service');
const router = express.Router();

const upload = multer({storage:multer.memoryStorage()});

router.post('/songs', upload.single("audio"), async (req, res)=>{
    console.log(req.body);
    console.log(req.file); 
    const fileData = await uploadFile(req.file);   
    console.log(fileData); 
    res.status(201).json({
        message: "Song created successful",
        song: req.body,
    })
})


module.exports = router;