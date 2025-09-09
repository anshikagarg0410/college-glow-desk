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
// import About from "./pages/About";
// import ExploreSocieties from "./pages/ExploreSocieties";
// import SocietyCategoryPage from "./components/SocietyCategoryPage";

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
//           <Route path="/about" element={<About />} />
//           <Route path="/societies" element={<ExploreSocieties />} />
//           <Route path="/societies/:categoryName" element={<SocietyCategoryPage />} />
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
import About from "./pages/About";
import ExploreSocieties from "./pages/ExploreSocieties";
import SocietyCategoryPage from "./components/SocietyCategoryPage";

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
          {/* <Route path="/internships" element={<ComingSoon />} /> */}
          <Route path="/hackathons" element={<ComingSoon />} />
          <Route path="/admin-upload" element={<AdminUpload />} />
          <Route path="/about" element={<About />} />
          <Route path="/societies" element={<ExploreSocieties />} />
          <Route path="/societies/:categoryName" element={<SocietyCategoryPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;