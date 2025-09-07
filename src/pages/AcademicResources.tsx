import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
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
import { Skeleton } from "@/components/ui/skeleton";

const ResourceCard = ({
  subject,
  selectedBranch,
  selectedYear,
}: {
  subject: any;
  selectedBranch: string;
  selectedYear: string;
}) => (
  <Card className="p-6 hover:shadow-academic transition-all duration-300 flex flex-col justify-between">
    <div>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">{subject.name}</h3>
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
            subject.name
          )}`}
        >
          View Resources
          <ArrowRight className="h-4 w-4 ml-2" />
        </Link>
      </Button>
    </div>
  </Card>
);

const AcademicResources = () => {
  const [selectedBranch, setSelectedBranch] = useState("CSE");
  const [selectedYear, setSelectedYear] = useState("1");
  const [subjects, setSubjects] = useState<{ sem1: any[]; sem2: any[] } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  useEffect(() => {
    const fetchSubjects = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get<{ sem1: any[]; sem2: any[] }>(
          `http://localhost:5000/api/academic/subjects`,
          {
            params: {
              branch: selectedBranch,
              year: selectedYear,
            },
          }
        );
        setSubjects(res.data);
      } catch (err: any) {
        setError(err.message);
        console.error("Failed to fetch subjects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSubjects();
  }, [selectedBranch, selectedYear]);

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
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="p-6">
                <Skeleton className="h-24" />
              </Card>
            ))}
          </div>
        ) : error ? (
          <div className="text-center text-red-500">
            Failed to load resources: {error}
          </div>
        ) : (
          subjects && ( // Add this check
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
                  {subjects.sem1.length > 0 ? (
                    subjects.sem1.map((subject: any) => (
                      <ResourceCard
                        key={subject._id}
                        subject={subject}
                        selectedBranch={selectedBranch}
                        selectedYear={selectedYear}
                      />
                    ))
                  ) : (
                    <p className="col-span-3 text-center text-muted-foreground">
                      No subjects found for this semester.
                    </p>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="sem2" className="space-y-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {subjects.sem2.length > 0 ? (
                    subjects.sem2.map((subject: any) => (
                      <ResourceCard
                        key={subject._id}
                        subject={subject}
                        selectedBranch={selectedBranch}
                        selectedYear={selectedYear}
                      />
                    ))
                  ) : (
                    <p className="col-span-3 text-center text-muted-foreground">
                      No subjects found for this semester.
                    </p>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          )
        )}
      </div>
    </div>
  );
};

export default AcademicResources;