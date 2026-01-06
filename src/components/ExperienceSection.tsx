import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Mayomos Cleaners Nig. Ltd",
    role: "Web Developer",
    period: "2023 - 2024",
    description:
      "Lead developer responsible for building and maintaining the company's digital presence. Developed responsive UI components, improved overall UX, and handled both frontend and backend logic for various web applications.",
    achievements: [
      "Built a responsive, mobile-first company website increasing customer engagement by 40%",
      "Developed custom booking and scheduling system reducing manual work by 60%",
      "Implemented SEO best practices resulting in 3x organic traffic growth",
      "Created admin dashboard for real-time business analytics and reporting",
    ],
  },
  {
    company: "NitaStores",
    role: "Full Stack Developer",
    period: "2025 - Present",
    description:
      "Providing full-stack web development services to diverse clients ranging from startups to established businesses.",
    achievements: [
      "Delivered 50+ successful projects across various industries",
      "Maintained 100% client satisfaction rate with repeat business",
      "Specialized in e-commerce, corporate websites, and custom web applications",
      "Consulted on technical architecture and performance optimization",
    ],
  },
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-surface/50" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A track record of delivering impactful solutions across various industries.
          </p>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-0 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" />

                <div className="p-6 rounded-xl bg-card border border-border card-hover">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-primary mt-1">
                        <Briefcase size={16} />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                      <Calendar size={16} />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
