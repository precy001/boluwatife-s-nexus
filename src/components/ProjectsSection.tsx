import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import ecommerce from "../assets/images/image.png"
import anns from "../assets/images/anns.jpg"
import fml from "../assets/images/fml.jpg"
import buraq from "../assets/images/buraq.jpg"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce solution with product management, cart functionality, secure checkout, and admin dashboard.",
    tech: ["Wordpress", "PHP", "Javascript"],
    image: ecommerce,
    liveUrl: "https://nitastores.com",
  },
  {
    title: "Business Management System",
    description:
      "Custom CRM and project management tool for tracking clients, invoices, and team productivity metrics.",
    tech: ["JavaScript", "PHP", "MySQL", "jQuery"],
    image: anns,
    liveUrl: "https://anns-kitchen-one.vercel.app/",
    githubUrl: "https://github.com/precy001/ann-s-kitchen-comfort-hub",
  },
  {
    title: "Corporate Website",
    description:
      "Modern, responsive corporate website with SEO optimization, contact forms, and content management system.",
    tech: ["WordPress", "PHP", "CSS3", "JavaScript"],
    image: buraq,
    liveUrl: "https://buraq-seven.vercel.app/",
    githubUrl: "https://github.com/precy001/buraq-guardian",
  },
  {
    title: "Real Estate Portal",
    description:
      "Property listing platform with advanced search filters, map integration, and agent management features.",
    tech: ["React", "Node.js", "MySQL", "Google Maps API"],
    image: fml,
    liveUrl: "https://fml-connect.vercel.app/",
    githubUrl: "https://github.com/precy001/fml-connect",
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in full-stack development.
          </p>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-xl bg-card border border-border overflow-hidden card-hover"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="hero-outline" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
