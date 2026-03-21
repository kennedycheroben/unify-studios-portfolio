import product1 from "@/assets/boutique-product1.png";
import product2 from "@/assets/boutique-product2.png";
import eveningGown from "@/assets/Evening Gown — Midnight.jpg";
import silkScarf from "@/assets/Silk Chiffon Scarf.jpg";
import cocktailRose from "@/assets/Cocktail Dress — Rose.jpg";
import leatherClutch from "@/assets/Leather Clutch — Blush.jpg";
import bohoMaxi from "@/assets/Bohemian Maxi Dress.jpg";
import statementGold from "@/assets/Statement Gold Necklace.jpg";
import designerStiletto from "@/assets/Designer Stiletto Heels.jpg";
import cashmereWrap from "@/assets/Cashmere Wrap Sweater.jpg";
import pleatedMidi from "@/assets/Pleated Midi Skirt.jpg";
import embroideredKaftan from "@/assets/Embroidered Kaftan.jpg";
import pearlDrop from "@/assets/Pearl Drop Earrings.jpg";
import velvetBlazer from "@/assets/Velvet Blazer — Emerald.jpg";
import wrapDress from "@/assets/Wrap Dress — Burgundy.jpg";
import suedeAnkle from "@/assets/Suede Ankle Boots.jpg";

export const boutiqueProducts = [
  { id: 1, name: "Evening Gown — Midnight", image: eveningGown, price: "KES 12,500", rating: 4.8, category: "Gowns", description: "A stunning midnight blue evening gown with elegant draping and beaded accents." },
  { id: 2, name: "Designer Leather Handbag", image: product2, price: "KES 8,900", rating: 4.9, category: "Bags", description: "Premium Italian leather handbag with gold-tone hardware and adjustable strap." },
  { id: 3, name: "Silk Chiffon Scarf", image: silkScarf, price: "KES 3,200", rating: 4.7, category: "Accessories", description: "Luxurious hand-printed silk chiffon scarf in floral patterns." },
  { id: 4, name: "Cocktail Dress — Rose", image: cocktailRose, price: "KES 9,800", rating: 4.6, category: "Dresses", description: "Flattering rose-toned cocktail dress with an A-line silhouette." },
  { id: 5, name: "Leather Clutch — Blush", image: leatherClutch, price: "KES 5,500", rating: 4.8, category: "Bags", description: "Compact blush leather clutch with magnetic closure and card slots." },
  { id: 6, name: "Bohemian Maxi Dress", image: bohoMaxi, price: "KES 7,400", rating: 4.5, category: "Dresses", description: "Free-flowing bohemian maxi dress with intricate embroidery." },
  { id: 7, name: "Statement Gold Necklace", image: statementGold, price: "KES 4,200", rating: 4.7, category: "Accessories", description: "Bold layered gold necklace that adds elegance to any outfit." },
  { id: 8, name: "Designer Stiletto Heels", image: designerStiletto, price: "KES 11,000", rating: 4.8, category: "Shoes", description: "Classic pointed-toe stiletto heels in patent leather finish." },
  { id: 9, name: "Cashmere Wrap Sweater", image: cashmereWrap, price: "KES 6,800", rating: 4.6, category: "Tops", description: "Soft cashmere wrap sweater, perfect for layering." },
  { id: 10, name: "Pleated Midi Skirt", image: pleatedMidi, price: "KES 5,200", rating: 4.5, category: "Skirts", description: "Elegant pleated midi skirt in satin finish with elastic waist." },
  { id: 11, name: "Embroidered Kaftan", image: embroideredKaftan, price: "KES 8,400", rating: 4.7, category: "Dresses", description: "Handcrafted embroidered kaftan ideal for resort and evening wear." },
  { id: 12, name: "Pearl Drop Earrings", image: pearlDrop, price: "KES 2,800", rating: 4.9, category: "Accessories", description: "Freshwater pearl drop earrings with sterling silver hooks." },
  { id: 13, name: "Velvet Blazer — Emerald", image: velvetBlazer, price: "KES 10,500", rating: 4.6, category: "Tops", description: "Rich emerald velvet blazer with satin lining for formal events." },
  { id: 14, name: "Wrap Dress — Burgundy", image: wrapDress, price: "KES 7,900", rating: 4.8, category: "Dresses", description: "Classic wrap dress in deep burgundy with a flattering V-neckline." },
  { id: 15, name: "Suede Ankle Boots", image: suedeAnkle, price: "KES 9,200", rating: 4.7, category: "Shoes", description: "Chic suede ankle boots with block heel and side zip." },
];

export const boutiqueCategories = ["All", "Gowns", "Dresses", "Bags", "Accessories", "Shoes", "Tops", "Skirts"];

export const boutiqueServices = [
  { title: "Personal Styling", desc: "One-on-one styling sessions with our expert fashion consultants to find your perfect look." },
  { title: "Alterations & Tailoring", desc: "Perfect fit guaranteed with our in-house tailoring service for any garment." },
  { title: "Bridal Consultation", desc: "Complete bridal styling for your special day — from gown selection to accessories." },
  { title: "Corporate Wardrobe", desc: "Professional wardrobe curation for the modern businesswoman." },
  { title: "Wardrobe Audit", desc: "We review your existing wardrobe and suggest pieces to complete your collection." },
  { title: "Gift Registry", desc: "Create a wishlist and share it with friends and family for special occasions." },
];
