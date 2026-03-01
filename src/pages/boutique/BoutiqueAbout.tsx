import { motion } from "framer-motion";
import boutiqueHero from "@/assets/boutique-hero.png";

const BoutiqueAbout = () => (
  <section className="max-w-6xl mx-auto px-6 py-16">
    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="rounded-2xl overflow-hidden">
        <img src={boutiqueHero} alt="About Ëlegance" className="w-full h-96 object-cover" />
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
        <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Our Story</h1>
        <p className="text-sm leading-relaxed mb-4" style={{ color: "#7a7064" }}>
          Founded in the heart of Nairobi, Ëlegance Boutique has been the go-to destination for fashion-forward women since 2019. 
          We curate collections from emerging and established designers to bring you pieces that are both timeless and on-trend.
        </p>
        <p className="text-sm leading-relaxed mb-6" style={{ color: "#7a7064" }}>
          Our philosophy is simple: every woman deserves to feel confident and beautiful. From casual chic to black-tie glamour, 
          we have something for every occasion and every style.
        </p>
        <div className="flex gap-8">
          {[{ val: "6+", label: "Years" }, { val: "10K+", label: "Customers" }, { val: "500+", label: "Pieces" }].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-bold" style={{ color: "#8b6914" }}>{s.val}</p>
              <p className="text-xs" style={{ color: "#7a7064" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>

    <div className="text-center max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Our Values</h2>
      <div className="grid sm:grid-cols-3 gap-6 mt-8">
        {[
          { title: "Quality", desc: "Every piece is carefully inspected for craftsmanship and quality materials." },
          { title: "Sustainability", desc: "We partner with designers who prioritize ethical and sustainable fashion." },
          { title: "Inclusivity", desc: "Fashion for every body type, style preference, and occasion." },
        ].map((v, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
            className="p-6 rounded-xl border" style={{ borderColor: "#e8e0d5" }}>
            <h3 className="font-semibold mb-2" style={{ color: "#8b6914" }}>{v.title}</h3>
            <p className="text-xs" style={{ color: "#7a7064" }}>{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BoutiqueAbout;
