import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BookOpen, ArrowRight, GraduationCap } from "lucide-react";

const AcademicResources = () => {
  const [selectedBranch, setSelectedBranch] = useState("CSE");
  const [selectedYear, setSelectedYear] = useState("1");

  const branches = [
    "CSE",
    "CSE-AI",
    "ECE",
    "ECE-AI",
    "IT",
    "AI&ML",
    "MAE/DMAM",
  ];

  const years = [
    { value: "1", label: "1st Year" },
    { value: "2", label: "2nd Year" },
    { value: "3", label: "3rd Year" },
    { value: "4", label: "4th Year" },
  ];

  const subjectData = {
    CSE: {
      "1": {
        "1": [
          "Applied Mathematics",
          "Applied Physics",
          "Programming with C",
          "Cyber Security Awareness",
          "IT Workshop",
          "Introduction to Data Science",
          "Basics of Electrical and Electronics Engineering",
          "Electrical and Hybrid Vehicle Technology",
          "Energy Conversion Systems",
          "Introduction to Robotics",
          "Web Application Development",
          "Communication Skills",
        ],
        "2": [
          "Probability and Statistics",
          "Environmental Sciences",
          "Data Structures",
          "Cyber Security Awareness",
          "IT Workshop",
          "Introduction to Data Science",
          "Basics of Electrical and Electronics Engineering",
          "Electrical and Hybrid Vehicle Technology",
          "Energy Conversion Systems",
          "Introduction to Robotics",
          "Mobile Application Development",
          "Soft Skills and Personality Development",
        ],
      },
    },
    "CSE-AI": {
      "1": {
        "1": [
          "Probability and Statistics",
          "Environmental Sciences",
          "Programming with Python",
          "Cyber Security Awareness",
          "Web Application Development",
          "Basics of Electrical and Electronics Engineering",
          "Electrical and Hybrid Vehicle Technology",
          "Energy Conversion Systems",
          "Introduction to Robotics",
          "IT Workshop",
          "Communication Skills",
        ],
        "2": [
          "Applied Mathematics",
          "Applied Physics",
          "Data Structures",
          "Cyber Security Awareness",
          "Web Application Development",
          "Basics of Electrical and Electronics Engineering",
          "Electrical and Hybrid Vehicle Technology",
          "Energy Conversion Systems",
          "Introduction to Robotics",
          "Introduction to Data Science",
          "Soft Skills and Personality Development",
        ],
      },
    },
    ECE: {
      "1": {
        "1": [
          "Applied Mathematics",
          "Fundamentals of Electrical Sciences",
          "Signals and Systems",
          "Programming Fundamentals",
          "Cyber Security Awareness",
          "Web Application Development",
          "Introduction to Data Science",
          "Electrical and Hybrid Vehicle Technology",
          "Energy Conversion Systems",
          "Introduction to Robotics",
          "Electronics Workshop",
          "Communication Skills",
        ],
        "2": [
          "Environmental Sciences",
          "Applied Physics",
          "Network Analysis and Synthesis",
          "Programming Fundamentals",
          "Cyber Security Awareness",
          "Web Application Development",
          "Introduction to Data Science",
          "Electrical and Hybrid Vehicle Technology",
          "Energy Conversion Systems",
          "Introduction to Robotics",
          "IT Workshop",
          "Soft Skills and Personality Development",
        ],
      },
    },
    "ECE-AI": {
      "1": {
        "1": [
          "Applied Mathematics",
          "Fundamentals of Electrical Sciences",
          "Signals and Systems",
          "Programming Fundamentals",
          "Cyber Security Awareness",
          "Web Application Development",
          "Introduction to Data Science",
          "Electrical and Hybrid Vehicle Technology",
          "Energy Conversion Systems",
          "Introduction to Robotics",
          "Electronics Workshop",
          "Communication Skills",
        ],
        "2": [
          "Environmental Sciences",
          "Applied Physics",
          "Network Analysis and Synthesis",
          "Programming Fundamentals",
          "Cyber Security Awareness",
          "Web Application Development",
          "Introduction to Data Science",
          "Electrical and Hybrid Vehicle Technology",
          "Energy Conversion Systems",
          "Introduction to Robotics",
          "IT Workshop",
          "Soft Skills and Personality Development",
        ],
      },
    },
    IT: {
      "1": {
        "1": [
          "Applied Mathematics",
          "Applied Physics",
          "Programming with Python",
          "IT Workshop",
          "Basics of Electrical and Electronics Engineering",
          "Electrical and Hybrid Vehicle Technology",
          "Energy Conversion Systems",
          "Introduction to Robotics",
          "Web Application Development",
          "Communication Skills",
        ],
        "2": [
          "Probability and Statistics",
          "Environmental Sciences",
          "Object Oriented Programming",
          "IT Workshop",
          "Basics of Electrical and Electronics Engineering",
          "Electrical and Hybrid Vehicle Technology",
          "Energy Conversion Systems",
          "Introduction to Robotics",
          "Introduction to Data Science",
          "Soft Skills and Personality Development",
        ],
      },
    },
    "AI&ML": {
      "1": {
        "1": [
          "Probability and Statistics",
          "Environmental Sciences",
          "Programming with Python",
          "IT Workshop",
          "Basics of Electrical and Electronics Engineering",
          "Electrical and Hybrid Vehicle Technology",
          "Energy Conversion Systems",
          "Introduction to Robotics",
          "Web Application Development",
          "Communication Skills",
        ],
        "2": [
          "Applied Mathematics",
          "Applied Physics",
          "Object Oriented Programming",
          "IT Workshop",
          "Basics of Electrical and Electronics Engineering",
          "Electrical and Hybrid Vehicle Technology",
          "Energy Conversion Systems",
          "Introduction to Robotics",
          "Introduction to Data Science",
          "Soft Skills and Personality Development",
        ],
      },
    },
    "MAE/DMAM": {
      "1": {
        "1": [
          "Applied Mathematics",
          "Applied Physics",
          "Elements of Mechanical Engineering",
          "Basics of Electrical and Electronics Engineering",
          "Programming Fundamentals",
          "Introduction to Data Science",
          "Web Application Development",
          "Cyber Security Awareness",
          "Workshop Practice",
          "Communication Skills",
        ],
        "2": [
          "Probability and Statistics",
          "Environmental Sciences",
          "Engineering Mechanics",
          "Basics of Electrical and Electronics Engineering",
          "Programming Fundamentals",
          "Introduction to Data Science",
          "Web Application Development",
          "Cyber Security Awareness",
          "Engineering Graphics & CAD Modelling",
          "Soft Skills and Personality Development",
        ],
      },
    },
  };

  const getSubjects = () => {
    const branchData = subjectData[selectedBranch as keyof typeof subjectData];
    if (!branchData) return { sem1: [], sem2: [] };

    const yearData = branchData[selectedYear as keyof typeof branchData];
    if (!yearData) return { sem1: [], sem2: [] };

    const semesterKeys = Object.keys(yearData);
    return {
      sem1: yearData[semesterKeys[0] as keyof typeof yearData] || [],
      sem2: yearData[semesterKeys[1] as keyof typeof yearData] || [],
    };
  };

  const subjects = getSubjects();

  const ResourceCard = ({ subject }: { subject: string }) => (
    <Card className="p-6 hover:shadow-academic transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">{subject}</h3>
            <Badge variant="secondary" className="mb-3">
              {selectedBranch} - Year {selectedYear}
            </Badge>
          </div>
          <BookOpen className="h-6 w-6 text-primary" />
        </div>
      </div>
      <div className="mt-4">
        <Button asChild className="w-full">
          <Link
            to={`/academic/${encodeURIComponent(
              selectedBranch
            )}/${encodeURIComponent(selectedYear)}/${encodeURIComponent(
              subject
            )}`}
          >
            View Resources
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="h-10 w-10 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">
              Academic Resources
            </h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Access comprehensive study materials for all subjects and branches
          </p>
        </div>

        {/* Filters */}
        <Card className="p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">
                Select Branch
              </label>
              <Select value={selectedBranch} onValueChange={setSelectedBranch}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose your branch" />
                </SelectTrigger>
                <SelectContent>
                  {branches.map((branch) => (
                    <SelectItem key={branch} value={branch}>
                      {branch}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">
                Select Year
              </label>
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year.value} value={year.value}>
                      {year.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        {/* Subject Resources */}
        <Tabs defaultValue="sem1" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="sem1">
              Semester {parseInt(selectedYear) * 2 - 1}
            </TabsTrigger>
            <TabsTrigger value="sem2">
              Semester {parseInt(selectedYear) * 2}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="sem1" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subjects.sem1.map((subject, index) => (
                <ResourceCard key={index} subject={subject} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sem2" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subjects.sem2.map((subject, index) => (
                <ResourceCard key={index} subject={subject} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AcademicResources;