import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Layers, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that teams love to work with.",
  },
  {
    icon: Layers,
    title: "Full-Stack",
    description: "End-to-end ownership from database design to pixel-perfect UI.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing for speed, accessibility, and user experience.",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              With over <span className="text-foreground font-medium">3 years of experience</span> in web development,
              I specialize in building robust, scalable applications that solve real problems.
              My expertise spans the entire development lifecycle—from concept and design to
              deployment and optimization.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I thrive on transforming complex requirements into elegant, user-friendly
              solutions. Whether it's crafting responsive frontends with React or architecting
              efficient backend systems with PHP and MySQL, I bring a meticulous attention
              to detail and a passion for clean architecture.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My approach combines technical excellence with a deep understanding of
              business goals, ensuring every project delivers measurable value.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-surface border border-border card-hover"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
