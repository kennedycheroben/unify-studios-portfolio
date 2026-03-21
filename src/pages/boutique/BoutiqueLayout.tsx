import { Link, Outlet, useLocation } from "react-router-dom";
import { ArrowLeft, ShoppingBag, Heart, Menu, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", path: "/boutique-shop" },
  { label: "Collections", path: "/boutique-shop/collections" },
  { label: "Services", path: "/boutique-shop/services" },
  { label: "About", path: "/boutique-shop/about" },
  { label: "Contact", path: "/boutique-shop/contact" },
];

const BoutiqueLayout = () => {
  const { totalItems } = useCart();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ fontFamily: "'DM Sans', sans-serif", background: "#faf8f5", color: "#2a2118" }}>
      <Link
        to="/portfolio"
        className="fixed top-4 left-4 z-50 flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold shadow-lg"
        style={{ background: "#2a2118", color: "#faf8f5" }}
      >
        <ArrowLeft size={14} /> Back to Portfolio
      </Link>

      <header className="sticky top-0 z-40 border-b" style={{ background: "rgba(250,248,245,0.95)", backdropFilter: "blur(12px)", borderColor: "#e8e0d5" }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/boutique-shop" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.5rem", fontWeight: 700, color: "#8b6914", textDecoration: "none" }}>
            Ëlegance
          </Link>
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm transition-colors duration-300"
                style={{
                  color: location.pathname === item.path ? "#8b6914" : "#7a7064",
                  fontWeight: location.pathname === item.path ? 600 : 400,
                  textDecoration: "none",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/boutique-shop/cart" className="relative" style={{ color: "#8b6914" }}>
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
                  style={{ background: "#8b6914", color: "#fff" }}
                >
                  {totalItems}
                </motion.span>
              )}
            </Link>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden" style={{ color: "#2a2118" }}>
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden border-t px-6"
              style={{ borderColor: "#e8e0d5" }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-sm"
                  style={{ color: location.pathname === item.path ? "#8b6914" : "#7a7064", textDecoration: "none" }}
                >
                  {item.label}
                </Link>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <Outlet />

      <footer className="py-16" style={{ background: "#2a2118", color: "#faf8f5" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-3 gap-10 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#d4a843" }}>Ëlegance</h3>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(250,248,245,0.6)" }}>
                Nairobi's premier fashion boutique offering curated designer collections and personalized styling services.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4" style={{ color: "#d4a843" }}>Quick Links</h4>
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link key={item.path} to={item.path} className="block text-xs" style={{ color: "rgba(250,248,245,0.6)", textDecoration: "none" }}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4" style={{ color: "#d4a843" }}>Contact</h4>
              <div className="space-y-2 text-xs" style={{ color: "rgba(250,248,245,0.6)" }}>
                <p>Westlands, Nairobi, Kenya</p>
                <p>+254 7XX XXX XXX</p>
                <p>hello@eleganceboutique.co.ke</p>
                <p>Mon-Sat: 9AM - 7PM</p>
              </div>
            </div>
          </div>
          <div className="border-t pt-6 text-center text-xs" style={{ borderColor: "rgba(212,168,67,0.2)", color: "rgba(250,248,245,0.4)" }}>
            © 2025 Ëlegance Boutique. All rights reserved. | Website by Unify Studios
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BoutiqueLayout;
