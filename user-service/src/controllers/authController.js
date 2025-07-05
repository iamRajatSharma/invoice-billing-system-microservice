const User = require("../models/User");

exports.getMyProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user).select({ _id: 1, name: 1, email: 1, createdAt: 1 });
        if (!user) return res.status(404).json({ msg: "User not found" });
        res.json(user);
    } catch (err) {
        res.status(500).json({ msg: "Server error", error: err.message });
    }
};

exports.updateMyProfile = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.user, req.body, { new: true });
        if (!user) return res.status(404).json({ msg: "User not found" });
        res.json(user);
    } catch (err) {
        res.status(500).json({ msg: "Server error", error: err.message });
    }
};
