import { useState, useEffect } from "react";
import gradingImage from "@/assets/grading.jpeg";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calculator, Plus, Trash2, BookOpen, TrendingUp, Lightbulb } from "lucide-react";
import { toast } from "sonner";

interface Subject {
  id: string;
  name: string;
  credits: number;
  grade: string;
}

const CGPACalculator = () => {
  const MAX_SUBJECTS = 6; // Maximum subjects limit

  const [subjects, setSubjects] = useState<Subject[]>(() => {
    // Load subjects from localStorage if available
    const savedSubjects = localStorage.getItem("cgpa_subjects");
    return savedSubjects ? JSON.parse(savedSubjects) : [{ id: "1", name: "", credits: 0, grade: "" }];
  });
  const [cgpa, setCGPA] = useState<number | null>(() => {
    // Load CGPA from localStorage if available
    const savedCGPA = localStorage.getItem("cgpa_result");
    return savedCGPA ? parseFloat(savedCGPA) : null;
  });

  // Save subjects and CGPA to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("cgpa_subjects", JSON.stringify(subjects));
  }, [subjects]);

  useEffect(() => {
    if (cgpa !== null) {
      localStorage.setItem("cgpa_result", cgpa.toString());
    } else {
      localStorage.removeItem("cgpa_result");
    }
  }, [cgpa]);

  const gradePoints = {
    "A+": 10,
    "A": 9,
    "B+": 8,
    "B": 7,
    "C+": 6,
    "C": 5,
    "D": 4,
    "F": 0
  };

  const addSubject = () => {
    if (subjects.length < MAX_SUBJECTS) {
      const newId = (Math.max(...subjects.map(s => parseInt(s.id))) + 1).toString();
      setSubjects([...subjects, { id: newId, name: "", credits: 0, grade: "" }]);
    } else {
      toast.error(`You can add a maximum of ${MAX_SUBJECTS} subjects.`);
    }
  };

  const removeSubject = (id: string) => {
    if (subjects.length > 1) {
      setSubjects(subjects.filter(s => s.id !== id));
    }
  };

  const updateSubject = (id: string, field: keyof Subject, value: string | number) => {
    setSubjects(subjects.map(s =>
      s.id === id ? { ...s, [field]: value } : s
    ));
  };

  const calculateCGPA = () => {
    let totalCredits = 0;
    let totalGradePoints = 0;

    const filledSubjects = subjects.filter(s => s.name && s.credits > 0 && s.grade);

    if (filledSubjects.length === 0) {
      toast.error("Please add at least one complete subject with credits and grade.");
      setCGPA(null);
      return;
    }

    for (const subject of filledSubjects) {
      const points = gradePoints[subject.grade as keyof typeof gradePoints];
      totalGradePoints += points * subject.credits;
      totalCredits += subject.credits;
    }

    if (totalCredits === 0) {
      toast.error("Total credits cannot be zero. Please check your subject entries.");
      setCGPA(null);
      return;
    }

    const calculatedCGPA = totalGradePoints / totalCredits;
    setCGPA(Math.round(calculatedCGPA * 100) / 100);
    toast.success("CGPA calculated successfully!");
  };

  const resetCalculator = () => {
    setSubjects([{ id: "1", name: "", credits: 0, grade: "" }]);
    setCGPA(null);
    toast.info("Calculator has been reset.");
  };

  const getCGPAColor = (cgpa: number | null) => {
    if (cgpa === null) return "text-gray-400 dark:text-gray-500";
    if (cgpa >= 9) return "text-green-400";
    if (cgpa >= 8) return "text-blue-400";
    if (cgpa >= 7) return "text-yellow-400";
    if (cgpa >= 6) return "text-orange-400";
    return "text-red-400";
  };

  const getCGPAGrade = (cgpa: number | null) => {
    if (cgpa === null) return "N/A";
    if (cgpa >= 9.5) return "Outstanding!";
    if (cgpa >= 9) return "Excellent";
    if (cgpa >= 8) return "Very Good";
    if (cgpa >= 7) return "Good";
    if (cgpa >= 6) return "Satisfactory";
    if (cgpa > 0) return "Needs Improvement";
    return "Fail"; // CGPA is 0
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Calculator className="h-12 w-12 text-blue-600 dark:text-blue-400" />
            <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">
              CGPA Calculator
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Effortlessly calculate your Cumulative Grade Point Average and track your academic progress.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Calculator Input Section (Left 2/3) */}
          <div className="lg:col-span-2">
            <Card className="p-8 shadow-lg bg-white dark:bg-gray-800 rounded-lg">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold flex items-center gap-3 text-gray-800 dark:text-white">
                  <BookOpen className="h-7 w-7 text-purple-600 dark:text-purple-400" />
                  Your Academic Records
                </h2>
                <Button
                  onClick={addSubject}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600"
                  disabled={subjects.length >= MAX_SUBJECTS}
                >
                  <Plus className="h-5 w-5 mr-2" />
                  Add Subject ({subjects.length}/{MAX_SUBJECTS})
                </Button>
              </div>

              <div className="space-y-6">
                {subjects.map((subject, index) => (
                  <Card key={subject.id} className="p-6 bg-gray-50 dark:bg-gray-700 shadow-sm border border-gray-200 dark:border-gray-600 rounded-md">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
                      <div>
                        <Label htmlFor={`subject-name-${subject.id}`} className="text-gray-700 dark:text-gray-300 text-sm font-medium mb-1 block">Subject Name</Label>
                        <Input
                          id={`subject-name-${subject.id}`}
                          placeholder="e.g. Data Structures"
                          value={subject.name}
                          onChange={(e) => updateSubject(subject.id, "name", e.target.value)}
                          className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                        />
                      </div>

                      <div>
                        <Label htmlFor={`credits-${subject.id}`} className="text-gray-700 dark:text-gray-300 text-sm font-medium mb-1 block">Credits</Label>
                        <Input
                          id={`credits-${subject.id}`}
                          type="number"
                          min="1"
                          max="10"
                          placeholder="Credits"
                          value={subject.credits || ""}
                          onChange={(e) => updateSubject(subject.id, "credits", parseInt(e.target.value) || 0)}
                          className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                        />
                      </div>

                      <div>
                        <Label htmlFor={`grade-${subject.id}`} className="text-gray-700 dark:text-gray-300 text-sm font-medium mb-1 block">Grade</Label>
                        <Select
                          value={subject.grade}
                          onValueChange={(value) => updateSubject(subject.id, "grade", value)}
                        >
                          <SelectTrigger className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white">
                            <SelectValue placeholder="Select Grade" />
                          </SelectTrigger>
                          <SelectContent className="dark:bg-gray-800">
                            {Object.entries(gradePoints).map(([grade, points]) => (
                              <SelectItem key={grade} value={grade}>
                                {grade} ({points} points)
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex justify-end items-center">
                        {subjects.length > 1 && (
                          <Button
                            variant="destructive"
                            size="icon"
                            onClick={() => removeSubject(subject.id)}
                            className="bg-red-500 hover:bg-red-600 text-white dark:bg-red-600 dark:hover:bg-red-700"
                            aria-label={`Remove subject ${subject.name || `row ${index + 1}`}`}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="flex flex-col md:flex-row justify-center gap-4 mt-10">
                <Button
                  onClick={calculateCGPA}
                  size="lg"
                  className="px-10 py-3 text-lg bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  <Calculator className="h-6 w-6 mr-3" />
                  Calculate CGPA
                </Button>
                <Button
                  onClick={resetCalculator}
                  variant="outline"
                  size="lg"
                  className="px-10 py-3 text-lg border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  Reset
                </Button>
              </div>
            </Card>
          </div>

          {/* Right Column: Result, Chart, Grade Scale */}
          <div className="space-y-8">
            {/* CGPA Result Card */}
            <Card className="p-8 text-center bg-gradient-to-br from-blue-600 to-purple-700 text-white shadow-xl rounded-lg border-none">
              <h3 className="text-2xl font-semibold mb-4 opacity-90">Your Cumulative GPA</h3>
              <div className="flex items-center justify-center gap-4 mb-3">
                <TrendingUp className="h-10 w-10 text-white opacity-80" />
                <div className={`text-7xl font-extrabold ${getCGPAColor(cgpa)} leading-none`}>
                  {cgpa !== null ? cgpa.toFixed(2) : "N/A"}
                </div>
              </div>
              <Badge variant="secondary" className="bg-white/20 text-white text-md py-1 px-4 rounded-full mb-4">
                {getCGPAGrade(cgpa)}
              </Badge>
              <p className="text-sm opacity-80 mt-4">
                Calculated from{" "}
                {
                  subjects.filter((s) => s.name && s.credits > 0 && s.grade)
                    .length
                }{" "}
                {"subject(s)"}
              </p>
            </Card>

            {/* CGPA Grade Scale Chart */}
            <Card className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                How CGPA is Calculated
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                This chart illustrates the points awarded for each grade, which are then used to calculate your CGPA.
              </p>
              <img
                src={gradingImage}
                alt="CGPA Calculation Chart based on Grades"
                className="w-full h-auto rounded-md border border-gray-200 dark:border-gray-700 object-cover"
              />
            </Card>

            {/* Grade Point Scale */}
            <Card className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Grade Point Scale</h3>
              <div className="space-y-3 text-base">
                {Object.entries(gradePoints).map(([grade, points]) => (
                  <div key={grade} className="flex justify-between items-center py-1 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{grade}</span>
                    <span className="text-gray-900 dark:text-white font-semibold">{points} points</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div> {/* End of main grid */}

        {/* Helpful Tips section - now placed immediately after the main grid */}
        <div className="mt-10"> {/* Adjusted margin-top for better spacing from the grid above */}
          <Card className="p-8 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 dark:border-yellow-600 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-yellow-800 dark:text-yellow-200 flex items-center gap-2">
              <Lightbulb className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
              Helpful Tips
            </h3>
            <ul className="text-base space-y-3 text-yellow-700 dark:text-yellow-300 list-disc pl-5">
              <li>**Complete Data Entry:** Ensure all subject fields (Name, Credits, Grade) are accurately filled for precise CGPA calculation.</li>
              <li>**Credit Weightage:** Remember that subjects with higher credit values have a more significant impact on your overall CGPA. Prioritize these!</li>
              <li>**Consistency is Key:** Maintaining consistent good grades across all subjects is the most effective way to boost and sustain a high CGPA.</li>
              <li>**Subject Limit:** This calculator allows you to track up to {MAX_SUBJECTS} subjects at a time. Plan your entries accordingly.</li>
              <li>**Regular Monitoring:** Use this tool frequently to monitor your progress and identify areas for improvement.</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CGPACalculator;