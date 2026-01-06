import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect, useMemo, useState } from "react";
import SubscribeModal from "./components/SubscribeModal";
import { SubscribeModalProvider } from "./components/SubscribeModalProvider";
import { useSubscribeModal } from "./components/useSubscribeModal";
import ScrollToHero from "./components/ScrollToHero";

const Index = lazy(() => import("./pages/Index"));
const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const About = lazy(() => import("./pages/About"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Article = lazy(() => import("./pages/Article"));
const Author = lazy(() => import("./pages/Author"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const BeehiivPreload = () => {
  useEffect(() => {
    const existing = document.querySelector(
      'script[src="https://subscribe-forms.beehiiv.com/embed.js"]'
    );

    if (!existing) {
      const script = document.createElement('script');
      script.src = 'https://subscribe-forms.beehiiv.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <iframe
      src="https://subscribe-forms.beehiiv.com/4e2ff8db-5fc9-4167-a023-4a67f9e055d6"
      className="beehiiv-embed"
      data-test-id="beehiiv-embed-preload"
      frameBorder={0}
      scrolling="no"
      style={{
        position: 'absolute',
        left: '-9999px',
        top: 0,
        width: '604px',
        height: '294px',
        opacity: 0,
        pointerEvents: 'none',
        margin: 0,
        borderRadius: '0px 0px 0px 0px',
        backgroundColor: 'transparent',
        boxShadow: '0 0 #0000',
        maxWidth: '100%'
      }}
      title="Beehiiv subscribe preload"
      loading="eager"
    />
  );
};

const SubscribeModalHost = () => {
  const { isSubscribeOpen, closeSubscribe } = useSubscribeModal();
  return <SubscribeModal isOpen={isSubscribeOpen} onClose={closeSubscribe} />;
};

const AppLoader = ({ label }: { label?: string }) => (
  <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
    <div className="h-full w-full flex items-center justify-center">
      <div className="flex flex-col items-center text-center px-6">
        <div className="h-10 w-10 rounded-full border-2 border-border border-t-foreground animate-spin" />
        {label ? <div className="mt-4 text-xs font-semibold tracking-wide text-muted-foreground uppercase">{label}</div> : null}
      </div>
    </div>
  </div>
);

const AppRoutes = () => {
  const location = useLocation();
  const [isRouteLoading, setIsRouteLoading] = useState(false);

  const loaderLabel = useMemo(() => {
    if (location.pathname === "/") return "Loading";
    if (location.pathname.startsWith("/author")) return "Loading profile";
    if (location.pathname.startsWith("/article")) return "Loading article";
    return "Loading";
  }, [location.pathname]);

  useEffect(() => {
    setIsRouteLoading(true);
    const id = window.setTimeout(() => setIsRouteLoading(false), 240);
    return () => window.clearTimeout(id);
  }, [location.pathname]);

  return (
    <>
      {isRouteLoading ? <AppLoader label={loaderLabel} /> : null}
      <Suspense fallback={<AppLoader label={loaderLabel} />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/ai-drug-discovery"
            element={
              <CategoryPage
                title="AI in Drug Discovery"
                description="Machine learning, predictive models, and computational biology—how AI is changing discovery workflows and probability of success."
                category="AI in Drug Discovery"
              />
            }
          />
          <Route
            path="/biopharma-industry"
            element={
              <CategoryPage
                title="Biopharmaceutical Industry"
                description="Drug development, clinical trials, and industry dynamics—what changes timelines, risk, and competitive positioning."
                category="Biopharmaceutical Industry"
              />
            }
          />
          <Route
            path="/biotech-innovation"
            element={
              <CategoryPage
                title="Biotech Innovation"
                description="Gene therapy, CRISPR, synthetic biology, and emerging platforms—what’s real, what’s hype, and what translates."
                category="Biotech Innovation"
              />
            }
          />
          <Route
            path="/healthcare-investment"
            element={
              <CategoryPage
                title="Healthcare Investment"
                description="Funding rounds, M&A, IPOs, and market analysis—where capital is flowing and why the tape moves."
                category="Healthcare Investment"
              />
            }
          />
          <Route
            path="/medical-technology"
            element={
              <CategoryPage
                title="Medical Technology"
                description="Digital health, diagnostics, and medical devices—signals that matter for adoption, reimbursement, and outcomes."
                category="Medical Technology"
              />
            }
          />
          <Route
            path="/regulatory-policy"
            element={
              <CategoryPage
                title="Regulatory & Policy"
                description="FDA actions, approvals, policy shifts, and compliance—how rules change timelines and probability."
                category="Regulatory & Policy"
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/article/:slug" element={<Article />} />
          <Route path="/author/:slug" element={<Author />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <SubscribeModalProvider>
        <BeehiivPreload />
        <BrowserRouter>
          <ScrollToHero />
          <AppRoutes />
          <SubscribeModalHost />
        </BrowserRouter>
      </SubscribeModalProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
