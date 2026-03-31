const express = require('express');
const {registerValidationRules} = require('./middleware/validator.middleware');

const app = express();
app.use(express.json());

app.post('/register', registerValidationRules, (req, res) => {
    const {userName, email, password} = req.body;
    res.status(201).json({
        message: 'User registered successfully',
        userName,
        email,
        password
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});