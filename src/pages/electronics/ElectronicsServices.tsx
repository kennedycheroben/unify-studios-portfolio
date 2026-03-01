import { motion } from "framer-motion";
import { Shield, Cpu, Monitor, Smartphone, Zap, Headphones } from "lucide-react";
import { electronicsServices } from "./electronicsData";
import { Link } from "react-router-dom";

const iconMap: Record<string, any> = { Shield, Cpu, Monitor, Smartphone, Zap, Headphones };

const ElectronicsServices = () => (
  <section className="max-w-6xl mx-auto px-6 py-16">
    <div className="text-center mb-14">
      <h1 className="text-3xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Our Services</h1>
      <p className="text-sm" style={{ color: "#64748b" }}>Expert tech support and premium services</p>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {electronicsServices.map((s, i) => {
        const Icon = iconMap[s.icon] || Zap;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            style={{ borderColor: "#e2e8f0", background: "#fff" }}
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: "rgba(14,165,233,0.1)" }}>
              <Icon size={22} style={{ color: "#0ea5e9" }} />
            </div>
            <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>{s.desc}</p>
          </motion.div>
        );
      })}
    </div>
    <div className="text-center mt-14">
      <p className="text-sm mb-4" style={{ color: "#64748b" }}>Need help with any of our services?</p>
      <Link
        to="/electronics-shop/contact"
        className="inline-block px-8 py-3 rounded-lg text-sm font-semibold transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(14,165,233,0.3)]"
        style={{ background: "#0ea5e9", color: "#fff", textDecoration: "none" }}
      >
        Contact Us
      </Link>
    </div>
  </section>
);

export default ElectronicsServices;
