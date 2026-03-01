import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

import poster1 from "@/assets/poster1.png";
import flyer1 from "@/assets/flyer1.png";
import branding1 from "@/assets/branding1.png";
import motion1 from "@/assets/motion1.png";
import logoDesign1 from "@/assets/logo-design1.png";
import explainer1 from "@/assets/explainer1.png";
import boutiqueHero from "@/assets/boutique-hero.png";
import electronicsHero from "@/assets/electronics-hero.png";

const categories = ["All", "Web Development", "Graphic Design", "Branding", "Motion Design"];

const projects = [
  {
    id: 1,
    title: "Ëlegance Boutique",
    category: "Web Development",
    description: "A luxury fashion boutique e-commerce website based in Nairobi. Full responsive design with product catalog, services, and contact pages.",
    image: boutiqueHero,
    link: "/boutique-shop",
    isInternal: true,
  },
  {
    id: 2,
    title: "TechWave Electronics",
    category: "Web Development",
    description: "A modern electronics retail website for a Mombasa-based store. Complete with product showcase, services, and customer support.",
    image: electronicsHero,
    link: "/electronics-shop",
    isInternal: true,
  },
  {
    id: 3,
    title: "Music Festival Poster",
    category: "Graphic Design",
    description: "Vibrant and energetic poster design for a large-scale music festival event featuring dynamic typography and bold visuals.",
    image: poster1,
  },
  {
    id: 4,
    title: "Corporate Conference Flyer",
    category: "Graphic Design",
    description: "Professional flyer design for a business conference with elegant navy and gold color scheme and clean layout.",
    image: flyer1,
  },
  {
    id: 5,
    title: "Café Carte Brand Identity",
    category: "Branding",
    description: "Complete brand identity for a premium coffee brand including logo, business cards, letterhead, and packaging design.",
    image: logoDesign1,
  },
  {
    id: 6,
    title: "Corporate Stationery Suite",
    category: "Branding",
    description: "Full stationery design system including business cards, letterhead, envelopes, and brand guidelines document.",
    image: branding1,
  },
  {
    id: 7,
    title: "Product Launch Animation",
    category: "Motion Design",
    description: "3D product showcase animation for a smartphone launch with dynamic particle effects and cinematic lighting.",
    image: motion1,
  },
  {
    id: 8,
    title: "Business Explainer Video",
    category: "Motion Design",
    description: "Animated explainer video with 2D character animation illustrating business workflows and team collaboration.",
    image: explainer1,
  },
];

const Portfolio = () => {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            My <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A showcase of my best work across web development, graphic design, branding, and motion design
          </p>
        </AnimatedSection>

        {/* Filter */}
        <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300
                ${active === cat
                  ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(217_91%_60%/0.3)]"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
            >
              {cat}
            </button>
          ))}
        </AnimatedSection>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group"
              >
                <div className="rounded-xl overflow-hidden border border-border/30 hover-lift bg-card/30">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
                      {project.link && (
                        project.isInternal ? (
                          <Link
                            to={project.link}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-semibold"
                          >
                            View Site <ExternalLink size={12} />
                          </Link>
                        ) : (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-semibold"
                          >
                            View Project <ExternalLink size={12} />
                          </a>
                        )
                      )}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">{project.category}</span>
                    <h3 className="font-display text-base font-semibold mt-1 mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
