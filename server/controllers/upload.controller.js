import Resource from "../models/resource.model.js";
import Subject from "../models/subject.model.js";

export const uploadResource = async (req, res) => {
  const { branch, year, subjectName, resourceType, unit, title } = req.body;

  if (!req.file) {
    return res.status(400).json({ msg: "File is required" });
  }

  try {
    const subject = await Subject.findOne({
      name: subjectName,
      branch,
      year: parseInt(year),
    });

    if (!subject) {
      return res.status(404).json({ msg: "Subject not found" });
    }

    const newResource = new Resource({
      subject: subject._id,
      type: resourceType,
      unit: parseInt(unit),
      title: title,
      link: `/uploads/${req.file.filename}`, // Path to the uploaded file
    });

    await newResource.save();

    res.json({
      msg: "File uploaded and resource created successfully",
      resource: newResource,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};