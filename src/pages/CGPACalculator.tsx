import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calculator, Plus, Trash2, BookOpen } from "lucide-react";
import { toast } from "sonner";

interface Subject {
  id: string;
  name: string;
  credits: number;
  grade: string;
}

const CGPACalculator = () => {
  const [subjects, setSubjects] = useState<Subject[]>([
    { id: "1", name: "", credits: 0, grade: "" }
  ]);
  const [cgpa, setCGPA] = useState<number | null>(null);

  const gradePoints = {
    "O": 10,
    "A+": 9,
    "A": 8,
    "B+": 7,
    "B": 6,
    "C": 5,
    "F": 0
  };

  const addSubject = () => {
    const newId = (Math.max(...subjects.map(s => parseInt(s.id))) + 1).toString();
    setSubjects([...subjects, { id: newId, name: "", credits: 0, grade: "" }]);
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

    for (const subject of subjects) {
      if (subject.name && subject.credits > 0 && subject.grade) {
        const points = gradePoints[subject.grade as keyof typeof gradePoints];
        totalGradePoints += points * subject.credits;
        totalCredits += subject.credits;
      }
    }

    if (totalCredits === 0) {
      toast.error("Please add at least one complete subject with credits and grade");
      return;
    }

    const calculatedCGPA = totalGradePoints / totalCredits;
    setCGPA(Math.round(calculatedCGPA * 100) / 100);
    toast.success("CGPA calculated successfully!");
  };

  const resetCalculator = () => {
    setSubjects([{ id: "1", name: "", credits: 0, grade: "" }]);
    setCGPA(null);
  };

  const getCGPAColor = (cgpa: number) => {
    if (cgpa >= 9) return "text-green-600";
    if (cgpa >= 8) return "text-blue-600";
    if (cgpa >= 7) return "text-yellow-600";
    if (cgpa >= 6) return "text-orange-600";
    return "text-red-600";
  };

  const getCGPAGrade = (cgpa: number) => {
    if (cgpa >= 9) return "Excellent";
    if (cgpa >= 8) return "Very Good";
    if (cgpa >= 7) return "Good";
    if (cgpa >= 6) return "Satisfactory";
    return "Needs Improvement";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calculator className="h-10 w-10 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">CGPA Calculator</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Calculate your Cumulative Grade Point Average easily
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calculator */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                  Enter Your Subjects
                </h2>
                <Button onClick={addSubject} size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Subject
                </Button>
              </div>

              <div className="space-y-4">
                {subjects.map((subject, index) => (
                  <Card key={subject.id} className="p-4 bg-muted/30">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                      <div>
                        <Label htmlFor={`subject-${subject.id}`}>Subject Name</Label>
                        <Input
                          id={`subject-${subject.id}`}
                          placeholder="e.g. Mathematics-I"
                          value={subject.name}
                          onChange={(e) => updateSubject(subject.id, "name", e.target.value)}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor={`credits-${subject.id}`}>Credits</Label>
                        <Input
                          id={`credits-${subject.id}`}
                          type="number"
                          min="1"
                          max="10"
                          placeholder="Credits"
                          value={subject.credits || ""}
                          onChange={(e) => updateSubject(subject.id, "credits", parseInt(e.target.value) || 0)}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor={`grade-${subject.id}`}>Grade</Label>
                        <Select
                          value={subject.grade}
                          onValueChange={(value) => updateSubject(subject.id, "grade", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select grade" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="O">O (10 points)</SelectItem>
                            <SelectItem value="A+">A+ (9 points)</SelectItem>
                            <SelectItem value="A">A (8 points)</SelectItem>
                            <SelectItem value="B+">B+ (7 points)</SelectItem>
                            <SelectItem value="B">B (6 points)</SelectItem>
                            <SelectItem value="C">C (5 points)</SelectItem>
                            <SelectItem value="F">F (0 points)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="flex justify-end">
                        {subjects.length > 1 && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeSubject(subject.id)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center gap-4 mt-8">
                <Button onClick={calculateCGPA} size="lg" className="px-8">
                  <Calculator className="h-5 w-5 mr-2" />
                  Calculate CGPA
                </Button>
                <Button onClick={resetCalculator} variant="outline" size="lg">
                  Reset
                </Button>
              </div>
            </Card>
          </div>

          {/* Result */}
          <div className="space-y-6">
  {cgpa !== null && (
    <Card className="p-6 text-center bg-gradient-primary text-primary-foreground">
      <h3 className="text-xl font-semibold mb-4">Your CGPA</h3>
      <div className="text-5xl font-bold mb-2 text-green-400">{cgpa}</div>
      <Badge variant="secondary" className="mb-4">
        {getCGPAGrade(cgpa)}
      </Badge>
      <p className="text-sm opacity-90">
        Based on{" "}
        {
          subjects.filter((s) => s.name && s.credits > 0 && s.grade)
            .length
        }{" "}
        subjects
      </p>
    </Card>
  )}

            {/* Grade Scale */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Grade Scale</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>O (Outstanding)</span>
                  <span className="font-medium">10 points</span>
                </div>
                <div className="flex justify-between">
                  <span>A+ (Excellent)</span>
                  <span className="font-medium">9 points</span>
                </div>
                <div className="flex justify-between">
                  <span>A (Very Good)</span>
                  <span className="font-medium">8 points</span>
                </div>
                <div className="flex justify-between">
                  <span>B+ (Good)</span>
                  <span className="font-medium">7 points</span>
                </div>
                <div className="flex justify-between">
                  <span>B (Above Average)</span>
                  <span className="font-medium">6 points</span>
                </div>
                <div className="flex justify-between">
                  <span>C (Average)</span>
                  <span className="font-medium">5 points</span>
                </div>
                <div className="flex justify-between">
                  <span>F (Fail)</span>
                  <span className="font-medium">0 points</span>
                </div>
              </div>
            </Card>

            {/* Tips */}
            <Card className="p-6 bg-muted/30">
              <h3 className="text-lg font-semibold mb-4">Tips</h3>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Enter all your subjects with their respective credits</li>
                <li>• Make sure to select the correct grade for each subject</li>
                <li>• Higher credit subjects have more impact on CGPA</li>
                <li>• Aim for consistent performance across all subjects</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CGPACalculator;