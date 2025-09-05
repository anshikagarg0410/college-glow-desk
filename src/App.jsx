import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AcademicResources from "./pages/AcademicResources";
import CGPACalculator from "./pages/CGPACalculator";
import Scholarships from "./pages/Scholarships";
import Internships from "./pages/Internships";
import Hackathons from "./pages/Hackathons";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

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
          <Route path="/cgpa-calculator" element={<CGPACalculator />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/hackathons" element={<Hackathons />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;