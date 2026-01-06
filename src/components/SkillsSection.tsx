import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "jQuery", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["PHP", "MySQL", "REST APIs", "Node.js"],
  },
  {
    title: "CMS & Tools",
    skills: ["WordPress", "Git", "SEO", "Figma"],
  },
  {
    title: "Other",
    skills: ["UI/UX Design", "Performance Optimization", "Project Management", "Responsive Design"],
  },
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-surface/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="text-primary">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built over 8+ years of professional development experience.
          </p>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border card-hover"
            >
              <h3 className="text-lg font-semibold text-primary mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="px-3 py-1.5 text-sm rounded-full bg-surface border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
