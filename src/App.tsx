import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SubscribeModal from "./components/SubscribeModal";
import { SubscribeModalProvider } from "./components/SubscribeModalProvider";
import { useSubscribeModal } from "./components/useSubscribeModal";
import Index from "./pages/Index";
import News from "./pages/News";
import Analysis from "./pages/Analysis";
import Market from "./pages/Market";
import AiScience from "./pages/AiScience";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";

const queryClient = new QueryClient();

const SubscribeModalHost = () => {
  const { isSubscribeOpen, closeSubscribe } = useSubscribeModal();
  return <SubscribeModal isOpen={isSubscribeOpen} onClose={closeSubscribe} />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <SubscribeModalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/news" element={<News />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/market" element={<Market />} />
            <Route path="/ai-science" element={<AiScience />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<Admin />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <SubscribeModalHost />
        </BrowserRouter>
      </SubscribeModalProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
