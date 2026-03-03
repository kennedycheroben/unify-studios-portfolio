import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Phone, Mail, MapPin, Clock, ShoppingBag, Star, Heart, ChevronRight, Instagram, Facebook } from "lucide-react";
import { motion } from "framer-motion";
import boutiqueHero from "@/assets/boutique-hero.png";
import product1 from "@/assets/boutique-product1.png";
import product2 from "@/assets/boutique-product2.png";

// dynamic asset map to prefer newly added product images matching product names
const _rawBoutiqueAssets = import.meta.glob('/src/assets/*.{png,jpg,jpeg,webp,avif}', { eager: true }) as Record<string, any>;
const _boutiqueAssetMap: Record<string, string> = Object.keys(_rawBoutiqueAssets).reduce((acc, p) => {
  const file = p.split('/').pop()?.toLowerCase() || p;
  const url = _rawBoutiqueAssets[p]?.default ?? _rawBoutiqueAssets[p];
  acc[file] = url;
  return acc;
}, {} as Record<string, string>);

const _findImageForName = (name: string) => {
  if (!name) return undefined;
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const exts = ['png','jpg','jpeg','webp','avif'];
  for (const ext of exts) {
    const candidate = `${slug}.${ext}`;
    if (_boutiqueAssetMap[candidate]) return _boutiqueAssetMap[candidate];
  }
  const found = Object.keys(_boutiqueAssetMap).find(k => k.includes(slug));
  return found ? _boutiqueAssetMap[found] : undefined;
};

const navItems = ["Home", "Collections", "Services", "About", "Contact"];

const collections = [
  { name: "Evening Gowns", image: product1, price: "KES 12,500", rating: 4.8 },
  { name: "Designer Handbags", image: product2, price: "KES 8,900", rating: 4.9 },
  { name: "Silk Scarves", image: product1, price: "KES 3,200", rating: 4.7 },
  { name: "Cocktail Dresses", image: product2, price: "KES 9,800", rating: 4.6 },
  { name: "Leather Clutches", image: product2, price: "KES 5,500", rating: 4.8 },
  { name: "Maxi Dresses", image: product1, price: "KES 7,400", rating: 4.5 },
];

const services = [
  { title: "Personal Styling", desc: "One-on-one styling sessions with our expert fashion consultants." },
  { title: "Alterations & Tailoring", desc: "Perfect fit guaranteed with our in-house tailoring service." },
  { title: "Bridal Consultation", desc: "Complete bridal styling for your special day." },
  { title: "Corporate Wardrobe", desc: "Professional wardrobe curation for the modern businesswoman." },
];

const BoutiqueShop = () => {
  const [activeSection, setActiveSection] = useState("Home");

  return (
    <div className="min-h-screen" style={{ fontFamily: "'DM Sans', sans-serif", background: "#faf8f5", color: "#2a2118" }}>
      {/* Back to Portfolio */}
      <Link
        to="/portfolio"
        className="fixed top-4 left-4 z-50 flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold"
        style={{ background: "#2a2118", color: "#faf8f5" }}
      >
        <ArrowLeft size={14} /> Back to Portfolio
      </Link>

      {/* Nav */}
      <header className="sticky top-0 z-40 border-b" style={{ background: "rgba(250,248,245,0.95)", backdropFilter: "blur(12px)", borderColor: "#e8e0d5" }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.5rem", fontWeight: 700, color: "#8b6914" }}>
            Ëlegance
          </h1>
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item)}
                className="text-sm transition-colors duration-300"
                style={{ color: activeSection === item ? "#8b6914" : "#7a7064", fontWeight: activeSection === item ? 600 : 400 }}
              >
                {item}
              </button>
            ))}
          </nav>
          <ShoppingBag size={20} style={{ color: "#8b6914" }} />
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[85vh] overflow-hidden">
        <img src={boutiqueHero} alt="Ëlegance Boutique" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(42,33,24,0.7), rgba(42,33,24,0.2))" }} />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#d4a843" }}>Nairobi's Premier Fashion Destination</p>
              <h2 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#faf8f5" }}>
                Timeless Elegance,<br />Modern Style
              </h2>
              <p className="text-base mb-8 max-w-md" style={{ color: "rgba(250,248,245,0.8)" }}>
                Curated collections of designer fashion for the sophisticated woman.
              </p>
              <button className="px-8 py-3 rounded-lg text-sm font-semibold transition-transform hover:-translate-y-1" style={{ background: "#8b6914", color: "#faf8f5" }}>
                Shop New Arrivals
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#2a2118" }}>Our Collections</h2>
          <p className="text-sm" style={{ color: "#7a7064" }}>Handpicked pieces for every occasion</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-xl overflow-hidden border transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              style={{ borderColor: "#e8e0d5", background: "#fff" }}
            >
                <div className="relative aspect-square overflow-hidden">
                <img src={_findImageForName(item.name) ?? item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <button className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "rgba(255,255,255,0.9)" }}>
                  <Heart size={16} style={{ color: "#8b6914" }} />
                </button>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1 mb-2">
                  <Star size={12} fill="#8b6914" stroke="none" />
                  <span className="text-xs" style={{ color: "#8b6914" }}>{item.rating}</span>
                </div>
                <h3 className="font-semibold text-base mb-1">{item.name}</h3>
                <p className="text-sm font-bold" style={{ color: "#8b6914" }}>{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20" style={{ background: "#2a2118" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#faf8f5" }}>Our Services</h2>
            <p className="text-sm" style={{ color: "rgba(250,248,245,0.6)" }}>Exclusive fashion services tailored for you</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1"
                style={{ borderColor: "rgba(212,168,67,0.2)", background: "rgba(212,168,67,0.05)" }}
              >
                <h3 className="font-semibold text-base mb-2" style={{ color: "#d4a843" }}>{s.title}</h3>
                <p className="text-sm" style={{ color: "rgba(250,248,245,0.7)" }}>{s.desc}</p>
                <button className="flex items-center gap-1 mt-4 text-xs font-semibold" style={{ color: "#d4a843" }}>
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
          <div className="rounded-2xl overflow-hidden">
            <img src={boutiqueHero} alt="About Ëlegance" className="w-full h-80 object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Our Story</h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#7a7064" }}>
              Founded in the heart of Nairobi, Ëlegance Boutique has been the go-to destination for fashion-forward women since 2019. 
              We curate collections from emerging and established designers to bring you pieces that are both timeless and on-trend.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#7a7064" }}>
              Our philosophy is simple: every woman deserves to feel confident and beautiful. From casual chic to black-tie glamour, 
              we have something for every occasion and every style.
            </p>
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
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
              <h4 className="text-sm font-semibold mb-4" style={{ color: "#d4a843" }}>Contact</h4>
              <div className="space-y-3 text-xs" style={{ color: "rgba(250,248,245,0.6)" }}>
                <p className="flex items-center gap-2"><MapPin size={12} /> Westlands, Nairobi, Kenya</p>
                <p className="flex items-center gap-2"><Phone size={12} /> +254 7XX XXX XXX</p>
                <p className="flex items-center gap-2"><Mail size={12} /> hello@eleganceboutique.co.ke</p>
                <p className="flex items-center gap-2"><Clock size={12} /> Mon-Sat: 9AM - 7PM</p>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4" style={{ color: "#d4a843" }}>Follow Us</h4>
              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ border: "1px solid rgba(212,168,67,0.3)" }}>
                  <Instagram size={16} style={{ color: "#d4a843" }} />
                </div>
                <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ border: "1px solid rgba(212,168,67,0.3)" }}>
                  <Facebook size={16} style={{ color: "#d4a843" }} />
                </div>
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

export default BoutiqueShop;
