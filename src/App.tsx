import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import all your page components
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import AddActivity from "./pages/AddActivity";
import Community from "./pages/Community";
import Guidelines from "./pages/Guidelines";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

// Initialize QueryClient for React Query
const queryClient = new QueryClient();

const App = () => (
  // Provide the QueryClient to your application
  <QueryClientProvider client={queryClient}>
    {/* TooltipProvider for UI components */}
    <TooltipProvider>
      {/* Toaster for displaying notifications */}
      <Toaster />
      {/* Sonner for displaying toast messages */}
      <Sonner />
      {/*
        BrowserRouter for client-side routing.
        Temporarily removed 'basename="/WebstackProject/"' for local development
        to resolve the "does not start with the basename" error when accessing
        http://localhost:5173/.
        REMEMBER TO ADD 'basename="/WebstackProject/"' BACK FOR DEPLOYMENT TO GITHUB PAGES.
      */}
      <BrowserRouter>
        {/* Define your application routes */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-activity" element={<AddActivity />} />
          <Route path="/community" element={<Community />} />
          <Route path="/guidelines" element={<Guidelines />} />
          <Route path="/profile" element={<Profile />} />
          {/* Catch-all route for 404 Not Found pages */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
