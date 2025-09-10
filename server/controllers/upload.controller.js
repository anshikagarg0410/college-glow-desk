import Resource from "../models/resource.model.js";
import Subject from "../models/subject.model.js";

// Handles FILE uploads and saves to 'link' and 'cloudinary_id'
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
    if (!req.file) {
      return res.status(400).json({ msg: "File is required" });
    }

    const newResource = new Resource({
      subject: subject._id,
      type: resourceType,
      unit: parseInt(unit),
      title: title,
      link: req.file.path, // Save Cloudinary URL to the 'link' field
      cloudinary_id: req.file.filename, // Save the public_id for deletion
    });

    await newResource.save();
    res.json({ msg: "File resource created successfully", resource: newResource });

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
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