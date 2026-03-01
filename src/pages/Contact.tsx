import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    // Simulate form submission (Supabase can be connected later)
    await new Promise((r) => setTimeout(r, 1000));
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", subject: "", message: "" });
    setLoading(false);
  };

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Have a project in mind? Let's bring your vision to life.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <AnimatedSection direction="left" className="lg:col-span-2 space-y-6">
            <div className="glass-card p-6 space-y-6">
              <h3 className="font-display text-lg font-semibold">Contact Info</h3>
              <div className="space-y-5 text-sm">
                <a href="mailto:kennedycheroben001@gmail.com" className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <Mail size={18} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p>kennedycheroben001@gmail.com</p>
                  </div>
                </a>
                <a href="https://wa.me/254792399815" target="_blank" rel="noreferrer" className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <Phone size={18} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">WhatsApp</p>
                    <p>+254 792 399 815</p>
                  </div>
                </a>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p>Kenya</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/254792399815"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-[hsl(142,70%,45%)] text-[hsl(0,0%,100%)] font-display font-semibold text-sm hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_0_30px_hsl(142_70%_45%/0.3)]"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection direction="right" className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-2 block">Name *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border/50 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-2 block">Email *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border/50 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-2 block">Subject</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border/50 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="Project inquiry"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-2 block">Message *</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border/50 text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-sm flex items-center justify-center gap-2 hover:shadow-[0_0_30px_hsl(217_91%_60%/0.4)] transition-all duration-300 disabled:opacity-50"
              >
                {loading ? "Sending..." : <><Send size={16} /> Send Message</>}
              </motion.button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
