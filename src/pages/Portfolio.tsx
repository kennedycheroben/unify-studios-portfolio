import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

import poster1 from "@/assets/poster1.png";
import flyer1 from "@/assets/flyer1.png";
import branding1 from "@/assets/branding1.png";
import logoDesign1 from "@/assets/logo-design1.png";
import unifyvideo from "@/assets/videos/unifyvideo.mp4";
import productLaunch from "@/assets/videos/Product Launch Animation.mp4";
import boutiqueHero from "@/assets/boutique-hero.png";
import electronicsHero from "@/assets/electronics-hero.png";

const categories = ["All", "Frontend Development", "Graphic Design", "Branding", "Motion Design"];

const projects = [
  {
    id: 1,
    title: "Ëlegance Boutique",
  category: "Frontend Development",
    description: "A luxury fashion boutique e-commerce website based in Nairobi. Full responsive design with product catalog, services, and contact pages.",
    image: boutiqueHero,
    link: "/boutique-shop",
    isInternal: true,
  },
  {
    id: 2,
    title: "TechWave Electronics",
  category: "Frontend Development",
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
    video: productLaunch,
  },
  {
    id: 8,
    title: "Business Explainer Video",
    category: "Motion Design",
    description: "Animated explainer video with 2D character animation illustrating business workflows and team collaboration.",
    video: unifyvideo,
  },
];

const Portfolio = () => {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<any | null>(null);

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  const openProject = (project: any) => setSelected(project);
  const closeProject = () => setSelected(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeProject();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            My <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A showcase of my best work across frontend development, graphic design, branding, and motion design
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
                transition={{ duration: 0.25, delay: i * 0.03 }}
                className="group"
                onClick={() => openProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') openProject(project); }}
              >
                <div className="rounded-xl overflow-hidden border border-border/30 hover-lift bg-card/30">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {project.video ? (
                      <video
                        src={project.video}
                        aria-label={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        playsInline
                        muted
                        loop
                        autoPlay
                      />
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
                      {project.link && (
                          project.isInternal ? (
                            <Link
                              to={project.link}
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-semibold"
                              onClick={(e) => e.stopPropagation()}
                            >
                              View Site <i className="fa-solid fa-arrow-up-right-from-square text-[10px]" />
                            </Link>
                          ) : (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-semibold"
                              onClick={(e) => e.stopPropagation()}
                            >
                              View Project <i className="fa-solid fa-arrow-up-right-from-square text-[10px]" />
                            </a>
                          )
                        )}
                    </div>
                  </div>

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

      {/* Fullscreen viewer modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          onClick={closeProject}
        >
          <div
            className="relative w-full max-w-5xl max-h-[90vh] bg-card rounded-lg overflow-hidden shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close viewer"
              onClick={closeProject}
              className="absolute top-3 right-3 z-10 inline-flex items-center justify-center h-9 w-9 rounded-full bg-background/80 text-foreground"
            >
              ✕
            </button>

            <div className="w-full h-[70vh] bg-black flex items-center justify-center">
              {selected.video ? (
                <video
                  src={selected.video}
                  controls
                  autoPlay
                  className="w-full h-full object-contain bg-black"
                />
              ) : (
                <img src={selected.image} alt={selected.title} className="w-full h-full object-contain" />
              )}
            </div>

            <div className="p-5">
              <h3 className="font-display text-lg font-semibold mb-2">{selected.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{selected.description}</p>
              {selected.link && (
                selected.isInternal ? (
                  <Link to={selected.link} onClick={closeProject} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-semibold">
                    View Site
                  </Link>
                ) : (
                  <a href={selected.link} target="_blank" rel="noreferrer" onClick={closeProject} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-semibold">
                    View Project
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;

