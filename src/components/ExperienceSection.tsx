import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "GroowFuse Consult",
    role: "Full-Stack Developer",
    period: "Jan 2026 — Present",
    description:
      "Designed and shipped a complete custom platform replacing the previous WordPress install — public site, blog, contact, newsletter, and a full admin panel with role-based access, rich-text editor, message inbox, audit log, and analytics.",
    achievements: [
      "Built a self-hosted analytics page with seven Recharts visualizations and a privacy-first page-view tracker (HMAC-hashed visitor IDs, no cookies, no PII)",
      "Implemented production-grade backend: session auth with HttpOnly cookies, per-IP rate limiting, CORS allow-listing, file-backed audit log, IP hashing",
      "Integrated real SMTP via PHPMailer with branded HTML email templates for contact replies and newsletter delivery",
      "Configured SPF, DKIM, and DMARC for split-domain email delivery between Microsoft 365 and HostArmada SMTP",
    ],
  },
  {
    company: "The Buraq",
    role: "Software Engineer",
    period: "1 year",
    description:
      "Built the front-line software for a real-time drowning-detection system — a Progressive Web App connected to an AI-powered IoT sensor array.",
    achievements: [
      "Designed and implemented the API layer brokering communication between the PWA and the IoT hardware, handling sensor events and connection recovery",
      "Engineered the alarm pipeline: AI detection → push notification → on-device audio alarm, turning any phone or tablet into a lifeguard alert",
      "Tuned event-to-alarm latency to sub-second on healthy connections — in drowning incidents, seconds matter",
    ],
  },
  {
    company: "Nitastores",
    role: "Full-Stack Developer",
    period: "3 years",
    description:
      "Joined as a feature developer on a live e-commerce platform serving 300,000+ users across 17,000+ products. Worked across the React frontend and PHP backend.",
    achievements: [
      "Implemented a smart product-suggestion engine surfacing relevant items based on browsing behavior and cart context",
      "Shipped most of the modern e-commerce features customers expect: faceted search, wishlists, related-products carousels, cart persistence, checkout improvements",
      "One contributor among several to a 60%+ sales lift over my tenure",
    ],
  },
  {
    company: "Dabyles Engineering",
    role: "Web Developer",
    period: "1 year",
    description:
      "Built dabyles.com.ng end-to-end — from initial design through deployment to ongoing maintenance — for an engineering services firm. Currently maintain the live site.",
    achievements: [
      "Single point of ownership for the company's entire web presence",
      "Handle content updates, performance work, and feature additions as needed",
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
