import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import TypingEffect from "@/components/TypingEffect";
import kenImage from "@/assets/ken.png";
import logo from "@/assets/logo.png";

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: `url(${kenImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/10" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 left-1/6 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Available for projects
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight"
              >
                Professional{" "}
                <TypingEffect
                  words={["Web Developer", "Graphic Designer", "Brand Strategist"]}
                  className="text-gradient"
                />
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed"
              >
                Turning ideas into interactive designs that inspire and connect.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-sm tracking-wide hover:shadow-[0_0_30px_hsl(217_91%_60%/0.4)] transition-all duration-300 hover:-translate-y-1"
                >
                  View My Work <i className="fa-solid fa-arrow-right text-xs" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-border bg-secondary/50 text-foreground font-display font-semibold text-sm tracking-wide hover:bg-secondary transition-all duration-300 hover:-translate-y-1"
                >
                  Get In Touch
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:flex justify-center"
            >
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden glow-border animate-pulse-glow">
                  <img src={kenImage} alt="Kennedy Cheroben" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-xl overflow-hidden border-2 border-primary/50 shadow-lg">
                  <img src={logo} alt="Unify Studios Logo" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="section-padding">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">What I Do</h2>
            <p className="text-muted-foreground max-w-md mx-auto">Crafting digital experiences with code and creativity</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection delay={0.1} direction="left">
              <div className="glass-card p-8 hover-lift group">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <i className="fa-solid fa-code text-primary text-2xl" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">Web Development</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Building responsive, fast, and modern websites with HTML, CSS, JavaScript, and automation workflows.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="right">
              <div className="glass-card p-8 hover-lift group">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <i className="fa-solid fa-palette text-accent text-2xl" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">Graphic Design</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Creating stunning logos, posters, flyers, branding, and motion graphics that tell your story.
                </p>
              </div>
            </AnimatedSection>
          </div>
      </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Client Testimonials</h2>
            <p className="text-muted-foreground max-w-md mx-auto">What people say about working with me</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Sarah Mitchell",
                role: "CEO, BrightPath Agency",
                text: "Kennedy delivered an exceptional website that exceeded our expectations. His attention to detail and creative vision transformed our brand's online presence.",
                stars: 5,
              },
              {
                name: "James Ochieng",
                role: "Founder, TechWave Kenya",
                text: "Working with Unify Studios was seamless. The e-commerce platform he built boosted our sales by 40% in the first quarter. Highly recommend!",
                stars: 5,
              },
              {
                name: "Amina Hassan",
                role: "Marketing Director, Bloom Co.",
                text: "From branding to web development, Kennedy handled everything with professionalism. The final product was polished, modern, and exactly what we needed.",
                stars: 4,
              },
            ].map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.1} direction={i === 0 ? "left" : i === 2 ? "right" : "up"}>
                <div className="glass-card p-8 hover-lift h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <i
                        key={s}
                        className={`fa-star text-sm ${s < t.stars ? "fa-solid text-[hsl(var(--gold))]" : "fa-regular text-muted-foreground/40"}`}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <i className="fa-solid fa-user text-primary text-sm" />
                    </div>
                    <div>
                      <p className="font-display font-semibold text-sm">{t.name}</p>
                      <p className="text-muted-foreground text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
