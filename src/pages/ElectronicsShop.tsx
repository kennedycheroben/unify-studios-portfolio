import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Phone, Mail, MapPin, Clock, ShoppingCart, Star, Zap, Cpu, Monitor, Smartphone, Headphones, ChevronRight, Shield } from "lucide-react";
import { motion } from "framer-motion";
import electronicsHero from "@/assets/electronics-hero.png";
import phone from "@/assets/electronics-product1.png";
import laptop from "@/assets/electronics-product2.png";

const navItems = ["Home", "Products", "Services", "About", "Contact"];

const products = [
  { name: "ProMax Smartphone", image: phone, price: "KES 89,999", category: "Smartphones", rating: 4.9 },
  { name: "UltraBook Pro 15\"", image: laptop, price: "KES 145,000", category: "Laptops", rating: 4.8 },
  { name: "Wireless Earbuds X3", image: phone, price: "KES 7,500", category: "Audio", rating: 4.7 },
  { name: "Gaming Laptop Z5", image: laptop, price: "KES 198,000", category: "Laptops", rating: 4.9 },
  { name: "Smart Watch Series 8", image: phone, price: "KES 35,000", category: "Wearables", rating: 4.6 },
  { name: "4K Action Camera", image: phone, price: "KES 28,500", category: "Cameras", rating: 4.5 },
];

const techServices = [
  { icon: Shield, title: "Extended Warranty", desc: "Up to 3 years of comprehensive device protection and coverage." },
  { icon: Cpu, title: "Device Repair", desc: "Expert repairs for smartphones, laptops, tablets, and accessories." },
  { icon: Monitor, title: "Setup & Installation", desc: "Professional setup for home entertainment and computing systems." },
  { icon: Smartphone, title: "Trade-In Program", desc: "Exchange your old device for credit towards a new purchase." },
];

const ElectronicsShop = () => {
  const [activeSection, setActiveSection] = useState("Home");

  return (
    <div className="min-h-screen" style={{ fontFamily: "'DM Sans', sans-serif", background: "#f0f4f8", color: "#0f172a" }}>
      {/* Back to Portfolio */}
      <Link
        to="/portfolio"
        className="fixed top-4 left-4 z-50 flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold"
        style={{ background: "#0ea5e9", color: "#fff" }}
      >
        <ArrowLeft size={14} /> Back to Portfolio
      </Link>

      {/* Nav */}
      <header className="sticky top-0 z-40 border-b" style={{ background: "rgba(15,23,42,0.97)", backdropFilter: "blur(12px)", borderColor: "rgba(14,165,233,0.1)" }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.5rem", fontWeight: 700 }}>
            <span style={{ color: "#0ea5e9" }}>Tech</span><span style={{ color: "#fff" }}>Wave</span>
          </h1>
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item)}
                className="text-sm transition-colors duration-300"
                style={{ color: activeSection === item ? "#0ea5e9" : "rgba(255,255,255,0.6)", fontWeight: activeSection === item ? 600 : 400 }}
              >
                {item}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <ShoppingCart size={20} style={{ color: "#0ea5e9" }} />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[85vh] overflow-hidden">
        <img src={electronicsHero} alt="TechWave Electronics" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(15,23,42,0.85), rgba(15,23,42,0.4))" }} />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="flex items-center gap-2 mb-4">
                <Zap size={16} style={{ color: "#0ea5e9" }} />
                <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "#0ea5e9" }}>Mombasa's Tech Hub</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#fff" }}>
                Next-Gen Tech,<br />Today's Prices
              </h2>
              <p className="text-base mb-8 max-w-md" style={{ color: "rgba(255,255,255,0.7)" }}>
                Discover the latest smartphones, laptops, and gadgets at the best prices in Mombasa.
              </p>
              <button className="px-8 py-3 rounded-lg text-sm font-semibold transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(14,165,233,0.4)]" style={{ background: "#0ea5e9", color: "#fff" }}>
                Browse Products
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Featured Products</h2>
          <p className="text-sm" style={{ color: "#64748b" }}>The latest and greatest tech at competitive prices</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-xl overflow-hidden border transition-all duration-500 hover:-translate-y-2"
              style={{ borderColor: "#e2e8f0", background: "#fff", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}
            >
              <div className="relative aspect-square overflow-hidden" style={{ background: "#f8fafc" }}>
                <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-semibold" style={{ background: "#0ea5e9", color: "#fff" }}>
                  {item.category}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1 mb-2">
                  <Star size={12} fill="#0ea5e9" stroke="none" />
                  <span className="text-xs" style={{ color: "#0ea5e9" }}>{item.rating}</span>
                </div>
                <h3 className="font-semibold text-base mb-1">{item.name}</h3>
                <p className="text-sm font-bold" style={{ color: "#0ea5e9" }}>{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20" style={{ background: "#0f172a" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#fff" }}>Our Services</h2>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>Expert tech support and premium services</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {techServices.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1"
                style={{ borderColor: "rgba(14,165,233,0.15)", background: "rgba(14,165,233,0.05)" }}
              >
                <s.icon size={28} style={{ color: "#0ea5e9" }} className="mb-4" />
                <h3 className="font-semibold text-base mb-2" style={{ color: "#fff" }}>{s.title}</h3>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{s.desc}</p>
                <button className="flex items-center gap-1 mt-4 text-xs font-semibold" style={{ color: "#0ea5e9" }}>
                  Learn More <ChevronRight size={12} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>About TechWave</h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#64748b" }}>
              Located in the coastal city of Mombasa, TechWave Electronics has been serving tech enthusiasts and businesses since 2020. 
              We're your one-stop shop for the latest gadgets, computing solutions, and electronics accessories.
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#64748b" }}>
              Our team of certified technicians also offers professional repair services, device setup, and ongoing tech support 
              to keep you connected and productive.
            </p>
            <div className="flex gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold" style={{ color: "#0ea5e9" }}>5K+</p>
                <p className="text-xs" style={{ color: "#64748b" }}>Happy Customers</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold" style={{ color: "#0ea5e9" }}>200+</p>
                <p className="text-xs" style={{ color: "#64748b" }}>Products</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold" style={{ color: "#0ea5e9" }}>4.8</p>
                <p className="text-xs" style={{ color: "#64748b" }}>Avg Rating</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img src={electronicsHero} alt="About TechWave" className="w-full h-80 object-cover" />
          </div>
        </div>
      </section>

      {/* Footer */}
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
              <h4 className="text-sm font-semibold mb-4" style={{ color: "#0ea5e9" }}>Contact</h4>
              <div className="space-y-3 text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                <p className="flex items-center gap-2"><MapPin size={12} /> Nyali, Mombasa, Kenya</p>
                <p className="flex items-center gap-2"><Phone size={12} /> +254 7XX XXX XXX</p>
                <p className="flex items-center gap-2"><Mail size={12} /> sales@techwaveke.co.ke</p>
                <p className="flex items-center gap-2"><Clock size={12} /> Mon-Sat: 8AM - 8PM</p>
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

export default ElectronicsShop;
