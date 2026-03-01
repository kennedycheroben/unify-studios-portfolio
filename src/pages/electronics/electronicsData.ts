import phone from "@/assets/electronics-product1.png";
import laptop from "@/assets/electronics-product2.png";

export const electronicsProducts = [
  { id: 101, name: "ProMax Smartphone X15", image: phone, price: "KES 89,999", rating: 4.9, category: "Smartphones", description: "Flagship smartphone with 6.7\" AMOLED display, 108MP camera, and 5000mAh battery." },
  { id: 102, name: "UltraBook Pro 15\"", image: laptop, price: "KES 145,000", rating: 4.8, category: "Laptops", description: "Thin & light ultrabook with Intel i7, 16GB RAM, 512GB SSD, and all-day battery." },
  { id: 103, name: "Wireless Earbuds X3", image: phone, price: "KES 7,500", rating: 4.7, category: "Audio", description: "True wireless earbuds with active noise cancellation and 30-hour battery life." },
  { id: 104, name: "Gaming Laptop Z5", image: laptop, price: "KES 198,000", rating: 4.9, category: "Laptops", description: "RTX 4070 powered gaming beast with 240Hz display and RGB keyboard." },
  { id: 105, name: "Smart Watch Series 8", image: phone, price: "KES 35,000", rating: 4.6, category: "Wearables", description: "Health-focused smartwatch with ECG, blood oxygen, and GPS tracking." },
  { id: 106, name: "4K Action Camera Pro", image: phone, price: "KES 28,500", rating: 4.5, category: "Cameras", description: "Waterproof 4K/60fps action camera with image stabilization." },
  { id: 107, name: "Bluetooth Speaker Boom", image: laptop, price: "KES 12,000", rating: 4.7, category: "Audio", description: "360° surround sound portable speaker with 20-hour playtime." },
  { id: 108, name: "Tablet Pro 11\"", image: phone, price: "KES 65,000", rating: 4.8, category: "Tablets", description: "M2 chip tablet with Liquid Retina display and Apple Pencil support." },
  { id: 109, name: "Mechanical Keyboard RGB", image: laptop, price: "KES 8,500", rating: 4.6, category: "Accessories", description: "Hot-swappable mechanical keyboard with per-key RGB and PBT keycaps." },
  { id: 110, name: "27\" Gaming Monitor 165Hz", image: laptop, price: "KES 42,000", rating: 4.8, category: "Monitors", description: "QHD IPS gaming monitor with 165Hz, 1ms response, and HDR400." },
  { id: 111, name: "Wireless Ergonomic Mouse", image: phone, price: "KES 4,500", rating: 4.5, category: "Accessories", description: "Ergonomic vertical mouse with 6 buttons and adjustable DPI." },
  { id: 112, name: "USB-C Docking Station", image: laptop, price: "KES 9,800", rating: 4.7, category: "Accessories", description: "13-in-1 USB-C hub with dual HDMI, Ethernet, and 100W PD charging." },
  { id: 113, name: "Noise-Cancelling Headphones", image: phone, price: "KES 18,500", rating: 4.9, category: "Audio", description: "Over-ear ANC headphones with 40-hour battery and hi-res audio." },
  { id: 114, name: "Budget Smartphone A10", image: phone, price: "KES 15,999", rating: 4.3, category: "Smartphones", description: "Affordable smartphone with 6.5\" display, dual camera, and 4000mAh battery." },
  { id: 115, name: "Portable SSD 1TB", image: laptop, price: "KES 11,500", rating: 4.8, category: "Accessories", description: "Ultra-fast portable SSD with USB 3.2 and read speeds up to 1050MB/s." },
  { id: 116, name: "Webcam 4K Ultra", image: phone, price: "KES 6,200", rating: 4.6, category: "Accessories", description: "4K webcam with auto-focus, noise-reducing mic, and privacy shutter." },
];

export const electronicsCategories = ["All", "Smartphones", "Laptops", "Audio", "Tablets", "Wearables", "Cameras", "Monitors", "Accessories"];

export const electronicsServices = [
  { title: "Extended Warranty", desc: "Up to 3 years of comprehensive device protection and coverage.", icon: "Shield" },
  { title: "Device Repair", desc: "Expert repairs for smartphones, laptops, tablets, and accessories.", icon: "Cpu" },
  { title: "Setup & Installation", desc: "Professional setup for home entertainment and computing systems.", icon: "Monitor" },
  { title: "Trade-In Program", desc: "Exchange your old device for credit towards a new purchase.", icon: "Smartphone" },
  { title: "Corporate Sales", desc: "Bulk purchasing and custom solutions for businesses and institutions.", icon: "Zap" },
  { title: "Free Delivery", desc: "Same-day delivery within Mombasa for orders above KES 10,000.", icon: "Headphones" },
];
