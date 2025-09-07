import Subject from "../models/subject.model.js";
import Resource from "../models/resource.model.js";

// @desc    Get subjects by branch and year
// @route   GET /api/academic/subjects
// @access  Public
export const getSubjects = async (req, res) => {
  try {
    const { branch, year } = req.query;
    if (!branch || !year) {
      return res.status(400).json({ msg: "Please provide branch and year" });
    }

    const subjects = await Subject.find({ branch, year });

    // The frontend expects two semesters based on the year.
    // Assuming 1st year has sem 1 & 2, 2nd year has sem 3 & 4 etc.
    const firstSem = parseInt(year) * 2 - 1;
    const secondSem = parseInt(year) * 2;

    const semesters = {
      sem1: subjects.filter((s) => s.semester === firstSem),
      sem2: subjects.filter((s) => s.semester === secondSem),
    };

    res.json(semesters);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @desc    Get resources for a subject by details
// @route   GET /api/academic/resources
// @access  Public
export const getResourcesByDetails = async (req, res) => {
  try {
    const { branch, year, subjectName, resourceType } = req.query;
    if (!branch || !year || !subjectName || !resourceType) {
      return res
        .status(400)
        .json({ msg: "Please provide all required parameters" });
    }

    const subject = await Subject.findOne({
      name: subjectName,
      branch,
      year: parseInt(year),
    });

    if (!subject) {
      return res.status(404).json({ msg: "Subject not found" });
    }

    const resources = await Resource.find({
      subject: subject._id,
      type: resourceType,
    }).sort("unit");

    // For now, returning placeholder data as we haven't seeded actual resources
    if (resources.length === 0) {
      const placeholderResources = [
        { unit: 1, title: `Unit 1: Introduction to ${subjectName}`, link: "#" },
        {
          unit: 2,
          title: `Unit 2: Core Concepts of ${subjectName}`,
          link: "#",
        },
        {
          unit: 3,
          title: `Unit 3: Advanced Topics in ${subjectName}`,
          link: "#",
        },
        {
          unit: 4,
          title: `Unit 4: Applications of ${subjectName}`,
          link: "#",
        },
      ];
      return res.json(placeholderResources);
    }

    res.json(resources);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};