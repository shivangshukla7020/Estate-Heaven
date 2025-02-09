const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.get("/check-auth", (req, res) => {
    const token = req.cookies.token; // Get JWT from cookies

    if (!token) {
        console.log("Not authenticated");
        return res.status(401).json({ authenticated: false, message: "Not authenticated" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
        res.json({ authenticated: true, user: decoded }); // Send user data
    } catch (error) {
        return res.status(403).json({ authenticated: false, message: "Invalid token" });
    }
});

module.exports = router;
