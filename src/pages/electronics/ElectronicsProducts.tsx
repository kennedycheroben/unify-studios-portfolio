import { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { electronicsProducts, electronicsCategories } from "./electronicsData";
import { toast } from "sonner";

const ElectronicsProducts = () => {
  const { addItem } = useCart();
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? electronicsProducts : electronicsProducts.filter((p) => p.category === activeCategory);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>All Products</h1>
        <p className="text-sm" style={{ color: "#64748b" }}>Browse our complete range of electronics</p>
      </div>

      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {electronicsCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className="px-4 py-2 rounded-full text-xs font-semibold transition-all"
            style={{
              background: activeCategory === cat ? "#0ea5e9" : "transparent",
              color: activeCategory === cat ? "#fff" : "#64748b",
              border: `1px solid ${activeCategory === cat ? "#0ea5e9" : "#e2e8f0"}`,
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <p className="text-sm mb-6" style={{ color: "#64748b" }}>{filtered.length} products</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((item, i) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="group rounded-xl overflow-hidden border transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            style={{ borderColor: "#e2e8f0", background: "#fff" }}
          >
            <div className="relative aspect-square overflow-hidden" style={{ background: "#f8fafc" }}>
              <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-semibold" style={{ background: "#0ea5e9", color: "#fff" }}>
                {item.category}
              </span>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-1 mb-2">
                <Star size={12} fill="#0ea5e9" stroke="none" />
                <span className="text-xs" style={{ color: "#0ea5e9" }}>{item.rating}</span>
              </div>
              <h3 className="font-semibold text-sm mb-1">{item.name}</h3>
              <p className="text-xs mb-3 line-clamp-2" style={{ color: "#64748b" }}>{item.description}</p>
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold" style={{ color: "#0ea5e9" }}>{item.price}</p>
                <button
                  onClick={() => { addItem(item); toast.success(`${item.name} added to cart`); }}
                  className="px-3 py-2 rounded-lg text-xs font-semibold transition-all hover:shadow-md"
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
  );
};

export default ElectronicsProducts;
