const express = require("express");
const router = express.Router();
const { makePayment, getMyPayments } = require("../controllers/paymentController");
const verifyToken = require("../middlewares/verifyToken");

router.post("/", verifyToken, makePayment);
router.get("/", verifyToken, getMyPayments);

module.exports = router;
