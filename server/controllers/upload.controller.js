import Resource from "../models/resource.model.js";
import Subject from "../models/subject.model.js";
import { cloudinary } from "../config/cloudinary.config.js";

// Handles FILE uploads and saves to 'link' and 'cloudinary_id'
export const uploadFileResource = async (req, res) => {
  const { branch, year, subjectName, resourceType, unit, title } = req.body;

  try {
    console.log("Upload request received:", { branch, year, subjectName, resourceType, unit, title });
    console.log("File info:", req.file ? {
      originalname: req.file.originalname,
      mimetype: req.file.mimetype,
      size: req.file.size,
      path: req.file.path,
      public_id: req.file.public_id
    } : "No file");

    // Check if there was a multer error
    if (req.fileError) {
      console.log("Multer error:", req.fileError);
      return res.status(400).json({ msg: req.fileError.message });
    }

    const subject = await Subject.findOne({
      name: subjectName,
      branch,
      year: parseInt(year),
    });

    if (!subject) {
      console.log("Subject not found:", { subjectName, branch, year });
      return res.status(404).json({ msg: "Subject not found" });
    }
    
    if (!req.file) {
      console.log("No file provided in request");
      return res.status(400).json({ msg: "File is required" });
    }

    // Upload file directly to Cloudinary using memory storage
    console.log("Uploading file to Cloudinary...");
    let fileUrl, publicId;
    
    try {
      const fileName = req.file.originalname.split('.').slice(0, -1).join('.');
      const public_id = `${fileName}-${Date.now()}`;
      
      // Convert buffer to base64 for Cloudinary upload
      const base64String = req.file.buffer.toString('base64');
      const dataUri = `data:${req.file.mimetype};base64,${base64String}`;
      
      // Upload PDFs as image resource type with specific format handling
      const uploadResult = await cloudinary.uploader.upload(dataUri, {
        folder: 'college-glow-desk',
        public_id: public_id,
        resource_type: 'image',
        format: 'pdf',
        quality: 'auto',
        flags: 'attachment'
      });
      
      fileUrl = uploadResult.secure_url;
      publicId = uploadResult.public_id;
      console.log("Cloudinary upload successful:", fileUrl);
      
    } catch (cloudinaryError) {
      console.error("Cloudinary upload failed:", cloudinaryError);
      return res.status(500).json({ 
        msg: "File upload failed", 
        error: cloudinaryError.message 
      });
    }

    const newResource = new Resource({
      subject: subject._id,
      type: resourceType,
      unit: parseInt(unit),
      title: title,
      link: fileUrl, // Save Cloudinary URL to the 'link' field
      cloudinary_id: publicId, // Save the public_id for deletion
    });

    await newResource.save();
    console.log("Resource saved successfully:", newResource);
    res.json({ msg: "File resource created successfully", resource: newResource });

  } catch (err) {
    console.error("Upload error:", err.message);
    console.error("Full error:", err);
    res.status(500).json({ msg: "Server Error", error: err.message });
  }
};

// Handles LINK uploads and saves to 'videoUrl'
export const uploadLinkResource = async (req, res) => {
  const { branch, year, subjectName, resourceType, unit, title, videoUrl } = req.body;

  try {
    const subject = await Subject.findOne({
      name: subjectName,
      branch,
      year: parseInt(year),
    });

    if (!subject) {
      return res.status(404).json({ msg: "Subject not found" });
    }
    if (!videoUrl) {
      return res.status(400).json({ msg: "Video URL is required" });
    }

    const newResource = new Resource({
      subject: subject._id,
      type: resourceType,
      unit: parseInt(unit),
      title: title,
      videoUrl: videoUrl, // Save the video URL to the 'videoUrl' field
    });

    await newResource.save();
    res.json({ msg: "Link resource created successfully", resource: newResource });
    
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};