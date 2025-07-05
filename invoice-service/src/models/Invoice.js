const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    items: [
        {
            name: String,
            quantity: Number,
            price: Number
        }
    ],
    totalAmount: Number,
    status: { type: String, enum: ["paid", "unpaid"], default: "unpaid" }
}, { timestamps: true });

module.exports = mongoose.model("Invoice", invoiceSchema);
