import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";

const BoutiqueContact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-14">
        <h1 className="text-3xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Contact Us</h1>
        <p className="text-sm" style={{ color: "#7a7064" }}>We'd love to hear from you</p>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <div className="space-y-6">
            {[
              { icon: MapPin, label: "Visit Us", value: "Westlands, Nairobi, Kenya" },
              { icon: Phone, label: "Call Us", value: "+254 7XX XXX XXX" },
              { icon: Mail, label: "Email Us", value: "hello@eleganceboutique.co.ke" },
              { icon: Clock, label: "Working Hours", value: "Mon-Sat: 9AM - 7PM" },
            ].map((c, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl border" style={{ borderColor: "#e8e0d5" }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(139,105,20,0.1)" }}>
                  <c.icon size={18} style={{ color: "#8b6914" }} />
                </div>
                <div>
                  <p className="text-sm font-semibold">{c.label}</p>
                  <p className="text-xs" style={{ color: "#7a7064" }}>{c.value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.form initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text" placeholder="Your Name" required value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors focus:border-[#8b6914]"
            style={{ borderColor: "#e8e0d5", background: "#fff" }}
          />
          <input
            type="email" placeholder="Your Email" required value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors focus:border-[#8b6914]"
            style={{ borderColor: "#e8e0d5", background: "#fff" }}
          />
          <textarea
            placeholder="Your Message" required rows={5} value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors focus:border-[#8b6914] resize-none"
            style={{ borderColor: "#e8e0d5", background: "#fff" }}
          />
          <button type="submit" className="flex items-center gap-2 px-8 py-3 rounded-lg text-sm font-semibold transition-transform hover:-translate-y-1" style={{ background: "#8b6914", color: "#fff" }}>
            <Send size={14} /> Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default BoutiqueContact;
