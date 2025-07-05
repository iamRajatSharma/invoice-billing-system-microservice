const Payment = require("../models/Payment");

exports.makePayment = async (req, res) => {
    try {
        const { invoiceId, amount } = req.body;

        // Simulate payment logic
        const isSuccess = Math.random() > 0.2; // 80% success chance

        const payment = await Payment.create({
            userId: req.user,
            invoiceId,
            amount,
            status: isSuccess ? "success" : "failed"
        });

        // Later: Emit success event via RabbitMQ/Kafka if needed

        res.status(201).json(payment);
    } catch (err) {
        res.status(500).json({ msg: "Payment failed", error: err.message });
    }
};

exports.getMyPayments = async (req, res) => {
    try {
        const payments = await Payment.find({ userId: req.user });
        res.json(payments);
    } catch (err) {
        res.status(500).json({ msg: "Error fetching payments", error: err.message });
    }
};
