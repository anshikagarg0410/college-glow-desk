// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import AcademicResources from "./pages/AcademicResources";
// import CGPACalculator from "./pages/CGPACalculator";
// import SubjectResources from "./pages/SubjectResources";
// import ResourceDetail from "./pages/ResourceDetail";
// import NotFound from "./pages/NotFound";
// import ComingSoon from "./pages/ComingSoon";
// import AdminUpload from "./pages/AdminUpload";
// // If the file exists elsewhere, update the path accordingly, e.g.:
// // import AdminUpload from "./admin/AdminUpload";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/academic" element={<AcademicResources />} />
//           <Route
//             path="/academic/:branch/:year/:subject"
//             element={<SubjectResources />}
//           />
//           <Route
//             path="/academic/:branch/:year/:subject/:resourceType"
//             element={<ResourceDetail />}
//           />
//           <Route path="/cgpa-calculator" element={<CGPACalculator />} />
//           <Route path="/scholarships" element={<ComingSoon />} />
//           <Route path="/internships" element={<ComingSoon />} />
//           <Route path="/hackathons" element={<ComingSoon />} />
//           <Route path="/admin-upload" element={<AdminUpload />} />
//           {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AcademicResources from "./pages/AcademicResources";
import CGPACalculator from "./pages/CGPACalculator";
import SubjectResources from "./pages/SubjectResources";
import ResourceDetail from "./pages/ResourceDetail";
import NotFound from "./pages/NotFound";
import ComingSoon from "./pages/ComingSoon";
import AdminUpload from "./pages/AdminUpload";
import About from "./pages/About"; // Naya About component import kiya gaya hai

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/academic" element={<AcademicResources />} />
          <Route
            path="/academic/:branch/:year/:subject"
            element={<SubjectResources />}
          />
          <Route
            path="/academic/:branch/:year/:subject/:resourceType"
            element={<ResourceDetail />}
          />
          <Route path="/cgpa-calculator" element={<CGPACalculator />} />
          <Route path="/scholarships" element={<ComingSoon />} />
          <Route path="/internships" element={<ComingSoon />} />
          <Route path="/hackathons" element={<ComingSoon />} />
          <Route path="/admin-upload" element={<AdminUpload />} />
          {/* About page ke liye naya route joda gaya hai */}
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;