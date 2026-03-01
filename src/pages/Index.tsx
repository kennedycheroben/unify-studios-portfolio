import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Palette } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import kenImage from "@/assets/ken.png";
import logo from "@/assets/logo.png";

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background with ken image overlay */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: `url(${kenImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/10" />
          {/* Floating orbs */}
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
                <span className="text-gradient">Web Developer</span>{" "}
                &amp; Graphic Designer
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
                  View My Work <ArrowRight size={16} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-border bg-secondary/50 text-foreground font-display font-semibold text-sm tracking-wide hover:bg-secondary transition-all duration-300 hover:-translate-y-1"
                >
                  Get In Touch
                </Link>
              </motion.div>
            </div>

            {/* Hero Image */}
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
                  <Code className="text-primary" size={28} />
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
                  <Palette className="text-accent" size={28} />
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
    </>
  );
};

export default Index;
