const express = require('express');
const router = express.Router();
const cloudinaryController = require('../controllers/cloudinaryController');

// List all subfolders
router.get('/folders', cloudinaryController.listFolders);

// List all materials
router.get('/materials', cloudinaryController.listMaterials);

// Upload material
router.post('/upload', cloudinaryController.uploadMiddleware, cloudinaryController.uploadMaterial);

// Proxy download
router.get('/proxy-download', cloudinaryController.proxyDownload);

// Delete material
router.delete('/delete/:id', cloudinaryController.deleteMaterial);

module.exports = router;
