import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Boutique
import BoutiqueLayout from "./pages/boutique/BoutiqueLayout";
import BoutiqueHome from "./pages/boutique/BoutiqueHome";
import BoutiqueCollections from "./pages/boutique/BoutiqueCollections";
import BoutiqueServices from "./pages/boutique/BoutiqueServices";
import BoutiqueAbout from "./pages/boutique/BoutiqueAbout";
import BoutiqueContact from "./pages/boutique/BoutiqueContact";
import BoutiqueCart from "./pages/boutique/BoutiqueCart";

// Electronics
import ElectronicsLayout from "./pages/electronics/ElectronicsLayout";
import ElectronicsHome from "./pages/electronics/ElectronicsHome";
import ElectronicsProducts from "./pages/electronics/ElectronicsProducts";
import ElectronicsServices from "./pages/electronics/ElectronicsServices";
import ElectronicsAbout from "./pages/electronics/ElectronicsAbout";
import ElectronicsContact from "./pages/electronics/ElectronicsContact";
import ElectronicsCart from "./pages/electronics/ElectronicsCart";
import AdminPortal from "./pages/AdminPortal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          {/* Boutique Shop */}
          <Route path="/boutique-shop" element={<CartProvider><BoutiqueLayout /></CartProvider>}>
            <Route index element={<BoutiqueHome />} />
            <Route path="collections" element={<BoutiqueCollections />} />
            <Route path="services" element={<BoutiqueServices />} />
            <Route path="about" element={<BoutiqueAbout />} />
            <Route path="contact" element={<BoutiqueContact />} />
            <Route path="cart" element={<BoutiqueCart />} />
          </Route>

          {/* Electronics Shop */}
          <Route path="/electronics-shop" element={<CartProvider><ElectronicsLayout /></CartProvider>}>
            <Route index element={<ElectronicsHome />} />
            <Route path="products" element={<ElectronicsProducts />} />
            <Route path="services" element={<ElectronicsServices />} />
            <Route path="about" element={<ElectronicsAbout />} />
            <Route path="contact" element={<ElectronicsContact />} />
            <Route path="cart" element={<ElectronicsCart />} />
          </Route>

          <Route path="*" element={<NotFound />} />
          <Route path="/admin-secret-portal" element={<AdminPortal />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
