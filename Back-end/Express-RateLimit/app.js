const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();
const limiter = rateLimit({
    window: 1 * 60 * 1000, //1 minute
    max: 5,
    message: "Too many requests from this IP, please try again after 1 minute"
});

// we can use this as application level middleware or route level middleware
app.use(limiter);

app.post('/api/auth/register', (req, res) => {
    res.status(201).json({
        message: "User Registered Successfully",
    });
})

app.listen(3000, ()=>{
    console.log("server is running on port 3000");
});