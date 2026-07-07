const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.status(200).json({message: "hello!, world"});
})

app.listen(3000, () => {
    console.log('server is running on port 3000');
});