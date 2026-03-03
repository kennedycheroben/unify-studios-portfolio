import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import kenImage from "@/assets/ken.png";
import logo from "@/assets/logo.png";

const skills = {
  "Frontend Development": [
    { name: "React", icon: "fa-brands fa-react" },
    { name: "TypeScript", icon: "fa-brands fa-js" },
    { name: "HTML5", icon: "fa-brands fa-html5" },
    { name: "CSS3", icon: "fa-brands fa-css3-alt" },
    { name: "JavaScript", icon: "fa-brands fa-js" },
    { name: "Tailwind CSS", icon: "fa-solid fa-wind" },
    { name: "Node.js", icon: "fa-brands fa-node-js" },
    { name: "SQL", icon: "fa-solid fa-database" },
    { name: "Git & GitHub", icon: "fa-brands fa-github" },
    { name: "Vite", icon: "fa-solid fa-bolt" },
    { name: "Responsive Design", icon: "fa-solid fa-mobile-screen" },
    { name: "REST APIs", icon: "fa-solid fa-plug" },
    { name: "Framer Motion", icon: "fa-solid fa-wand-magic-sparkles" },
    { name: "Automation Workflows", icon: "fa-solid fa-gears" },
    { name: "React Router", icon: "fa-solid fa-route" },
  ],
  "Graphic Design": [
    { name: "Logo Design", icon: "fa-solid fa-pen-nib" },
    { name: "Poster Design", icon: "fa-solid fa-image" },
    { name: "Flyer Design", icon: "fa-solid fa-file-image" },
    { name: "Branding", icon: "fa-solid fa-copyright" },
    { name: "Motion Graphics", icon: "fa-solid fa-film" },
    { name: "Visual Identity", icon: "fa-solid fa-eye" },
    { name: "UI/UX Design", icon: "fa-solid fa-palette" },
    { name: "Typography", icon: "fa-solid fa-font" },
  ],
};

const About = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">The journey behind the designs</p>
        </AnimatedSection>

        {/* Bio Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <AnimatedSection direction="left">
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden glow-border transition-shadow duration-500 group-hover:shadow-[0_0_40px_hsl(217_91%_60%/0.3)]">
                <img src={kenImage} alt="Kennedy Cheroben" className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-xl overflow-hidden border-2 border-primary animate-float transition-transform duration-300 group-hover:scale-110">
                <img src={logo} alt="Unify Studios" className="w-full h-full object-cover" />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" className="space-y-6">
            <h2 className="text-3xl font-display font-bold">Kennedy Cheroben</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate frontend web developer and graphic designer based in Kenya, operating under the creative brand 
                <span className="text-primary font-semibold"> Unify Studios</span>. My mission is to unify aesthetics and 
                functionality into seamless digital experiences.
              </p>
              <p>
                With expertise spanning frontend development and visual design, I bring a unique perspective to every project. 
                From coding responsive websites to crafting compelling brand identities, I believe in the power of design 
                to inspire, connect, and transform businesses.
              </p>
              <p>
                Whether it's building a dynamic web platforms or creating eye-catching motion graphics, I pour 
                creativity and technical precision into every pixel and line of code.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Skills */}
        <AnimatedSection className="mb-8">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {Object.entries(skills).map(([category, items], catIdx) => (
            <AnimatedSection key={category} delay={catIdx * 0.1} direction={catIdx === 0 ? "left" : "right"}>
              <div className="glass-card p-8 hover-lift group">
                <h3 className="font-display text-lg font-semibold text-primary mb-6 flex items-center gap-3">
                  <i className={`${catIdx === 0 ? "fa-solid fa-code" : "fa-solid fa-palette"} text-xl`} />
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill, i) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.04, duration: 0.3 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-secondary border border-border/50 text-foreground hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_4px_15px_hsl(217_91%_60%/0.15)] transition-all duration-300 cursor-default"
                    >
                      <i className={`${skill.icon} text-primary text-xs`} />
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
