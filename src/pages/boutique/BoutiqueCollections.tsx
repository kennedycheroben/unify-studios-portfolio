import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Heart, Filter } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { boutiqueProducts, boutiqueCategories } from "./boutiqueData";

// Dynamically load available asset files so we can match product names to newly added images.
const rawAssets = import.meta.glob('/src/assets/*.{png,jpg,jpeg,webp,avif}', { eager: true }) as Record<string, any>;
const assetFileMap: Record<string, string> = Object.keys(rawAssets).reduce((acc, p) => {
  const file = p.split('/').pop()?.toLowerCase() || p;
  const url = rawAssets[p]?.default ?? rawAssets[p];
  acc[file] = url;
  return acc;
}, {} as Record<string, string>);

const findMatchingImage = (name: string) => {
  if (!name) return undefined;
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-') ;
  // try common extensions
  const exts = ['png','jpg','jpeg','webp','avif'];
  for (const ext of exts) {
    const candidate = `${slug}.${ext}`;
    if (assetFileMap[candidate]) return assetFileMap[candidate];
  }
  // try contains match
  const keys = Object.keys(assetFileMap);
  const found = keys.find(k => k.includes(slug));
  return found ? assetFileMap[found] : undefined;
};
import { toast } from "sonner";

const BoutiqueCollections = () => {
  const { addItem } = useCart();
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? boutiqueProducts : boutiqueProducts.filter((p) => p.category === activeCategory);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Our Collections</h1>
        <p className="text-sm" style={{ color: "#7a7064" }}>Browse our carefully curated fashion pieces</p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {boutiqueCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className="px-4 py-2 rounded-full text-xs font-semibold transition-all"
            style={{
              background: activeCategory === cat ? "#8b6914" : "transparent",
              color: activeCategory === cat ? "#fff" : "#7a7064",
              border: `1px solid ${activeCategory === cat ? "#8b6914" : "#e8e0d5"}`,
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <p className="text-sm mb-6" style={{ color: "#7a7064" }}>{filtered.length} products</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item, i) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: i * 0.05 }}
            className="group rounded-xl overflow-hidden border transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            style={{ borderColor: "#e8e0d5", background: "#fff" }}
          >
            <div className="relative aspect-square overflow-hidden">
              {/* prefer a newly added image that matches the product name; fall back to the bundled image */}
              <img
                src={findMatchingImage(item.name) ?? item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
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
  );
};

export default BoutiqueCollections;
