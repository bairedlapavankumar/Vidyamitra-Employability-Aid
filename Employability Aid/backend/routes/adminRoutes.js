const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');

// Only allow admins!!
router.get('/users', authMiddleware, adminController.getAllUsers);
router.get('/materials', authMiddleware, adminController.getAllMaterials);

module.exports = router;
