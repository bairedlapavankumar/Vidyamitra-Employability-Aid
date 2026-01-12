const User = require('../models/User');

// Basic GET for all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, '-password'); // Do NOT include password field!
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Example placeholder for fetching materials
exports.getAllMaterials = async (req, res) => {
  try {
    // If using MongoDB collection:
    // const materials = await Material.find();
    // res.json({ materials });

    // If using Google Drive: insert your fetch code here.
    res.json({ materials: [] });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
