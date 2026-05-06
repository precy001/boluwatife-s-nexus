import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

/*
 * Skills are grouped semantically and presented as chips, not percentage bars.
 * Self-rated proficiency numbers ("React 95%") are noise to anyone hiring —
 * they signal newness more than skill. Chips read as a credible inventory.
 */
const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "PHP", "HTML5", "CSS3", "SQL"],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "Vite",
      "Tailwind CSS",
      "Redux",
      "React Router",
      "TipTap",
      "Recharts",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    skills: [
      "PHP 8",
      "Node.js",
      "Express",
      "MySQL",
      "REST APIs",
      "PHPMailer",
      "Session auth",
      "Rate limiting",
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      "Git",
      "GitHub Actions",
      "cPanel",
      "Vercel",
      "XAMPP",
      "npm",
      "Composer",
      "Apache",
      "Figma",
    ],
  },
  {
    title: "Practices",
    skills: [
      "Responsive design",
      "Accessibility",
      "SEO",
      "Performance",
      "Security hardening",
      "SPF / DKIM / DMARC",
      "Progressive Web Apps",
      "IoT integration",
    ],
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
            My <span className="text-primary">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tools and technologies I reach for when shipping production work.
          </p>
        </motion.div>

        <div className="grid gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.08 }}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider md:w-40 md:flex-shrink-0 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-md bg-surface border border-border text-foreground hover:border-primary/40 hover:text-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
