import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Navigation from "@/components/Navigation";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent, // Import CardContent
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, ArrowLeft, Youtube } from "lucide-react"; // Import Youtube icon
import { Skeleton } from "@/components/ui/skeleton";
import VideoPlayer from "@/components/VideoPlayer"; // Import the new component
import { API_ENDPOINTS, buildApiUrl } from "@/config/api";

// Define a type for your resource object for better type safety
interface Resource {
  _id: string;
  title: string;
  type: string;
  unit: number;
  link?: string;
  videoUrl?: string;
}

const ResourceDetail = () => {
  const { branch, year, subject, resourceType } = useParams();
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const formattedResourceType = resourceType
    ?.split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  useEffect(() => {
    const fetchResources = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get<Resource[]>(
          buildApiUrl(API_ENDPOINTS.RESOURCES, {
            branch,
            year,
            subjectName: subject,
            resourceType,
          })
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
            {/* FIX: Conditional Icon */}
            {resourceType === "video-lectures" ? (
              <Youtube className="h-10 w-10 text-primary" />
            ) : (
              <FileText className="h-10 w-10 text-primary" />
            )}
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
            {[...Array(3)].map((_, i) => (
              <Card key={i}>
                <CardHeader>
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-48 w-full" />
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
              resources.map((resource) => (
                <Card key={resource._id}>
                  {/* FIX: This entire block is now conditional */}
                  {resource.type === "video-lectures" && resource.videoUrl ? (
                    // UI for Video Lectures
                    <>
                      <CardHeader>
                        <CardTitle>
                          <span>Unit {resource.unit}: {resource.title}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <VideoPlayer videoUrl={resource.videoUrl} />
                      </CardContent>
                    </>
                  ) : (
                    // Original UI for Notes & other file types
                    <>
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          <span>Unit {resource.unit}: {resource.title}</span>
                          <Button size="sm" variant="ghost" asChild>
                            <a
                              href={resource.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Download className="h-5 w-5" />
                            </a>
                          </Button>
                        </CardTitle>
                      </CardHeader>
                      {/* Inline PDF preview when link looks like a PDF */}
                      {(() => {
                        const link = resource.link || "";
                        const lower = link.toLowerCase();
                        const isPdf = lower.endsWith(".pdf") || lower.includes("/raw/upload/");
                        return isPdf ? (
                          <CardContent>
                            <div className="w-full h-[70vh] rounded-md overflow-hidden border bg-muted/20 flex items-stretch">
                              {/* Prefer native PDF rendering. If headers force download, the fallback link remains available above. */}
                              <object data={link} type="application/pdf" className="w-full h-full">
                                <embed src={link} type="application/pdf" className="w-full h-full" />
                              </object>
                            </div>
                          </CardContent>
                        ) : null;
                      })()}
                    </>
                  )}
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