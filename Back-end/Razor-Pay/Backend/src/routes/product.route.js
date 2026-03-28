const router = require("express").Router();
const productController = require("../controllers/product.controller");

router.post('/', productController.createProduct);
router.get('/get-item', productController.getItem);

module.exports = router;