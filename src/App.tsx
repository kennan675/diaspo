
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Impact from "./pages/Impact";
import HPodKiosk from "./pages/HPodKiosk";
import Contact from "./pages/Contact";
import CareCoordination from "./pages/CareCoordination";
import ProviderRegistration from "./pages/ProviderRegistration";
import HealthcareFinancing from "./pages/HealthcareFinancing";
import FamilyHealthWallet from "./pages/FamilyHealthWallet";
import MDConnect from "./pages/MDConnect";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="light">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/hpod-kiosk" element={<HPodKiosk />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/care-coordination" element={<CareCoordination />} />
            <Route path="/provider-registration" element={<ProviderRegistration />} />
            <Route path="/healthcare-financing" element={<HealthcareFinancing />} />
            <Route path="/family-health-wallet" element={<FamilyHealthWallet />} />
            <Route path="/md-connect" element={<MDConnect />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
