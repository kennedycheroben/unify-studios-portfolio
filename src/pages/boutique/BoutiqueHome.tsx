import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Heart, ChevronRight } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import boutiqueHero from "@/assets/boutique-hero.png";
import { boutiqueProducts, boutiqueServices } from "./boutiqueData";
import { toast } from "sonner";

const BoutiqueHome = () => {
  const { addItem } = useCart();
  const featured = boutiqueProducts.slice(0, 6);

  return (
    <>
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
              <Link
                to="/boutique-shop/collections"
                className="inline-block px-8 py-3 rounded-lg text-sm font-semibold transition-transform hover:-translate-y-1"
                style={{ background: "#8b6914", color: "#faf8f5", textDecoration: "none" }}
              >
                Shop New Arrivals
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Featured Collections</h2>
            <p className="text-sm mt-2" style={{ color: "#7a7064" }}>Handpicked pieces for every occasion</p>
          </div>
          <Link to="/boutique-shop/collections" className="flex items-center gap-1 text-sm font-semibold" style={{ color: "#8b6914", textDecoration: "none" }}>
            View All <ChevronRight size={16} />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-xl overflow-hidden border transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              style={{ borderColor: "#e8e0d5", background: "#fff" }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <button className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "rgba(255,255,255,0.9)" }}>
                  <Heart size={16} style={{ color: "#8b6914" }} />
                </button>
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-semibold" style={{ background: "#8b6914", color: "#fff" }}>
                  {item.category}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1 mb-2">
                  <Star size={12} fill="#8b6914" stroke="none" />
                  <span className="text-xs" style={{ color: "#8b6914" }}>{item.rating}</span>
                </div>
                <h3 className="font-semibold text-base mb-1">{item.name}</h3>
                <p className="text-xs mb-3" style={{ color: "#7a7064" }}>{item.description}</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold" style={{ color: "#8b6914" }}>{item.price}</p>
                  <button
                    onClick={() => { addItem(item); toast.success(`${item.name} added to bag`); }}
                    className="px-4 py-2 rounded-lg text-xs font-semibold transition-all hover:shadow-md"
                    style={{ background: "#8b6914", color: "#fff" }}
                  >
                    Add to Bag
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20" style={{ background: "#2a2118" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#faf8f5" }}>Our Services</h2>
            <p className="text-sm" style={{ color: "rgba(250,248,245,0.6)" }}>Exclusive fashion services tailored for you</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {boutiqueServices.slice(0, 4).map((s, i) => (
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
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/boutique-shop/services" className="inline-block px-6 py-3 rounded-lg text-sm font-semibold border" style={{ borderColor: "#d4a843", color: "#d4a843", textDecoration: "none" }}>
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BoutiqueHome;
