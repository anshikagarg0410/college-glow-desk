import express from 'express';
import { uploadFileResource, uploadLinkResource } from '../controllers/upload.controller.js';
import upload from '../config/cloudinary.config.js'; // Your Cloudinary multer config

const router = express.Router();

// Route for UPLOADING FILES (e.g., PDFs, images)
// This uses the 'upload' middleware to handle the file and send it to Cloudinary
router.post('/upload-file', upload.single('resourceFile'), uploadFileResource);

// Route for UPLOADING LINKS (e.g., YouTube videos)
// Parse multipart form fields without files since frontend sends FormData
router.post('/upload-link', upload.none(), uploadLinkResource);

export default router;