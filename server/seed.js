import mongoose from "mongoose";
import "dotenv/config";
import connectDB from "./config/db.config.js";
import Subject from "./models/subject.model.js";
import Resource from "./models/resource.model.js";

const allData = {
  "1": { // First Year Data
    CSE: {
      "1": [
        "Applied Mathematics", "Applied Physics", "Programming with C", "Cyber Security Awareness", "IT Workshop", "Introduction to Data Science", "Basics of Electrical and Electronics Engineering", "Communication Skills",
      ],
      "2": [
        "Probability and Statistics", "Environmental Sciences", "Data Structures", "Web Application Development", "Soft Skills and Personality Development",
      ],
    },
    "CSE-AI": {
       "1": [
        "Probability and Statistics", "Environmental Sciences", "Programming with Python", "Cyber Security Awareness", "Web Application Development", "Basics of Electrical and Electronics Engineering", "IT Workshop", "Communication Skills",
      ],
      "2": [
        "Applied Mathematics", "Applied Physics", "Data Structures", "Introduction to Data Science", "Soft Skills and Personality Development",
      ],
    },
    ECE: {
      "1": [
        "Applied Mathematics", "Fundamentals of Electrical Sciences", "Signals and Systems", "Programming Fundamentals", "Cyber Security Awareness", "Web Application Development", "Electronics Workshop", "Communication Skills",
      ],
      "2": [
        "Environmental Sciences", "Applied Physics", "Network Analysis and Synthesis", "Introduction to Data Science", "IT Workshop", "Soft Skills and Personality Development",
      ],
    },
    "ECE-AI": {
       "1": [
        "Applied Mathematics", "Fundamentals of Electrical Sciences", "Signals and Systems", "Programming Fundamentals", "Cyber Security Awareness", "Web Application Development", "Electronics Workshop", "Communication Skills",
      ],
      "2": [
        "Environmental Sciences", "Applied Physics", "Network Analysis and Synthesis", "Introduction to Data Science", "IT Workshop", "Soft Skills and Personality Development",
      ],
    },
    IT: {
      "1": [
        "Applied Mathematics", "Applied Physics", "Programming with Python", "IT Workshop", "Basics of Electrical and Electronics Engineering", "Web Application Development", "Communication Skills",
      ],
      "2": [
        "Probability and Statistics", "Environmental Sciences", "Object Oriented Programming", "Introduction to Data Science", "Soft Skills and Personality Development",
      ],
    },
    "AI&ML": {
      "1": [
        "Probability and Statistics", "Environmental Sciences", "Programming with Python", "IT Workshop", "Basics of Electrical and Electronics Engineering", "Web Application Development", "Communication Skills",
      ],
      "2": [
        "Applied Mathematics", "Applied Physics", "Object Oriented Programming", "Introduction to Data Science", "Soft Skills and Personality Development",
      ],
    },
    "MAE/DMAM": {
       "1": [
        "Applied Mathematics", "Applied Physics", "Elements of Mechanical Engineering", "Basics of Electrical and Electronics Engineering", "Programming Fundamentals", "Introduction to Data Science", "Web Application Development", "Workshop Practice", "Communication Skills",
      ],
      "2": [
        "Probability and Statistics", "Environmental Sciences", "Engineering Mechanics", "Engineering Graphics & CAD Modelling", "Soft Skills and Personality Development",
      ],
    },
  },
  "2": { // Second Year Data
    CSE: {
      "3": ["Computer Organization", "Operating Systems", "Design and Analysis of Algorithms", "Object-Oriented Programming"],
      "4": ["Data Communications", "Database Management Systems", "Software Engineering", "Theory of Computation"],
    },
    "CSE-AI": {
      "3": ["Operating Systems", "Database Management Systems", "Artificial Intelligence", "Machine Learning"],
      "4": ["Computer Networks", "Deep Learning", "Natural Language Processing", "Data Science"],
    },
    ECE: {
        "3": ["Analog Electronic Circuits", "Digital Logic Design", "Signals & Systems", "Network Analysis"],
        "4": ["Microcontrollers", "Analog Communication", "Digital Signal Processing", "Electromagnetic Field Theory"],
    },
    "ECE-AI": {
        "3": ["Analog and Digital Electronics", "Data Structures for AI", "Machine Learning", "Signals and Systems"],
        "4": ["Deep Learning", "Computer Vision", "Embedded Systems for AI", "Robotics"],
    },
    IT: {
      "3": ["Internet Working Essentials", "Operating Systems", "Data Structures and Algorithms", "Computer Networks"],
      "4": ["Artificial Intelligence", "Programming in Java", "Database Management Systems", "Software Engineering"],
    },
    "AI&ML": {
      "3": ["Data Structures and Algorithms", "Operating System", "Python Programming", "Database Management System"],
      "4": ["Java Programming", "Computer Organization and Architecture", "Applied Statistical Techniques", "Machine Learning"],
    },
    "MAE/DMAM": {
        "3": ["Thermodynamics", "Fluid Mechanics", "Strength of Materials", "Manufacturing Processes"],
        "4": ["Heat Transfer", "Machine Design", "Control Systems", "Dynamics of Machinery"],
    },
  },
};

const seedDB = async () => {
  await connectDB();
  try {
    await Subject.deleteMany({});
    await Resource.deleteMany({});
    console.log("Old data removed.");

    const subjectsToSave = [];

    // Loop through each year in allData (1 and 2)
    for (const year in allData) {
      const yearData = allData[year];
      // Loop through each branch (CSE, ECE, etc.)
      for (const branch in yearData) {
        const branchData = yearData[branch];
        // Loop through each semester (1, 2, 3, 4)
        for (const semester in branchData) {
          const subjects = branchData[semester];
          for (const name of subjects) {
            subjectsToSave.push({
              name,
              branch,
              year: parseInt(year),
              semester: parseInt(semester),
            });
          }
        }
      }
    }

    await Subject.insertMany(subjectsToSave);
    console.log("Database seeded successfully for all years!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    mongoose.connection.close();
  }
};

seedDB();