import mongoose from "mongoose";
import "dotenv/config";
import connectDB from "./config/db.config.js";
import Subject from "./models/subject.model.js";
import Resource from "./models/resource.model.js";

const firstYearData = {
  CSE: {
    "1": [
      "Applied Mathematics", "Applied Physics", "Programming with C", "Cyber Security Awareness", "IT Workshop", "Introduction to Data Science", "Basics of Electrical and Electronics Engineering", "Electrical and Hybrid Vehicle Technology", "Energy Conversion Systems", "Introduction to Robotics", "Web Application Development", "Communication Skills",
    ],
    "2": [
      "Probability and Statistics", "Environmental Sciences", "Data Structures", "Cyber Security Awareness", "IT Workshop", "Introduction to Data Science", "Basics of Electrical and Electronics Engineering", "Electrical and Hybrid Vehicle Technology", "Energy Conversion Systems", "Introduction to Robotics", "Mobile Application Development", "Soft Skills and Personality Development",
    ],
  },
  "CSE-AI": {
    "1": [
      "Probability and Statistics", "Environmental Sciences", "Programming with Python", "Cyber Security Awareness", "Web Application Development", "Basics of Electrical and Electronics Engineering", "Electrical and Hybrid Vehicle Technology", "Energy Conversion Systems", "Introduction to Robotics", "IT Workshop", "Communication Skills",
    ],
    "2": [
      "Applied Mathematics", "Applied Physics", "Data Structures", "Cyber Security Awareness", "Web Application Development", "Basics of Electrical and Electronics Engineering", "Electrical and Hybrid Vehicle Technology", "Energy Conversion Systems", "Introduction to Robotics", "Introduction to Data Science", "Soft Skills and Personality Development",
    ],
  },
  ECE: {
    "1": [
      "Applied Mathematics", "Fundamentals of Electrical Sciences", "Signals and Systems", "Programming Fundamentals", "Cyber Security Awareness", "Web Application Development", "Introduction to Data Science", "Electrical and Hybrid Vehicle Technology", "Energy Conversion Systems", "Introduction to Robotics", "Electronics Workshop", "Communication Skills",
    ],
    "2": [
      "Environmental Sciences", "Applied Physics", "Network Analysis and Synthesis", "Programming Fundamentals", "Cyber Security Awareness", "Web Application Development", "Introduction to Data Science", "Electrical and Hybrid Vehicle Technology", "Energy Conversion Systems", "Introduction to Robotics", "IT Workshop", "Soft Skills and Personality Development",
    ],
  },
  "ECE-AI": {
    "1": [
      "Applied Mathematics", "Fundamentals of Electrical Sciences", "Signals and Systems", "Programming Fundamentals", "Cyber Security Awareness", "Web Application Development", "Introduction to Data Science", "Electrical and Hybrid Vehicle Technology", "Energy Conversion Systems", "Introduction to Robotics", "Electronics Workshop", "Communication Skills",
    ],
    "2": [
      "Environmental Sciences", "Applied Physics", "Network Analysis and Synthesis", "Programming Fundamentals", "Cyber Security Awareness", "Web Application Development", "Introduction to Data Science", "Electrical and Hybrid Vehicle Technology", "Energy Conversion Systems", "Introduction to Robotics", "IT Workshop", "Soft Skills and Personality Development",
    ],
  },
  IT: {
    "1": [
      "Applied Mathematics", "Applied Physics", "Programming with Python", "IT Workshop", "Basics of Electrical and Electronics Engineering", "Electrical and Hybrid Vehicle Technology", "Energy Conversion Systems", "Introduction to Robotics", "Web Application Development", "Communication Skills",
    ],
    "2": [
      "Probability and Statistics", "Environmental Sciences", "Object Oriented Programming", "IT Workshop", "Basics of Electrical and Electronics Engineering", "Electrical and Hybrid Vehicle Technology", "Energy Conversion Systems", "Introduction to Robotics", "Introduction to Data Science", "Soft Skills and Personality Development",
    ],
  },
  "AI&ML": {
    "1": [
      "Probability and Statistics", "Environmental Sciences", "Programming with Python", "IT Workshop", "Basics of Electrical and Electronics Engineering", "Electrical and Hybrid Vehicle Technology", "Energy Conversion Systems", "Introduction to Robotics", "Web Application Development", "Communication Skills",
    ],
    "2": [
      "Applied Mathematics", "Applied Physics", "Object Oriented Programming", "IT Workshop", "Basics of Electrical and Electronics Engineering", "Electrical and Hybrid Vehicle Technology", "Energy Conversion Systems", "Introduction to Robotics", "Introduction to Data Science", "Soft Skills and Personality Development",
    ],
  },
  "MAE/DMAM": {
    "1": [
      "Applied Mathematics", "Applied Physics", "Elements of Mechanical Engineering", "Basics of Electrical and Electronics Engineering", "Programming Fundamentals", "Introduction to Data Science", "Web Application Development", "Cyber Security Awareness", "Workshop Practice", "Communication Skills",
    ],
    "2": [
      "Probability and Statistics", "Environmental Sciences", "Engineering Mechanics", "Basics of Electrical and Electronics Engineering", "Programming Fundamentals", "Introduction to Data Science", "Web Application Development", "Cyber Security Awareness", "Engineering Graphics & CAD Modelling", "Soft Skills and Personality Development",
    ],
  },
};

const seedDB = async () => {
  await connectDB();
  try {
    await Subject.deleteMany({});
    await Resource.deleteMany({});
    console.log("Old data removed.");

    const subjectsToSave = [];

    for (const branch in firstYearData) {
        for (let year = 1; year <= 4; year++) {
            const sem1Number = year * 2 - 1;
            const sem2Number = year * 2;

            const sem1Subjects = firstYearData[branch]["1"];
            const sem2Subjects = firstYearData[branch]["2"];
            
            for (const name of sem1Subjects) {
                subjectsToSave.push({ name, branch, year, semester: sem1Number });
            }
            for (const name of sem2Subjects) {
                subjectsToSave.push({ name, branch, year, semester: sem2Number });
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