const express = require("express");
const dotenv = require("dotenv");
dotenv.config()
const app = express();

const database = require("./config/database")
const authRoutes = require("./routes/authRoutes");

app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, () =>
    console.log(`Auth Service running on port ${process.env.PORT}`)
);