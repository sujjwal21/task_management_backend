const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");
const authenticate = require("../middleware/authMiddleware");

const router = express.Router();

// Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);

// Test Authentication
router.get("/me", authenticate, (req, res) => {
  res.json({ message: "Authenticated", user: req.user });
});

module.exports = router;