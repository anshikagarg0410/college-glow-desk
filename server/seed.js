import mongoose from "mongoose";
import "dotenv/config";
import connectDB from "./config/db.config.js";
import Subject from "./models/subject.model.js";
import Resource from "./models/resource.model.js";

const allData = {
  "1": { // First Year Data
    "CSE": {
      "1": [
        "Applied Mathematics", "Applied Physics", "Programming with C",   "Basics of Electrical and Electronics Engineering", "Communication Skills","Web Application Development"
      ],
      "2": [
        "Probability and Statistics", "Environmental Sciences", "Data Structures", "Web Application Development", "Soft Skills and Personality Development",
      ],
    },
    "CSE-AI": {
       "1": [
        "Probability and Statistics", "Environmental Sciences", "Programming with Python", "Basics of Electrical and Electronics Engineering", "IT Workshop", "Communication Skills",
      ],
      "2": [
        "Applied Mathematics", "Applied Physics", "Data Structures", "Introduction to Data Science", "Soft Skills and Personality Development",
      ],
    },
    "ECE": {
      "1": [
        "Applied Mathematics", "Fundamentals of Electrical Sciences", "Signals and Systems",  "Electronics Workshop", "Communication Skills",
      ],
      "2": [
        "Environmental Sciences", "Applied Physics", "Network Analysis and Synthesis", "Introduction to Data Science", "IT Workshop", "Soft Skills and Personality Development",
      ],
    },
    "ECE-AI": {
       "1": [
        "Applied Mathematics",  "Fundamentals of Electrical Sciences","Programming with Python","Electronics Workshop", "Communication Skills","Signals and Systems",
      ],
      "2": [
        "Environmental Sciences", "Applied Physics", "Network Analysis and Synthesis", "Introduction to Data Science", "IT Workshop", "Soft Skills and Personality Development",
      ],
    },
    "IT": {
      "1": [
        "Applied Mathematics", "Applied Physics", "Programming with Python", "IT Workshop",  "Web Application Development", "Communication Skills",
      ],
      "2": [
        "Probability and Statistics", "Environmental Sciences", "Object Oriented Programming", "CAD Modelling","Introduction to Data Science", "Soft Skills and Personality Development",
      ],
    },
    "AI&ML": {
      "1": [
        "Probability and Statistics", "Environmental Sciences", "Programming with Python",  "Basics of Electrical and Electronics Engineering", "Web Application Development", "Communication Skills",
      ],
      "2": [
        "Applied Mathematics", "Applied Physics", "Object Oriented Programming", "Introduction to Data Science", "Soft Skills and Personality Development",
      ],
    },
    "MAE/DMAM": {
       "1": [
        "Applied Mathematics", "Applied Physics", "Elements of Mechanical Engineering", "Basics of Electrical and Electronics Engineering", "Workshop Practice", "Communication Skills",
      ],
      "2": [
        "Probability and Statistics", "Environmental Sciences", "Engineering Mechanics", "Engineering Graphics & CAD Modelling", "Soft Skills and Personality Development",
      ],
    },
  },
  "2": { // Second Year Data
    "CSE": {
      "3": ["Discrete Mathematics", "Operations Management", "IKS","Introduction to Internet of Things", "Design and Analysis of Algorithms", "Software Engineering"],
      "4": ["Database Management Systems", "Computer Organization and Architecture", "Operating Systems", "Advanced IoT and Real World Applications"]
    },
    "CSE-AI": {
      "3": ["Discrete Mathematics ", "Database Management Systems", "Artificial Intelligence", "Operations Management","IKS","Object Oriented Programming"],
      "4": ["Computer Networks", "Design and Analysis of Algorithms", "Operating Systems", "Open Soured Technologies" ],
    },
    "ECE": {
        "3": ["Analog Communication Systems", "Digital System Design", "Numerical Techniques for Engineers", "Electronics Circuit Simulation Workshop","Advanced Electronic Workshop " ],
        "4": ["Electromagnetic Field Theory & Antenna", "Analog Electronics", "Digital Communication Systems", "Control Systems "],
    },
    "ECE-AI": {
        "3": ["Numerical Techniques for Engineers", "Analog & Digital Electronics", "Data Structures and Algorithm", "IKS","Electronics Circuit Simulation Workshop","Advanced Electronic Workshop"],
        "4": ["Analog Communication Systems", "Computer Organization and Architecture", "Artificial Intelligence", "Design and Analysis of Algorithms" ],
    },
    "IT": {
      "3": ["Discrete Mathematics", "Database Management Systems", "Data Structures and Algorithms", "Operations Management","Ergonomic Design","Open Source Technologies" ],
      "4": ["Design and Analysis of Algorithms", "Operating Systems", "Software Engineering", "Fundamentals of Devops"],
    },
    "AI&ML": {
      "3": ["Data Structures and Algorithms", "Discrete Mathematics", "IKS","Open Source Technologies", "Database Management System"],
      "4": ["Design and Analysis of Algorithms", "Operating Systems", "Fundamentals of Devops", "Artificial Intelligence"],
    },
    "MAE/DMAM": {
        "3": ["Numerical Techniques for Engineers", "Production Technology - I", "Engineering Materials", "Machine Drawing Lab","Robotics Lab","IKS","Thermal Engineering - I"],
        "4": ["Thermal Engineering - II", "Production Technology - II", "Theory of Machines", "Strength of Materials","IoT Lab","IKS","Fluid Mechanics and Hydraulic Machines"],
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