const router = require("express").Router();
const paymentController = require("../controllers/payment.controller");

router.post("/create-order", paymentController.createOrder);
router.post("/verify", paymentController.verifyPayment);

module.exports = router;