import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, ArrowLeft } from "lucide-react";

const ResourceDetail = () => {
  const { branch, year, subject, resourceType } = useParams();

  // Placeholder data for units - you can replace this with actual data later
  const units = [
    { id: 1, title: "Unit 1: Introduction to Topic", link: "#" },
    { id: 2, title: "Unit 2: Core Concepts", link: "#" },
    { id: 3, title: "Unit 3: Advanced Topics", link: "#" },
    { id: 4, title: "Unit 4: Applications & Case Studies", link: "#" },
  ];

  // A helper function to format the resourceType from the URL for display
  const formattedResourceType = resourceType
    ?.split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Button asChild variant="outline" size="sm">
            <Link
              to={`/academic/${encodeURIComponent(
                branch!
              )}/${encodeURIComponent(year!)}/${encodeURIComponent(subject!)}`}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to {subject}
            </Link>
          </Button>
        </div>

        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FileText className="h-10 w-10 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">
              {formattedResourceType}
            </h1>
          </div>
          <p className="text-xl text-muted-foreground">{subject}</p>
          <div className="flex justify-center gap-2 mt-2">
            <Badge variant="secondary">{branch}</Badge>
            <Badge variant="secondary">Year {year}</Badge>
          </div>
        </div>

        <div className="grid gap-6">
          {units.map((unit) => (
            <Card key={unit.id}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{unit.title}</span>
                  <Button size="sm" variant="ghost" asChild>
                    <a href={unit.link} download>
                      <Download className="h-5 w-5" />
                    </a>
                  </Button>
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourceDetail;