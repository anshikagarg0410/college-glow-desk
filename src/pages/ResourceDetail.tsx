import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Navigation from "@/components/Navigation";
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, ArrowLeft } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const ResourceDetail = () => {
  const { branch, year, subject, resourceType } = useParams();
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // A helper function to format the resourceType from the URL for display
  const formattedResourceType = resourceType
    ?.split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  useEffect(() => {
    const fetchResources = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get<any[]>(
          "http://localhost:5000/api/academic/resources",
          {
            params: {
              branch,
              year,
              subjectName: subject,
              resourceType,
            },
          }
        );
        setResources(res.data);
      } catch (err: any) {
        setError(err.message);
        console.error("Failed to fetch resources:", err);
      } finally {
        setLoading(false);
      }
    };
    if (branch && year && subject && resourceType) {
      fetchResources();
    }
  }, [branch, year, subject, resourceType]);

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

        {loading ? (
          <div className="grid gap-6">
            {[...Array(4)].map((_, i) => (
              <Card key={i}>
                <CardHeader>
                  <Skeleton className="h-6" />
                </CardHeader>
              </Card>
            ))}
          </div>
        ) : error ? (
          <div className="text-center text-red-500">
            Failed to load resources: {error}
          </div>
        ) : (
          <div className="grid gap-6">
            {resources.length > 0 ? (
              resources.map((unit: any) => (
                <Card key={unit._id || unit.title}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{unit.title}</span>
                      <Button size="sm" variant="ghost" asChild>
                        <a href={unit.link} target="_blank" rel="noopener noreferrer">
                          <Download className="h-5 w-5" />
                        </a>
                      </Button>
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))
            ) : (
              <p className="col-span-full text-center text-muted-foreground">
                No resources found for this category yet.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourceDetail;