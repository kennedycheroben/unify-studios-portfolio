import phone from "@/assets/electronics-product1.png";
import laptop from "@/assets/electronics-product2.png";
import headset from "@/assets/electronics-product3.png";
import drone from "@/assets/electronics-product4.png";
import speaker from "@/assets/electronics-product5.png";
import powerbank from "@/assets/electronics-product6.png";

export const electronicsProducts = [
  { id: 101, name: "ProMax Smartphone X15", image: phone, price: "KES 89,999", rating: 4.9, category: "Smartphones", description: "Flagship smartphone with 6.7\" AMOLED display, 108MP camera, and 5000mAh battery." },
  { id: 102, name: "UltraBook Pro 15\"", image: laptop, price: "KES 145,000", rating: 4.8, category: "Laptops", description: "Thin & light ultrabook with Intel i7, 16GB RAM, 512GB SSD, and all-day battery." },
  { id: 103, name: "Wireless Earbuds X3", image: headset, price: "KES 7,500", rating: 4.7, category: "Audio", description: "True wireless earbuds with active noise cancellation and 30-hour battery life." },
  { id: 104, name: "Gaming Laptop Z5", image: laptop, price: "KES 198,000", rating: 4.9, category: "Laptops", description: "RTX 4070 powered gaming beast with 240Hz display and RGB keyboard." },
  { id: 105, name: "Smart Watch Series 8", image: phone, price: "KES 35,000", rating: 4.6, category: "Wearables", description: "Health-focused smartwatch with ECG, blood oxygen, and GPS tracking." },
  { id: 106, name: "4K Action Camera Pro", image: drone, price: "KES 28,500", rating: 4.5, category: "Cameras", description: "Waterproof 4K/60fps action camera with image stabilization." },
  { id: 107, name: "Bluetooth Speaker Boom", image: speaker, price: "KES 12,000", rating: 4.7, category: "Audio", description: "360° surround sound portable speaker with 20-hour playtime." },
  { id: 108, name: "Tablet Pro 11\"", image: phone, price: "KES 65,000", rating: 4.8, category: "Tablets", description: "M2 chip tablet with Liquid Retina display and Apple Pencil support." },
  { id: 109, name: "Mechanical Keyboard RGB", image: laptop, price: "KES 8,500", rating: 4.6, category: "Accessories", description: "Hot-swappable mechanical keyboard with per-key RGB and PBT keycaps." },
  { id: 110, name: "27\" Gaming Monitor 165Hz", image: laptop, price: "KES 42,000", rating: 4.8, category: "Monitors", description: "QHD IPS gaming monitor with 165Hz, 1ms response, and HDR400." },
  { id: 111, name: "Wireless Ergonomic Mouse", image: phone, price: "KES 4,500", rating: 4.5, category: "Accessories", description: "Ergonomic vertical mouse with 6 buttons and adjustable DPI." },
  { id: 112, name: "USB-C Docking Station", image: laptop, price: "KES 9,800", rating: 4.7, category: "Accessories", description: "13-in-1 USB-C hub with dual HDMI, Ethernet, and 100W PD charging." },
  { id: 113, name: "Noise-Cancelling Headphones", image: headset, price: "KES 18,500", rating: 4.9, category: "Audio", description: "Over-ear ANC headphones with 40-hour battery and hi-res audio." },
  { id: 114, name: "Budget Smartphone A10", image: phone, price: "KES 15,999", rating: 4.3, category: "Smartphones", description: "Affordable smartphone with 6.5\" display, dual camera, and 4000mAh battery." },
  { id: 115, name: "Portable SSD 1TB", image: laptop, price: "KES 11,500", rating: 4.8, category: "Accessories", description: "Ultra-fast portable SSD with USB 3.2 and read speeds up to 1050MB/s." },
  { id: 116, name: "Webcam 4K Ultra", image: phone, price: "KES 6,200", rating: 4.6, category: "Accessories", description: "4K webcam with auto-focus, noise-reducing mic, and privacy shutter." },
  // New products
  { id: 117, name: "Gaming Headset Pro 7.1", image: headset, price: "KES 14,500", rating: 4.8, category: "Audio", description: "7.1 surround sound gaming headset with RGB lighting, detachable mic, and memory foam cushions." },
  { id: 118, name: "SkyView Drone X4", image: drone, price: "KES 75,000", rating: 4.7, category: "Drones", description: "4K camera drone with 30-min flight time, GPS return-to-home, and obstacle avoidance." },
  { id: 119, name: "Smart Home Speaker Hub", image: speaker, price: "KES 9,800", rating: 4.5, category: "Smart Home", description: "Voice-controlled smart speaker with built-in hub for lights, locks, and thermostat." },
  { id: 120, name: "PowerVault 20000mAh", image: powerbank, price: "KES 3,500", rating: 4.6, category: "Accessories", description: "20000mAh power bank with 65W fast charging, dual USB-C, and LED display." },
  { id: 121, name: "Mini Drone Explorer", image: drone, price: "KES 12,500", rating: 4.4, category: "Drones", description: "Beginner-friendly mini drone with HD camera, one-key takeoff, and foldable design." },
  { id: 122, name: "Smart LED Bulb Pack (4)", image: speaker, price: "KES 4,200", rating: 4.3, category: "Smart Home", description: "Wi-Fi RGB smart bulbs, 16M colors, voice control compatible, energy-saving." },
  { id: 123, name: "Wireless Charging Pad Duo", image: powerbank, price: "KES 2,800", rating: 4.5, category: "Accessories", description: "Dual wireless charging pad for phone and earbuds, 15W fast charge, anti-slip surface." },
  { id: 124, name: "Pro Streaming Microphone", image: headset, price: "KES 8,900", rating: 4.7, category: "Audio", description: "USB condenser mic with cardioid pattern, RGB ring light, and pop filter included." },
  { id: 125, name: "Smart Security Camera", image: drone, price: "KES 6,500", rating: 4.6, category: "Smart Home", description: "1080p indoor/outdoor security camera with night vision, motion alerts, and cloud storage." },
  { id: 126, name: "Electric Standing Desk Mat", image: powerbank, price: "KES 5,200", rating: 4.4, category: "Accessories", description: "Anti-fatigue standing desk mat with massage points and beveled edges." },
  { id: 127, name: "Foldable Smartphone Z Flip", image: phone, price: "KES 125,000", rating: 4.8, category: "Smartphones", description: "Compact foldable phone with 6.7\" inner display, Flex Mode, and dual cameras." },
  { id: 128, name: "Portable Projector Mini", image: speaker, price: "KES 22,000", rating: 4.5, category: "Smart Home", description: "Pocket-sized 1080p projector with built-in speakers, HDMI, and 2-hour battery." },
];

export const electronicsCategories = ["All", "Smartphones", "Laptops", "Audio", "Tablets", "Wearables", "Cameras", "Monitors", "Drones", "Smart Home", "Accessories"];

export const electronicsServices = [
  { title: "Extended Warranty", desc: "Up to 3 years of comprehensive device protection and accidental damage coverage.", icon: "Shield" },
  { title: "Device Repair", desc: "Expert repairs for smartphones, laptops, tablets, and accessories with genuine parts.", icon: "Cpu" },
  { title: "Setup & Installation", desc: "Professional setup for home entertainment, smart home systems, and computing rigs.", icon: "Monitor" },
  { title: "Trade-In Program", desc: "Exchange your old device for credit towards a new purchase — instant valuation.", icon: "Smartphone" },
  { title: "Corporate Sales", desc: "Bulk purchasing, custom solutions, and dedicated account management for businesses.", icon: "Zap" },
  { title: "Free Delivery", desc: "Same-day delivery within Mombasa for orders above KES 10,000.", icon: "Headphones" },
  { title: "Data Recovery", desc: "Professional data recovery from damaged drives, phones, and corrupted storage devices.", icon: "HardDrive" },
  { title: "Screen Replacement", desc: "Same-day screen replacement for popular smartphone and laptop models with warranty.", icon: "Smartphone" },
  { title: "Smart Home Setup", desc: "Full installation of smart lighting, security cameras, speakers, and automation systems.", icon: "Wifi" },
  { title: "Gaming PC Builds", desc: "Custom-built gaming PCs tailored to your budget and performance needs.", icon: "Cpu" },
  { title: "Software Installation", desc: "OS installation, antivirus setup, and essential software configuration for your devices.", icon: "Monitor" },
  { title: "Device Insurance", desc: "Monthly insurance plans covering theft, accidental damage, and liquid spills.", icon: "Shield" },
];
