const express = require('express');
const productRoutes = require('./routes/product.route');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/products', productRoutes);

module.exports = app;