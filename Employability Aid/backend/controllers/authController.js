const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

// Allowed admins
const ALLOWED_ADMINS = [
  "pav63874@gmail.com",
  "dummy1@example.com",
  "dummy2@example.com"
];

// Register endpoint
exports.register = async (req, res) => {
  const { email, username, password, role } = req.body;
  try {
    // Check if email exists
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: 'Email already in use' });

    // Enforce Admin Restriction
    if (role === 'admin') {
      if (!ALLOWED_ADMINS.includes(email)) {
        return res.status(403).json({ message: 'You are not authorized to register as an admin.' });
      }
    }

    // Hash password and create user
    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ email, username, password: hashed, role });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error("Register Error:", err);
    try {
      const logPath = path.join(__dirname, '../error.log');
      const logMessage = `[${new Date().toISOString()}] Register Error: ${err.message}\nStack: ${err.stack}\n\n`;
      fs.appendFileSync(logPath, logMessage);
    } catch (logErr) {
      console.error("Failed to write to error log:", logErr);
    }
    res.status(500).json({ message: err.message || 'Internal error' });
  }
};



// Login endpoint
exports.login = async (req, res) => {
  const { email, password } = req.body;

  // HARDCODED ADMIN CREDENTIALS
  // You can change the password here directly in the code:
  const ADMIN_USERNAME = 'vidyamitraadmin';
  const ADMIN_PASSWORD = 'vtadmin@1992';

  // Hardcoded Admin Check
  if (email === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    const token = jwt.sign(
      { id: 'admin_id', email: ADMIN_USERNAME, role: 'admin' },
      process.env.JWT_SECRET || "7fb085e76285f3a8b47eb29ca649d48358e15f25767fc6ad2b78f0d1118bc36a",
      { expiresIn: "2h" }
    );
    return res.status(200).json({ token, role: 'admin' });
  }

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    // Issue JWT (use process.env.JWT_SECRET in production)
    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET || "7fb085e76285f3a8b47eb29ca649d48358e15f25767fc6ad2b78f0d1118bc36a",
      { expiresIn: "2h" }
    );

    res.status(200).json({ token, role: user.role });
  } catch (err) {
    console.error("Login Error:", err);
    try {
      const logPath = path.join(__dirname, '../error.log');
      const logMessage = `[${new Date().toISOString()}] Login Error: ${err.message}\nStack: ${err.stack}\n\n`;
      fs.appendFileSync(logPath, logMessage);
    } catch (logErr) {
      console.error("Failed to write to error log:", logErr);
    }
    res.status(500).json({ message: "Server error" });
  }
};
