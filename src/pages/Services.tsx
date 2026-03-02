import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    icon: "fa-solid fa-code",
    title: "Web Development",
    items: ["Responsive Websites", "E-commerce Solutions", "Landing Pages", "Web Applications", "SEO Optimization", "Automation Workflows"],
  },
  {
    icon: "fa-solid fa-pen-nib",
    title: "Logo Design",
    items: ["Brand Logos", "Monogram Logos", "Wordmark Logos", "Icon-based Logos", "Logo Redesign", "Logo Guidelines"],
  },
  {
    icon: "fa-solid fa-image",
    title: "Poster & Flyer Design",
    items: ["Event Posters", "Product Flyers", "Concert Posters", "Promotional Flyers", "Billboard Design", "Print-ready Files"],
  },
  {
    icon: "fa-solid fa-pen-ruler",
    title: "Branding & Identity",
    items: ["Brand Strategy", "Visual Identity", "Business Cards", "Stationery Design", "Brand Guidelines", "Packaging Design"],
  },
  {
    icon: "fa-solid fa-film",
    title: "Motion Graphics",
    items: ["Product Animations", "Explainer Videos", "Social Media Videos", "Logo Animations", "Title Sequences", "Kinetic Typography"],
  },
  {
    icon: "fa-solid fa-layer-group",
    title: "UI/UX Design",
    items: ["Wireframing", "Prototyping", "User Research", "Interface Design", "Design Systems", "Usability Testing"],
  },
];

const Services = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            My <span className="text-gradient">Services</span>
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Professional solutions tailored to elevate your brand and digital presence
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.1}>
              <div className="glass-card p-7 hover-lift group h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <i className={`${service.icon} text-primary text-xl`} />
                </div>
                <h3 className="font-display text-lg font-semibold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-16 text-center">
          <div className="glass-card inline-block px-8 py-6 glow-border">
            <p className="text-muted-foreground text-sm">
              Pricing is available upon request.{" "}
              <a href="/contact" className="text-primary font-semibold hover:underline">
                Contact me
              </a>{" "}
              for a custom quote tailored to your project needs.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;
