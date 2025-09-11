import { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { UploadCloud, Trash2, ShieldCheck, PlusCircle, XCircle } from "lucide-react";
import { API_ENDPOINTS, buildApiUrl } from "@/config/api";

// Define an interface for the subject data
interface Subject {
  _id: string;
  name: string;
}

// Define an interface for the API response for subjects
interface SubjectsApiResponse {
  sem1: Subject[];
  sem2: Subject[];
}

// Define an interface for the resource data
interface Resource {
    _id: string;
    title: string;
    // Add any other properties that a resource object has
}


const AdminUpload = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-2xl mx-auto px-4 py-8">
        <Tabs defaultValue="resource">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="resource">Upload Resource</TabsTrigger>
            <TabsTrigger value="subjects">Manage Subjects</TabsTrigger>
            <TabsTrigger value="scholarship">Add Scholarship</TabsTrigger>
          </TabsList>
          <TabsContent value="resource">
            <ResourceUploadForm />
          </TabsContent>
          <TabsContent value="subjects">
            <ManageSubjects />
          </TabsContent>
          {/* Scholarship form can be added here */}
        </Tabs>
      </div>
    </div>
  );
};

const ResourceUploadForm = () => {
  const [branch, setBranch] = useState("CSE");
  const [year, setYear] = useState("1");
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [adminKey, setAdminKey] = useState<string>("");
  const [resourceType, setResourceType] = useState("notes-pdfs");
  const [unit, setUnit] = useState(1);
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [resources, setResources] = useState<Resource[]>([]); // Use the Resource interface

  const branches = ["CSE", "CSE-AI", "ECE", "ECE-AI", "IT", "AI&ML", "MAE/DMAM"];
  const years = ["1", "2", "3", "4"];
  const resourceTypes = [
    { value: "notes-pdfs", label: "Notes & PDFs" },
    { value: "tutorial-sheets", label: "Tutorial Sheets" },
    { value: "pyqs", label: "Previous Year Questions" },
    { value: "reference-books", label: "Reference Books" },
    { value: "video-lectures", label: "Video Lectures" },
  ];

  useEffect(() => {
    const fetchSubjects = async () => {
      if (branch && year) {
        try {
          const res = await axios.get<SubjectsApiResponse>(
            buildApiUrl(API_ENDPOINTS.SUBJECTS, { branch, year })
          );
          const allSubjects = [...res.data.sem1, ...res.data.sem2];
          setSubjects(allSubjects);
          setSelectedSubject("");
        } catch (error) {
          console.error("Failed to fetch subjects", error);
          setSubjects([]);
        }
      }
    };
    fetchSubjects();
  }, [branch, year]);

  useEffect(() => {
    const fetchResources = async () => {
      if (branch && year && selectedSubject && resourceType) {
        try {
          // Use the Resource[] type with axios for this call
          const res = await axios.get<Resource[]>(
            buildApiUrl(API_ENDPOINTS.RESOURCES, {
              branch,
              year,
              subjectName: selectedSubject,
              resourceType,
            })
          );
          setResources(res.data);
        } catch (error) {
          console.error("Failed to fetch resources", error);
          setResources([]);
        }
      } else {
        setResources([]);
      }
    };
    fetchResources();
  }, [branch, year, selectedSubject, resourceType]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (resourceType === "video-lectures") {
      if (!videoUrl || !selectedSubject || !title) {
        toast.error("Please fill all fields and provide a video URL.");
        return;
      }
    } else {
      if (!file || !selectedSubject || !title) {
        toast.error("Please fill all fields and select a file.");
        return;
      }
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("branch", branch);
    formData.append("year", year);
    formData.append("subjectName", selectedSubject);
    formData.append("resourceType", resourceType);
    formData.append("unit", unit.toString());
    formData.append("title", title);

    let endpoint: string = API_ENDPOINTS.UPLOAD_FILE;

    if (resourceType === "video-lectures") {
      endpoint = API_ENDPOINTS.UPLOAD_LINK;
      formData.append("videoUrl", videoUrl);
    } else {
      if (file) {
        formData.append("resourceFile", file);
      }
    }

    try {
      const res = await axios.post(endpoint, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "x-admin-key": adminKey || undefined,
        },
      });
      toast.success((res.data as { msg?: string }).msg ?? "Upload successful!");
      setTitle("");
      setUnit(1);
      setFile(null);
      setVideoUrl("");
      (e.target as HTMLFormElement).reset();

      // Refetch resources to show the newly added one
      const fetchResources = async () => {
        if (branch && year && selectedSubject && resourceType) {
          const res = await axios.get<Resource[]>(
            buildApiUrl(API_ENDPOINTS.RESOURCES, {
              branch,
              year,
              subjectName: selectedSubject,
              resourceType,
            })
          );
          setResources(res.data);
        }
      };
      fetchResources();

    } catch (error: any) {
      console.error("Upload failed", error);
      toast.error(
        error.response?.data?.msg || "Upload failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (resourceId: string) => {
    if (window.confirm("Are you sure you want to delete this resource?")) {
      try {
        await axios.delete(
          `${API_ENDPOINTS.RESOURCES}/${resourceId}`
        );
        toast.success("Resource deleted successfully");
        // No more 'any' type needed here
        setResources(resources.filter((r) => r._id !== resourceId));
      } catch (error) {
        console.error("Failed to delete resource", error);
        toast.error("Failed to delete resource");
      }
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <UploadCloud className="h-6 w-6" />
          Upload Resource
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label>Admin Key</Label>
            <div className="flex gap-2">
              <ShieldCheck className="h-5 w-5 mt-2" />
              <Input
                type="password"
                placeholder="Enter admin key"
                onChange={(e) => setAdminKey(e.target.value)}
              />
            </div>
          </div>
          {/* Form fields remain the same */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Branch</Label>
              <Select value={branch} onValueChange={setBranch}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Branch" />
                </SelectTrigger>
                <SelectContent>
                  {branches.map((b) => (
                    <SelectItem key={b} value={b}>
                      {b}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Year</Label>
              <Select value={year} onValueChange={setYear}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((y) => (
                    <SelectItem key={y} value={y}>
                      {y}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Subject</Label>
            <Select
              value={selectedSubject}
              onValueChange={setSelectedSubject}
              disabled={subjects.length === 0}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a subject" />
              </SelectTrigger>
              <SelectContent>
                {subjects.map((s) => (
                  <SelectItem key={s._id} value={s.name}>
                    {s.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Resource Type</Label>
            <Select value={resourceType} onValueChange={setResourceType}>
              <SelectTrigger>
                <SelectValue placeholder="Select a resource type" />
              </SelectTrigger>
              <SelectContent>
                {resourceTypes.map((rt) => (
                  <SelectItem key={rt.value} value={rt.value}>
                    {rt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="unit">Unit</Label>
              <Input
                id="unit"
                type="number"
                value={unit}
                onChange={(e) => setUnit(parseInt(e.target.value))}
                min="1"
                max="4"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="title">Resource Title</Label>
              <Input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g., Introduction to Calculus"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            {resourceType === "video-lectures" ? (
              <div>
                <Label htmlFor="videoUrl">Video URL</Label>
                <Input
                  id="videoUrl"
                  type="url"
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  placeholder="https://www.youtube.com/watch?v=..."
                  required
                />
              </div>
            ) : (
              <div>
                <Label htmlFor="file">PDF File</Label>
                <Input
                  id="file"
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf"
                  required
                />
              </div>
            )}
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Uploading..." : "Upload"}
          </Button>
        </form>

        {selectedSubject && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">
              Existing Resources for {selectedSubject}
            </h3>
            {resources.length > 0 ? (
              <ul className="space-y-2">
                {resources.map((resource) => (
                  <li
                    key={resource._id}
                    className="flex items-center justify-between p-2 border rounded"
                  >
                    <span>{resource.title}</span>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(resource._id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No resources found for this subject and type.</p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const ManageSubjects = () => {
  const [branch, setBranch] = useState("CSE");
  const [year, setYear] = useState("1");
  const [semester, setSemester] = useState<string>("1");
  const [name, setName] = useState("");
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [adminKey, setAdminKey] = useState<string>("");

  const branches = ["CSE", "CSE-AI", "ECE", "ECE-AI", "IT", "AI&ML", "MAE/DMAM"];
  const years = ["1", "2", "3", "4"];

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const res = await axios.get<SubjectsApiResponse>(
          buildApiUrl(API_ENDPOINTS.SUBJECTS, { branch, year })
        );
        const firstSem = parseInt(year) * 2 - 1;
        const secondSem = parseInt(year) * 2;
        const allSubjects = [
          ...res.data.sem1.map((s) => ({ ...s, semester: firstSem } as any)),
          ...res.data.sem2.map((s) => ({ ...s, semester: secondSem } as any)),
        ];
        setSubjects(allSubjects as Subject[]);
      } catch (e) {
        setSubjects([]);
      }
    };
    fetchSubjects();
  }, [branch, year]);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return toast.error("Subject name is required");
    try {
      const res = await axios.post(
        API_ENDPOINTS.SUBJECTS_ADMIN,
        { name, branch, year: Number(year), semester: Number(semester) },
        { headers: { "x-admin-key": adminKey || undefined } }
      );
      toast.success("Subject created");
      setName("");
      // refresh list
      const list = await axios.get<SubjectsApiResponse>(
        buildApiUrl(API_ENDPOINTS.SUBJECTS, { branch, year })
      );
      const firstSem = parseInt(year) * 2 - 1;
      const secondSem = parseInt(year) * 2;
      const allSubjects = [
        ...list.data.sem1.map((s) => ({ ...s, semester: firstSem } as any)),
        ...list.data.sem2.map((s) => ({ ...s, semester: secondSem } as any)),
      ];
      setSubjects(allSubjects as Subject[]);
    } catch (err: any) {
      toast.error(err?.response?.data?.msg || "Failed to create subject");
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this subject and its resources?")) return;
    try {
      await axios.delete(`${API_ENDPOINTS.SUBJECTS_ADMIN}/${id}`, {
        headers: { "x-admin-key": adminKey || undefined },
      });
      toast.success("Subject deleted");
      setSubjects((prev) => prev.filter((s) => s._id !== id));
    } catch (err: any) {
      toast.error(err?.response?.data?.msg || "Failed to delete subject");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShieldCheck className="h-6 w-6" />
          Manage Subjects
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label>Admin Key</Label>
          <Input type="password" placeholder="Enter admin key" onChange={(e) => setAdminKey(e.target.value)} />
        </div>
        <form onSubmit={handleCreate} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Branch</Label>
              <Select value={branch} onValueChange={setBranch}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Branch" />
                </SelectTrigger>
                <SelectContent>
                  {branches.map((b) => (
                    <SelectItem key={b} value={b}>{b}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Year</Label>
              <Select value={year} onValueChange={setYear}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((y) => (
                    <SelectItem key={y} value={y}>{y}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Semester</Label>
              <Select value={semester} onValueChange={setSemester}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Semester" />
                </SelectTrigger>
                <SelectContent>
                  {[
                    String(parseInt(year) * 2 - 1),
                    String(parseInt(year) * 2),
                  ].map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Subject Name</Label>
              <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g., Mathematics-I" />
            </div>
          </div>
          <Button type="submit" className="w-full">
            <PlusCircle className="h-4 w-4 mr-2" />
            Create Subject
          </Button>
        </form>

        <div>
          <h3 className="text-lg font-semibold mb-4">Existing Subjects</h3>
          {subjects.length === 0 ? (
            <p>No subjects found for selection.</p>
          ) : (
            <ul className="space-y-2">
              {subjects.map((s: any) => (
                <li key={s._id} className="flex items-center justify-between p-2 border rounded">
                  <span>
                    {s.name} — {s.branch} Y{s.year} S{s.semester}
                  </span>
                  <Button variant="destructive" size="sm" onClick={() => handleDelete(s._id)}>
                    <XCircle className="h-4 w-4" />
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminUpload;