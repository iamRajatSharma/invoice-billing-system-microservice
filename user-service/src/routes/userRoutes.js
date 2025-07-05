const express = require("express");
const { updateMyProfile, getMyProfile } = require("../controllers/authController");
const verifyToken = require("../middlewares/verifyToken")
const router = express.Router();

router.get("/me", verifyToken, getMyProfile);
router.patch("/me", verifyToken, updateMyProfile);

module.exports = router;
