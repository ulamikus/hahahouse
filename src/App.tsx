import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Tickets from "./pages/Tickets.tsx";
import PrivateEvents from "./pages/PrivateEvents.tsx";
import PrivateEventDetail from "./pages/PrivateEventDetail.tsx";
import Shop from "./pages/Shop.tsx";
import About from "./pages/About.tsx";
import NotFound from "./pages/NotFound.tsx";
import { BlogIndex, BlogPost } from "./pages/Blog.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/private-events" element={<PrivateEvents />} />
          <Route path="/private-events/:slug" element={<PrivateEventDetail />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
