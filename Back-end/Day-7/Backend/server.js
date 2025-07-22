require('dotenv').config();
const app = require('./src/app');
const connectToDb = require('./src/db/db');
const port = process.env.PORT || 3000;

connectToDb();

app.get("/healthz", (req, res) => res.send("OK"));
app.get('/', (req, res)=>{

});

app.listen(port, '0.0.0.0', ()=>{
    console.log(`Server is running on ${port}!`);
}); 