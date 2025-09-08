import Resource from "../models/resource.model.js";
import Subject from "../models/subject.model.js";

// This function will now ONLY handle file uploads
export const uploadFileResource = async (req, res) => {
  const { branch, year, subjectName, resourceType, unit, title } = req.body;

  try {
    const subject = await Subject.findOne({
      name: subjectName,
      branch,
      year: parseInt(year),
    });

    if (!subject) {
      return res.status(404).json({ msg: "Subject not found" });
    }
    
    // This part requires a file
    if (!req.file) {
      return res.status(400).json({ msg: "File is required for this resource type" });
    }
    const fileUrl = `http://localhost:5000/uploads/${req.file.filename}`;
    
    const newResource = new Resource({
      subject: subject._id,
      type: resourceType,
      unit: parseInt(unit),
      title: title,
      link: fileUrl,
    });

    await newResource.save();

    res.json({
      msg: "Resource created successfully",
      resource: newResource,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Create a NEW function to handle link uploads
export const uploadLinkResource = async (req, res) => {
  const { branch, year, subjectName, resourceType, unit, title, videoUrl } =
    req.body;
  
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
      videoUrl: videoUrl,
    });

    await newResource.save();
    
    res.json({
      msg: "Resource created successfully",
      resource: newResource,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};