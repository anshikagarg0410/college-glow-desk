import Resource from "../models/resource.model.js";
import Subject from "../models/subject.model.js";

export const uploadResource = async (req, res) => {
  const { branch, year, subjectName, resourceType, unit, title, videoUrl } =
    req.body;

  if (resourceType !== "video" && !req.file) {
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

    let newResource;

    if (resourceType === "video") {
      newResource = new Resource({
        subject: subject._id,
        type: resourceType,
        unit: parseInt(unit),
        title: title,
        videoUrl: videoUrl,
      });
    } else {
      const fileUrl = `http://localhost:5000/uploads/${req.file.filename}`;
      newResource = new Resource({
        subject: subject._id,
        type: resourceType,
        unit: parseInt(unit),
        title: title,
        link: fileUrl,
      });
    }

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