const express = require("express");
const router = express.Router();
const { createInvoice, getMyInvoices } = require("../controllers/invoiceController");
const verifyToken = require("../middlewares/verifyToken");

router.post("/", verifyToken, createInvoice);
router.get("/", verifyToken, getMyInvoices);

module.exports = router;
