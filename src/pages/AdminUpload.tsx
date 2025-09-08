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
import { UploadCloud, Trophy } from "lucide-react";

const AdminUpload = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-2xl mx-auto px-4 py-8">
        <Tabs defaultValue="resource">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="resource">Upload Resource</TabsTrigger>
            <TabsTrigger value="scholarship">Add Scholarship</TabsTrigger>
          </TabsList>
          <TabsContent value="resource">
            <ResourceUploadForm />
          </TabsContent>
          {/* <TabsContent value="scholarship">
            <ScholarshipUploadForm />
          </TabsContent> */}
        </Tabs>
      </div>
    </div>
  );
};

// Form for uploading PDF resources
// const ResourceUploadForm = () => {
//   const [branch, setBranch] = useState("CSE");
//   const [year, setYear] = useState("1");
//   const [subjects, setSubjects] = useState([]);
//   const [selectedSubject, setSelectedSubject] = useState("");
//   const [resourceType, setResourceType] = useState("notes-pdfs");
//   const [unit, setUnit] = useState(1);
//   const [title, setTitle] = useState("");
//   const [file, setFile] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const branches = ["CSE", "CSE-AI", "ECE", "ECE-AI", "IT", "AI&ML", "MAE/DMAM"];
//   const years = ["1", "2", "3", "4"];
//   const resourceTypes = [
//     { value: "notes-pdfs", label: "Notes & PDFs" },
//     { value: "tutorial-sheets", label: "Tutorial Sheets" },
//     { value: "pyqs", label: "Previous Year Questions" },
//     { value: "reference-books", label: "Reference Books" },
//   ];

//   useEffect(() => {
//     const fetchSubjects = async () => {
//       if (branch && year) {
//         try {
//           const res = await axios.get<{ sem1: any[]; sem2: any[] }>("http://localhost:5000/api/academic/subjects", {
//             params: { branch, year },
//           });
//           const allSubjects = [...res.data.sem1, ...res.data.sem2];
//           setSubjects(allSubjects);
//           setSelectedSubject("");
//         } catch (error) {
//           console.error("Failed to fetch subjects", error);
//           setSubjects([]);
//         }
//       }
//     };
//     fetchSubjects();
//   }, [branch, year]);
  
//   const handleFileChange = (e: any) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     if (!file || !selectedSubject || !title) {
//         toast.error("Please fill all fields and select a file.");
//         return;
//     }

//     setLoading(true);

//     const formData = new FormData();
//     formData.append("branch", branch);
//     formData.append("year", year);
//     formData.append("subjectName", selectedSubject);
//     formData.append("resourceType", resourceType);
//     formData.append("unit", unit.toString());
//     formData.append("title", title);
//     formData.append("resourceFile", file);

//     try {
//         const res = await axios.post("http://localhost:5000/api/upload", formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data'
//             }
//         });
//         toast.success((res.data as { msg?: string }).msg ?? "Upload successful!");
//         setSelectedSubject("");
//         setTitle("");
//         setUnit(1);
//         setFile(null);
//         e.target.reset();

//     } catch (error: any) {
//         console.error("Upload failed", error);
//         toast.error(error.response?.data?.msg || "Upload failed. Please try again.");
//     } finally {
//         setLoading(false);
//     }
//   };

//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle className="flex items-center gap-2">
//           <UploadCloud className="h-6 w-6" />
//           Upload Resource
//         </CardTitle>
//       </CardHeader>
//       <CardContent>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="grid grid-cols-2 gap-4">
//             <div className="space-y-2">
//               <Label>Branch</Label>
//               <Select value={branch} onValueChange={setBranch}>
//                 <SelectTrigger><SelectValue /></SelectTrigger>
//                 <SelectContent>
//                   {branches.map(b => <SelectItem key={b} value={b}>{b}</SelectItem>)}
//                 </SelectContent>
//               </Select>
//             </div>
//             <div className="space-y-2">
//               <Label>Year</Label>
//               <Select value={year} onValueChange={setYear}>
//                 <SelectTrigger><SelectValue /></SelectTrigger>
//                 <SelectContent>
//                   {years.map(y => <SelectItem key={y} value={y}>{y}</SelectItem>)}
//                 </SelectContent>
//               </Select>
//             </div>
//           </div>
//           <div className="space-y-2">
//               <Label>Subject</Label>
//               <Select value={selectedSubject} onValueChange={setSelectedSubject} disabled={subjects.length === 0}>
//                 <SelectTrigger><SelectValue placeholder="Select a subject" /></SelectTrigger>
//                 <SelectContent>
//                   {subjects.map((s: any) => <SelectItem key={s._id} value={s.name}>{s.name}</SelectItem>)}
//                 </SelectContent>
//               </Select>
//           </div>
//           <div className="space-y-2">
//               <Label>Resource Type</Label>
//               <Select value={resourceType} onValueChange={setResourceType}>
//                 <SelectTrigger><SelectValue /></SelectTrigger>
//                 <SelectContent>
//                   {resourceTypes.map(rt => <SelectItem key={rt.value} value={rt.value}>{rt.label}</SelectItem>)}
//                 </SelectContent>
//               </Select>
//           </div>
//           <div className="grid grid-cols-2 gap-4">
//             <div className="space-y-2">
//                 <Label htmlFor="unit">Unit</Label>
//                 <Input id="unit" type="number" value={unit} onChange={e => setUnit(parseInt(e.target.value))} min="1" max="4" required />
//             </div>
//              <div className="space-y-2">
//                 <Label htmlFor="title">Resource Title</Label>
//                 <Input id="title" type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g., Introduction to Calculus" required />
//             </div>
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="file">PDF File</Label>
//             <Input id="file" type="file" onChange={handleFileChange} accept=".pdf" required />
//           </div>
//           <Button type="submit" className="w-full" disabled={loading}>
//             {loading ? "Uploading..." : "Upload"}
//           </Button>
//         </form>
//       </CardContent>
//     </Card>
//   )
// };
// Form for uploading resources (PDFs and Videos)
const ResourceUploadForm = () => {
  const [branch, setBranch] = useState("CSE");
  const [year, setYear] = useState("1");
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [resourceType, setResourceType] = useState("notes-pdfs");
  const [unit, setUnit] = useState(1);
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [videoUrl, setVideoUrl] = useState(""); // State for the video URL
  const [loading, setLoading] = useState(false);

  const branches = ["CSE", "CSE-AI", "ECE", "ECE-AI", "IT", "AI&ML", "MAE/DMAM"];
  const years = ["1", "2", "3", "4"];
  
  // FIX: Added "Video Lectures" with the correct value
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
          const res = await axios.get<{ sem1: any[]; sem2: any[] }>("http://localhost:5000/api/academic/subjects", {
            params: { branch, year },
          });
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
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // FIX: Updated validation logic
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

    // FIX: Conditionally append either the videoUrl or the file
    if (resourceType === "video-lectures") {
      formData.append("videoUrl", videoUrl);
    } else {
      if (file) {
        formData.append("resourceFile", file);
      }
    }

    try {
        const res = await axios.post("http://localhost:5000/api/upload", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        toast.success((res.data as { msg?: string }).msg ?? "Upload successful!");
        setSelectedSubject("");
        setTitle("");
        setUnit(1);
        setFile(null);
        setVideoUrl("");
        (e.target as HTMLFormElement).reset();

    } catch (error: any) {
        console.error("Upload failed", error);
        toast.error(error.response?.data?.msg || "Upload failed. Please try again.");
    } finally {
        setLoading(false);
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
          {/* Branch, Year, and Subject selectors remain the same */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Branch</Label>
              <Select value={branch} onValueChange={setBranch}>
                <SelectTrigger><SelectValue placeholder="Select Branch" /></SelectTrigger>
                <SelectContent>
                  {branches.map(b => <SelectItem key={b} value={b}>{b}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Year</Label>
              <Select value={year} onValueChange={setYear}>
                <SelectTrigger><SelectValue placeholder="Select Year" /></SelectTrigger>
                <SelectContent>
                  {years.map(y => <SelectItem key={y} value={y}>{y}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
              <Label>Subject</Label>
              <Select value={selectedSubject} onValueChange={setSelectedSubject} disabled={subjects.length === 0}>
                <SelectTrigger><SelectValue placeholder="Select a subject" /></SelectTrigger>
                <SelectContent>
                  {subjects.map((s: any) => <SelectItem key={s._id} value={s.name}>{s.name}</SelectItem>)}
                </SelectContent>
              </Select>
          </div>
          <div className="space-y-2">
              <Label>Resource Type</Label>
              <Select value={resourceType} onValueChange={setResourceType}>
                <SelectTrigger><SelectValue placeholder="Select a resource type" /></SelectTrigger>
                <SelectContent>
                  {resourceTypes.map(rt => <SelectItem key={rt.value} value={rt.value}>{rt.label}</SelectItem>)}
                </SelectContent>
              </Select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
                <Label htmlFor="unit">Unit</Label>
                <Input id="unit" type="number" value={unit} onChange={e => setUnit(parseInt(e.target.value))} min="1" max="4" required />
            </div>
             <div className="space-y-2">
                <Label htmlFor="title">Resource Title</Label>
                <Input id="title" type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g., Introduction to Calculus" required />
            </div>
          </div>
          
          {/* FIX: This section now correctly shows the URL field for videos */}
          // FIX: This section now correctly shows the URL field for videos
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
        required // It's required only when visible
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
        required // It's required only when visible
      />
    </div>
  )}
</div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Uploading..." : "Upload"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
};



// Form for adding scholarships
// const ScholarshipUploadForm = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     amount: "",
//     eligibility: "",
//     deadline: "",
//     category: "",
//     link: "",
//   });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e: any) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };
  
//   const handleSelectChange = (id: string, value: string) => {
//     setFormData({ ...formData, [id]: value });
//   };

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const res = await axios.post("http://localhost:5000/api/scholarships", formData);
//       toast.success("Scholarship added successfully!");
//       setFormData({ title: "", amount: "", eligibility: "", deadline: "", category: "", link: "" });
//     } catch (error: any) {
//       toast.error(error.response?.data?.msg || "Failed to add scholarship.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle className="flex items-center gap-2">
//           <Trophy className="h-6 w-6" />
//           Add Scholarship
//         </CardTitle>
//       </CardHeader>
//       <CardContent>
//         <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="space-y-2">
//                 <Label htmlFor="title">Title</Label>
//                 <Input id="title" value={formData.title} onChange={handleChange} placeholder="e.g., National Merit Scholarship" required/>
//             </div>
//             <div className="space-y-2">
//                 <Label htmlFor="amount">Amount</Label>
//                 <Input id="amount" value={formData.amount} onChange={handleChange} placeholder="e.g., ₹50,000" required/>
//             </div>
//              <div className="space-y-2">
//                 <Label htmlFor="eligibility">Eligibility</Label>
//                 <Input id="eligibility" value={formData.eligibility} onChange={handleChange} placeholder="e.g., CGPA > 8.5" required/>
//             </div>
//              <div className="space-y-2">
//                 <Label htmlFor="deadline">Deadline</Label>
//                 <Input id="deadline" type="date" value={formData.deadline} onChange={handleChange} required/>
//             </div>
//              <div className="space-y-2">
//                 <Label htmlFor="category">Category</Label>
//                  <Select value={formData.category} onValueChange={(value) => handleSelectChange("category", value)}>
//                     <SelectTrigger><SelectValue placeholder="Select a category" /></SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="Merit-based">Merit-based</SelectItem>
//                       <SelectItem value="Need-based">Need-based</SelectItem>
//                       <SelectItem value="Gender-specific">Gender-specific</SelectItem>
//                       <SelectItem value="Social Impact">Social Impact</SelectItem>
//                     </SelectContent>
//                   </Select>
//             </div>
//              <div className="space-y-2">
//                 <Label htmlFor="link">Apply Link</Label>
//                 <Input id="link" type="url" value={formData.link} onChange={handleChange} placeholder="https://example.com/apply" required/>
//             </div>
//              <Button type="submit" className="w-full" disabled={loading}>
//                 {loading ? "Adding..." : "Add Scholarship"}
//               </Button>
//         </form>
//       </CardContent>
//     </Card>
//   )
// };

export default AdminUpload;