const express = require("express");
const dotenv = require("dotenv");
const morgan = require('morgan')

dotenv.config()
const app = express();

// morgan(':method :url :status :res[content-length] - :response-time ms')

const database = require("./config/database")
const authRoutes = require("./routes/authRoutes");

app.use(express.json());

app.get("/health", (req, res) => {
    return res.status(200).json({
        status: 'OK',
        message: "Auth Service is up and running"
    })
})

app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log('Error' + err)
    } else {
        console.log(`Auth Service running on port ${process.env.PORT}`)
    }
});