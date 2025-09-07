import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  FileText,
  Youtube,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

const SubjectResources = () => {
  const { branch, year, subject } = useParams();

  const resources = [
    { title: "Notes & PDFs", icon: FileText, slug: "notes-pdfs" },
    { title: "Tutorial Sheets", icon: FileText, slug: "tutorial-sheets" },
    {
      title: "Previous Year Questions",
      icon: FileText,
      slug: "pyqs",
    },
    { title: "Reference Books", icon: BookOpen, slug: "reference-books" },
    { title: "Video Lectures", icon: Youtube, slug: "video-lectures" },
  ];

  const ResourceItem = ({
    title,
    icon: Icon,
    slug,
  }: {
    title: string;
    icon: React.ElementType;
    slug: string;
  }) => {
    // This creates the correct path, e.g., /academic/CSE/1/Mathematics-I/notes-pdfs
    const resourcePath = `/academic/${encodeURIComponent(
      branch!
    )}/${encodeURIComponent(year!)}/${encodeURIComponent(
      subject!
    )}/${slug}`;

    return (
      <Link to={resourcePath} className="block">
        <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-accent transition-colors">
          <div className="flex items-center gap-3">
            <Icon className="h-5 w-5 text-primary" />
            <span className="text-md font-medium">{title}</span>
          </div>
          <ArrowRight className="h-5 w-5 text-muted-foreground" />
        </div>
      </Link>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Button asChild variant="outline" size="sm">
            <Link to="/academic">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Subjects
            </Link>
          </Button>
        </div>

        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="h-10 w-10 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">{subject}</h1>
          </div>
          <div className="flex justify-center gap-2">
            <Badge variant="secondary">{branch}</Badge>
            <Badge variant="secondary">Year {year}</Badge>
          </div>
        </div>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Available Resources
          </h2>
          <div className="space-y-4">
            {resources.map((resource, index) => (
              <ResourceItem key={index} {...resource} />
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SubjectResources;