import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';

// Configure Cloudinary with credentials from environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure Cloudinary storage for Multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'college-glow-desk', // Optional: folder name in Cloudinary
    allowed_formats: ['pdf', 'jpg', 'png', 'jpeg', 'gif'], // Specify allowed file formats
    resource_type: 'auto', // Let Cloudinary auto-detect the resource type
    // You can add a public_id transformation to name files uniquely
    public_id: (req, file) => {
      // You can use the original filename or create a unique one
      const fileName = file.originalname.split('.').slice(0, -1).join('.');
      return `${fileName}-${Date.now()}`;
    },
  },
});

// Create the Multer upload instance
const upload = multer({ storage: storage });

export default upload;