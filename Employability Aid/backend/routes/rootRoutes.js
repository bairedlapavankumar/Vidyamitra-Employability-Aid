const express = require('express');
const router = express.Router();
const rootController = require('../controllers/rootController');
const protect = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const admin = roleMiddleware(['admin']);

router.get('/content', rootController.getContent);
router.post('/upload', protect, admin, rootController.uploadContent);
router.delete('/:filename', protect, admin, rootController.deleteContent);

module.exports = router;
