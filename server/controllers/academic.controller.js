import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import Subject from "../models/subject.model.js";
import Resource from "../models/resource.model.js";
import { v2 as cloudinary } from 'cloudinary'; // Make sure to import cloudinary at the top

// Helper to get the correct directory path in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
      // Return empty array if subject not found, which is a valid case
      return res.json([]);
    }

    const resources = await Resource.find({
      subject: subject._id,
      type: resourceType,
    }).sort("unit");

    res.json(resources);
  } catch (err)
  {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @desc    Delete a resource by ID
// @route   DELETE /api/academic/resources/:id
// @access  Private (You should add authentication for this)
// @desc    Delete a resource by ID
// @route   DELETE /api/academic/resources/:id
// @access  Private
export const deleteResource = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);

    if (!resource) {
      return res.status(404).json({ msg: 'Resource not found' });
    }

    // --- STEP 1: Delete from Cloudinary (if it's a file) ---
    if (resource.cloudinary_id) {
      await cloudinary.uploader.destroy(resource.cloudinary_id);
    }

    // --- STEP 2: Delete from the database ---
    await Resource.findByIdAndDelete(req.params.id);

    res.json({ msg: 'Resource removed successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error: Could not delete resource');
  }
};