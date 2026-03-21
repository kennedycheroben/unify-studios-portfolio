import { motion } from "framer-motion";
import electronicsHero from "@/assets/electronics-hero.png";

const ElectronicsAbout = () => (
  <section className="max-w-6xl mx-auto px-6 py-16">
    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
        <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>About TechWave</h1>
        <p className="text-sm leading-relaxed mb-4" style={{ color: "#64748b" }}>
          Located in the coastal city of Mombasa, TechWave Electronics has been serving tech enthusiasts and businesses since 2020. 
          We're your one-stop shop for the latest gadgets, computing solutions, and electronics accessories.
        </p>
        <p className="text-sm leading-relaxed mb-6" style={{ color: "#64748b" }}>
          Our team of certified technicians also offers professional repair services, device setup, and ongoing tech support 
          to keep you connected and productive.
        </p>
        <div className="flex gap-8">
          {[{ val: "5K+", label: "Happy Customers" }, { val: "200+", label: "Products" }, { val: "4.8", label: "Avg Rating" }].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-bold" style={{ color: "#0ea5e9" }}>{s.val}</p>
              <p className="text-xs" style={{ color: "#64748b" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="rounded-2xl overflow-hidden">
        <img src={electronicsHero} alt="About TechWave" className="w-full h-96 object-cover" />
      </motion.div>
    </div>

    <div className="text-center max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Why Choose Us</h2>
      <div className="grid sm:grid-cols-3 gap-6 mt-8">
        {[
          { title: "Genuine Products", desc: "100% authentic products with manufacturer warranty and support." },
          { title: "Expert Support", desc: "Certified technicians available for setup, troubleshooting, and repairs." },
          { title: "Fast Delivery", desc: "Same-day delivery within Mombasa and next-day across the coast region." },
        ].map((v, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
            className="p-6 rounded-xl border" style={{ borderColor: "#e2e8f0", background: "#fff" }}>
            <h3 className="font-semibold mb-2" style={{ color: "#0ea5e9" }}>{v.title}</h3>
            <p className="text-xs" style={{ color: "#64748b" }}>{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ElectronicsAbout;
