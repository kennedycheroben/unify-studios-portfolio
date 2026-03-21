import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Zap, ChevronRight, Shield, Cpu, Monitor, Smartphone } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import electronicsHero from "@/assets/electronics-hero.png";
import { electronicsProducts, electronicsServices } from "./electronicsData";
import { toast } from "sonner";

const ElectronicsHome = () => {
  const { addItem } = useCart();
  const featured = electronicsProducts.slice(0, 6);

  const iconMap: Record<string, any> = { Shield, Cpu, Monitor, Smartphone, Zap };

  return (
    <>
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
              <Link
                to="/electronics-shop/products"
                className="inline-block px-8 py-3 rounded-lg text-sm font-semibold transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(14,165,233,0.4)]"
                style={{ background: "#0ea5e9", color: "#fff", textDecoration: "none" }}
              >
                Browse Products
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Featured Products</h2>
            <p className="text-sm mt-2" style={{ color: "#64748b" }}>The latest and greatest tech at competitive prices</p>
          </div>
          <Link to="/electronics-shop/products" className="flex items-center gap-1 text-sm font-semibold" style={{ color: "#0ea5e9", textDecoration: "none" }}>
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
              style={{ borderColor: "#e2e8f0", background: "#fff" }}
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
                <p className="text-xs mb-3" style={{ color: "#64748b" }}>{item.description}</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold" style={{ color: "#0ea5e9" }}>{item.price}</p>
                  <button
                    onClick={() => { addItem(item); toast.success(`${item.name} added to cart`); }}
                    className="px-4 py-2 rounded-lg text-xs font-semibold transition-all hover:shadow-md"
                    style={{ background: "#0ea5e9", color: "#fff" }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20" style={{ background: "#0f172a" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#fff" }}>Our Services</h2>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>Expert tech support and premium services</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {electronicsServices.slice(0, 4).map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1"
                style={{ borderColor: "rgba(14,165,233,0.15)", background: "rgba(14,165,233,0.05)" }}
              >
                <h3 className="font-semibold text-base mb-2" style={{ color: "#fff" }}>{s.title}</h3>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/electronics-shop/services" className="inline-block px-6 py-3 rounded-lg text-sm font-semibold border" style={{ borderColor: "#0ea5e9", color: "#0ea5e9", textDecoration: "none" }}>
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ElectronicsHome;
