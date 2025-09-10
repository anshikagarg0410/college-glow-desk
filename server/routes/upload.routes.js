import express from 'express';
import { uploadFileResource, uploadLinkResource } from '../controllers/upload.controller.js';
import upload from '../config/cloudinary.config.js'; // Your Cloudinary multer config

const router = express.Router();

// Route for UPLOADING FILES (e.g., PDFs, images)
// This uses the 'upload' middleware to handle the file and send it to Cloudinary
router.post('/upload-file', upload.single('resourceFile'), uploadFileResource);

// Route for UPLOADING LINKS (e.g., YouTube videos)
// This does NOT need the multer middleware because there is no file
router.post('/upload-link', uploadLinkResource);

export default router;