import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import kenImage from "@/assets/ken.png";
import logo from "@/assets/logo.png";

const skills = {
  "Web Development": ["HTML5", "CSS3", "JavaScript", "SQL", "Automation Workflows", "Responsive Design"],
  "Graphic Design": ["Logo Design", "Poster Design", "Flyer Design", "Branding", "Motion Graphics", "Visual Identity"],
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
            <div className="relative">
              <div className="rounded-2xl overflow-hidden glow-border">
                <img src={kenImage} alt="Kennedy Cheroben" className="w-full aspect-[3/4] object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-xl overflow-hidden border-2 border-primary animate-float">
                <img src={logo} alt="Unify Studios" className="w-full h-full object-cover" />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" className="space-y-6">
            <h2 className="text-3xl font-display font-bold">Kennedy Cheroben</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate web developer and graphic designer based in Kenya, operating under the creative brand 
                <span className="text-primary font-semibold"> Unify Studios</span>. My mission is to unify aesthetics and 
                functionality into seamless digital experiences.
              </p>
              <p>
                With expertise spanning web development and visual design, I bring a unique perspective to every project. 
                From coding responsive websites to crafting compelling brand identities, I believe in the power of design 
                to inspire, connect, and transform businesses.
              </p>
              <p>
                Whether it's building a dynamic e-commerce platform or creating eye-catching motion graphics, I pour 
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

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {Object.entries(skills).map(([category, items], catIdx) => (
            <AnimatedSection key={category} delay={catIdx * 0.15} direction={catIdx === 0 ? "left" : "right"}>
              <div className="glass-card p-8 hover-lift">
                <h3 className="font-display text-lg font-semibold text-primary mb-6">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.08 }}
                      viewport={{ once: true }}
                      className="px-4 py-2 text-sm rounded-lg bg-secondary border border-border/50 text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default"
                    >
                      {skill}
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
