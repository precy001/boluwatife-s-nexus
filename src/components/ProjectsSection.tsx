import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import ecommerce from "../assets/images/image.png"
import anns from "../assets/images/anns.jpg"
import fml from "../assets/images/fml.jpg"
import buraq from "../assets/images/buraq.png"
import dabyles from "../assets/images/dabyles.jpg"
import groowfuse from "../assets/images/groowfuse.png"

const projects = [
  {
    title: "GroowFuse Consult — Custom CMS & Admin Platform",
    description:
      "Complete custom platform for a Dublin-based IT consultancy. Public site (React 19 + Vite), full PHP/MySQL backend with role-based admin panel, rich-text post editor, message inbox, newsletter, audit log, branded SMTP email, and a self-hosted analytics page with seven Recharts visualizations and privacy-first page-view tracking.",
    tech: ["React 19", "TypeScript", "PHP 8", "MySQL", "Tailwind CSS", "TipTap", "Recharts", "PHPMailer"],
    image: groowfuse,
    liveUrl: "https://groowfuse.vercel.app",
  },
  {
    title: "Drowning Detection IoT System",
    description:
      "Front-line software for a real-time drowning-detection PWA connected to AI-powered IoT sensors. Built the API layer brokering communication between the PWA and the hardware, plus the alarm pipeline that fires push notifications and triggers an on-device audio alarm when the AI detects a drowning event.",
    tech: ["React", "PWA", "Node.js", "IoT", "Push Notifications"],
    image: buraq,
    liveUrl: "https://shifaalayn.com.ng/",
    githubUrl: "https://github.com/precy001/buraq-guardian",
  },
  {
    title: "Nitastores E-Commerce Platform",
    description:
      "Three years of feature work on a live e-commerce platform serving 300,000+ users across 17,000+ products. Implemented a smart product-suggestion engine and shipped most modern e-commerce features customers expect: faceted search, wishlists, related-products carousels, cart persistence, and checkout improvements. One contributor among several to a 60%+ sales lift over my tenure.",
    tech: ["React", "PHP", "MySQL", "JavaScript"],
    image: ecommerce,
    liveUrl: "https://nitastores.com",
  },
 {
    title: "Dabyles Engineering Website",
    description:
      "Built end-to-end and currently maintain. Modern dark-themed marketing site for an engineering services firm covering Oil & Gas, Manufacturing, and Construction. Single point of ownership for the company's entire web presence.",
    tech: ["React", "Tailwind CSS", "PHP", "MySQL", "SEO"],
    image: dabyles,
    liveUrl: "https://dabyles.com.ng/",
    githubUrl: "https://github.com/precy001/precision-portfolio",
  },
  {
    title: "Ann's Kitchen — Food Ordering App",
    description:
      "Food ordering platform with menu browsing, cart management, and order tracking. Side project — practiced building a complete cart-to-checkout flow with persistent state.",
    tech: ["JavaScript", "PHP", "MySQL"],
    image: anns,
    liveUrl: "https://anns-kitchen-one.vercel.app/menu",
    githubUrl: "https://github.com/precy001/ann-s-kitchen-comfort-hub",
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
                  {project.githubUrl && (
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
