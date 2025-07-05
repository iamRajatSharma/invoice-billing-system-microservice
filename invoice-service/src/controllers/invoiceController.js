const Invoice = require("../models/Invoice");

exports.createInvoice = async (req, res) => {
    try {
        const invoice = await Invoice.create({
            userId: req.user,
            items: req.body.items,
            totalAmount: req.body.totalAmount,
            status: req.body.status || "unpaid"
        });
        res.status(201).json(invoice);
    } catch (err) {
        res.status(500).json({ msg: "Error creating invoice", error: err.message });
    }
};

exports.getMyInvoices = async (req, res) => {
    try {
        const invoices = await Invoice.find({ userId: req.user });
        res.json(invoices);
    } catch (err) {
        res.status(500).json({ msg: "Error fetching invoices", error: err.message });
    }
};
