const express = require("express");
const dotenv = require("dotenv");

dotenv.config()
const app = express();

// morgan(':method :url :status :res[content-length] - :response-time ms')

const database = require("./config/database")
const router = require("./routes/paymentRoutes");

app.use(express.json());

app.get("/health", (req, res) => {
    return res.status(200).json({
        status: 'OK',
        message: "Payment Service is up and running"
    })
})

app.use("/api/payment", router);

app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log('Error' + err)
    } else {
        console.log(`Payment Service running on port ${process.env.PORT}`)
    }
});