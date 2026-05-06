import { motion } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CodeSnippet } from "./CodeSnippet";

export function HeroSection() {
  const handleDownloadResume = () => {
    // Create a sample resume download - in production, replace with actual resume URL
    const link = document.createElement("a");
    link.href = "/MyResume.pdf";
    link.download = "Iyiade_Boluwatife_Resume.pdf";
    link.click();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      {/* Animated background circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary text-sm md:text-base font-medium tracking-wider uppercase mb-4">
                Full-Stack Web Developer
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              Hi, I'm{" "}
              <span className="text-primary glow-text">Iyiade Boluwatife</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10"
            >
              I build production-grade web applications across React and PHP —
              custom CMS, admin panels, analytics, e-commerce. Currently shipping
              a full custom platform for a Dublin-based consultancy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button variant="hero" size="xl" onClick={handleDownloadResume}>
                <Download className="w-5 h-5" />
                Download Resume
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </motion.div>
          </div>

          {/* Code snippet */}
          <div className="hidden lg:block">
            <CodeSnippet />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs tracking-wider uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
