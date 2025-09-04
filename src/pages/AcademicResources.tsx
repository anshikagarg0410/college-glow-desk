import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  BookOpen,
  FileText,
  Download,
  Youtube,
  ExternalLink,
  GraduationCap
} from "lucide-react";

const AcademicResources = () => {
  const [selectedBranch, setSelectedBranch] = useState("CSE");
  const [selectedYear, setSelectedYear] = useState("1");

  const branches = [
    "CSE-AI", "CSE", "IT", "AI/ML", "ECE-AI", "ECE", "Mathematical & Computing"
  ];

  const years = [
    { value: "1", label: "1st Year" },
    { value: "2", label: "2nd Year" },
    { value: "3", label: "3rd Year" },
    { value: "4", label: "4th Year" }
  ];

  // Sample subject data structure
  const subjectData = {
    "1": {
      "1": ["Mathematics-I", "Physics", "Chemistry", "Engineering Graphics", "Basic Electrical Engineering"],
      "2": ["Mathematics-II", "Environmental Science", "Programming in C", "Workshop Technology", "Communication Skills"]
    },
    "2": {
      "3": ["Data Structures", "Digital Electronics", "Computer Organization", "Discrete Mathematics", "Object Oriented Programming"],
      "4": ["Database Management Systems", "Operating Systems", "Computer Networks", "Software Engineering", "Web Technologies"]
    },
    "3": {
      "5": ["Machine Learning", "Computer Graphics", "Compiler Design", "Advanced Algorithms", "Information Security"],
      "6": ["Artificial Intelligence", "Mobile App Development", "Cloud Computing", "Project Management", "Elective-I"]
    },
    "4": {
      "7": ["Advanced Machine Learning", "Blockchain Technology", "Big Data Analytics", "Internet of Things", "Elective-II"],
      "8": ["Major Project", "Industrial Training", "Seminar", "Comprehensive Viva", "Elective-III"]
    }
  };

  const getSubjects = () => {
    const yearData = subjectData[selectedYear as keyof typeof subjectData];
    if (!yearData) return { sem1: [], sem2: [] };
    
    const semesterKeys = Object.keys(yearData);
    return {
      sem1: yearData[semesterKeys[0] as keyof typeof yearData] || [],
      sem2: yearData[semesterKeys[1] as keyof typeof yearData] || []
    };
  };

  const subjects = getSubjects();

  const ResourceCard = ({ subject }: { subject: string }) => (
    <Card className="p-6 hover:shadow-academic transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">{subject}</h3>
          <Badge variant="secondary" className="mb-3">
            {selectedBranch} - Year {selectedYear}
          </Badge>
        </div>
        <BookOpen className="h-6 w-6 text-primary" />
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Notes & PDFs</span>
          </div>
          <Button size="sm" variant="ghost">
            <Download className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-blue-500" />
            <span className="text-sm font-medium">Tutorial Sheets</span>
          </div>
          <Button size="sm" variant="ghost">
            <Download className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-orange-500" />
            <span className="text-sm font-medium">Previous Year Questions</span>
          </div>
          <Button size="sm" variant="ghost">
            <Download className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-green-500" />
            <span className="text-sm font-medium">Reference Books</span>
          </div>
          <Button size="sm" variant="ghost">
            <Download className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
          <div className="flex items-center gap-2">
            <Youtube className="h-4 w-4 text-red-500" />
            <span className="text-sm font-medium">Video Lectures</span>
          </div>
          <Button size="sm" variant="ghost">
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
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
            <h1 className="text-4xl font-bold text-foreground">Academic Resources</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Access comprehensive study materials for all subjects and branches
          </p>
        </div>

        {/* Filters */}
        <Card className="p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Select Branch</label>
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
              <label className="text-sm font-medium mb-2 block">Select Year</label>
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