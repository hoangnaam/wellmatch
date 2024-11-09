import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import UserProfile from "./pages/UserProfile";
import JobMatchDashboard from "./components/JobMatchDashboard";
import CompanyProfile from "./pages/CompanyProfile";
import MentalHealthCenter from "./pages/MentalHealthCenter";
import CommunityForum from "./pages/CommunityForum";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/matches" element={<JobMatchDashboard />} />
          <Route path="/company/:id" element={<CompanyProfile />} />
          <Route path="/mental-health" element={<MentalHealthCenter />} />
          <Route path="/community" element={<CommunityForum />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;