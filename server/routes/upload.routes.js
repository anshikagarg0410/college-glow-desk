import express from "express";
import multer from "multer";
import path from "path";
import { uploadFileResource, uploadLinkResource } from "../controllers/upload.controller.js";

const router = express.Router();

// --- Configuration for File Uploads ---
const storage = multer.diskStorage({
  destination: "./server/uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000 }, // 10MB limit
  fileFilter: function (req, file, cb) {
    const filetypes = /pdf/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    if (extname) {
      return cb(null, true);
    } else {
      cb("Error: PDFs Only!");
    }
  },
}).single("resourceFile");

// --- Routes ---

// FIX: This route is now specifically for file uploads
router.post("/file", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(400).json({ msg: err });
    }
    if (req.file === undefined) {
      return res.status(400).json({ msg: "Error: No File Selected!" });
    }
    // Call the dedicated file controller
    uploadFileResource(req, res);
  });
});

// FIX: Create a new route for link uploads
// We use multer().none() to parse the text fields from the multipart form data
router.post("/link", multer().none(), uploadLinkResource);

export default router;