import { motion } from "framer-motion";
import { boutiqueServices } from "./boutiqueData";
import { Link } from "react-router-dom";

const BoutiqueServices = () => (
  <section className="max-w-6xl mx-auto px-6 py-16">
    <div className="text-center mb-14">
      <h1 className="text-3xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Our Services</h1>
      <p className="text-sm" style={{ color: "#7a7064" }}>Exclusive fashion services tailored for you</p>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {boutiqueServices.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="p-8 rounded-xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
          style={{ borderColor: "#e8e0d5", background: "#fff" }}
        >
          <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: "rgba(139,105,20,0.1)" }}>
            <span className="text-xl">✨</span>
          </div>
          <h3 className="font-semibold text-lg mb-2" style={{ color: "#2a2118" }}>{s.title}</h3>
          <p className="text-sm leading-relaxed" style={{ color: "#7a7064" }}>{s.desc}</p>
        </motion.div>
      ))}
    </div>
    <div className="text-center mt-14">
      <p className="text-sm mb-4" style={{ color: "#7a7064" }}>Interested in any of our services?</p>
      <Link
        to="/boutique-shop/contact"
        className="inline-block px-8 py-3 rounded-lg text-sm font-semibold transition-transform hover:-translate-y-1"
        style={{ background: "#8b6914", color: "#faf8f5", textDecoration: "none" }}
      >
        Get in Touch
      </Link>
    </div>
  </section>
);

export default BoutiqueServices;
