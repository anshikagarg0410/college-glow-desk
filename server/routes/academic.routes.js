import express from "express";
import {
  getSubjects,
  getResourcesByDetails,
  deleteResource,
} from "../controllers/academic.controller.js";

const router = express.Router();

// @route   GET /api/academic/subjects
// @desc    Get subjects by branch and year
// @access  Public
router.get("/subjects", getSubjects);

// @route   GET /api/academic/resources
// @desc    Get resources for a subject by details
// @access  Public
router.get("/resources", getResourcesByDetails);
router.delete("/resources/:id", deleteResource);

export default router;