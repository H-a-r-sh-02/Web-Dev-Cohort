const express = require('express');
const userModel = require('../models/user.model');
const router = express.Router();

router.use(express.json());

router.post('/register', async (req, res)=>{
    const { username, password } = req.body;

    const user = await userModel.create({
        username, password
    });
    res.status(201).json({
        message: "User Registered!",
        user
    });
});

router.post('/login', async (req, res)=>{
    const { username, password } = req.body;

    const user = await userModel.findOne({
        username: username,
    });
    
    if(!user) {
        return res.status(401).json({
            message: "User account not found, create one!",
        });
    }

    const isPasswordValid = password == user.password;

    if(!isPasswordValid) {
        return res.status(401).json({
            message: "Invalid Password!",
        });
    }

    res.status(200),json({
        message: "User LoggedIn Successfully!",
    });
});


module.exports = router;