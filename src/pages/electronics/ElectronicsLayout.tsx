import { Link, Outlet, useLocation } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Menu, X, Zap, Shield, Headphones } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", path: "/electronics-shop" },
  { label: "Products", path: "/electronics-shop/products" },
  { label: "Services", path: "/electronics-shop/services" },
  { label: "About", path: "/electronics-shop/about" },
  { label: "Contact", path: "/electronics-shop/contact" },
];

const ElectronicsLayout = () => {
  const { totalItems } = useCart();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ fontFamily: "'DM Sans', sans-serif", background: "#f0f4f8", color: "#0f172a" }}>
      <Link
        to="/portfolio"
        className="fixed top-4 left-4 z-50 flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold shadow-lg"
        style={{ background: "#0ea5e9", color: "#fff" }}
      >
        <ArrowLeft size={14} /> Back to Portfolio
      </Link>

      <header className="sticky top-0 z-40 border-b" style={{ background: "rgba(15,23,42,0.97)", backdropFilter: "blur(12px)", borderColor: "rgba(14,165,233,0.1)" }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/electronics-shop" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.5rem", fontWeight: 700, textDecoration: "none" }}>
            <span style={{ color: "#0ea5e9" }}>Tech</span><span style={{ color: "#fff" }}>Wave</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm transition-colors duration-300"
                style={{
                  color: location.pathname === item.path ? "#0ea5e9" : "rgba(255,255,255,0.6)",
                  fontWeight: location.pathname === item.path ? 600 : 400,
                  textDecoration: "none",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/electronics-shop/cart" className="relative" style={{ color: "#0ea5e9" }}>
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
                  style={{ background: "#0ea5e9", color: "#fff" }}
                >
                  {totalItems}
                </motion.span>
              )}
            </Link>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden" style={{ color: "#fff" }}>
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
              style={{ borderColor: "rgba(14,165,233,0.1)" }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-sm"
                  style={{ color: location.pathname === item.path ? "#0ea5e9" : "rgba(255,255,255,0.6)", textDecoration: "none" }}
                >
                  {item.label}
                </Link>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <Outlet />

      <footer className="py-16" style={{ background: "#0f172a", color: "#fff" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-3 gap-10 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                <span style={{ color: "#0ea5e9" }}>Tech</span>Wave
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                Mombasa's trusted electronics retailer offering the latest tech products and professional services.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4" style={{ color: "#0ea5e9" }}>Quick Links</h4>
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link key={item.path} to={item.path} className="block text-xs" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4" style={{ color: "#0ea5e9" }}>Why TechWave?</h4>
              <ul className="space-y-2 text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                <li className="flex items-center gap-2"><Headphones size={12} /> 24/7 Tech Support</li>
                <li className="flex items-center gap-2"><Shield size={12} /> Genuine Products Only</li>
                <li className="flex items-center gap-2"><Zap size={12} /> Same-Day Delivery</li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-6 text-center text-xs" style={{ borderColor: "rgba(14,165,233,0.15)", color: "rgba(255,255,255,0.3)" }}>
            © 2025 TechWave Electronics. All rights reserved. | Website by Unify Studios
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ElectronicsLayout;
