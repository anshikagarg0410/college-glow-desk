import express from "express";
import multer from "multer";
import path from "path";
import { uploadResource } from "../controllers/upload.controller.js";

const router = express.Router();

// Set up storage engine for multer
const storage = multer.diskStorage({
  destination: "./server/uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// Init upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000 }, // 10MB limit
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).single("resourceFile"); // 'resourceFile' is the name of the input field in the form

// Check File Type
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /pdf/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: PDFs Only!");
  }
}

router.post("/", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(400).json({ msg: err });
    }
    if (req.file == undefined) {
      return res.status(400).json({ msg: "Error: No File Selected!" });
    }
    uploadResource(req, res);
  });
});

export default router;