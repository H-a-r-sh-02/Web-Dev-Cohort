const productModel = require("../models/product.model");

async function createProduct (req, res) {
const { image, title, description, price: {amount, currency} } = req.body;
try {
    const product = await productModel.create({
        image,
        title,
        description,
        price: {
            amount,
            currency,
        }
    });
    
    res.status(201).json({
        message: "Product Created Successfully",
        product
    });
} catch (error) {
    return res.status(500).json({
        message: "Error creating product",
        error: error.message
    });
}
}

async function getItem (req, res) {
    try {
        const product = await productModel.findOne()
        return res.status(200).json({
            message: "Product Fetched Successfully",
            product
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error fetching product",
            error: error.message
        });
    }
}

module.exports = { createProduct, getItem };
