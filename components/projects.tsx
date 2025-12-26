"use client"

import { motion } from "framer-motion"
import { Github } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "Cyber Shield",
      category: "Security & Fraud Detection",
      description:
        "ML-driven platform using NLP to detect fraudulent transactions and phishing emails.",
      technologies: ["Python", "NLP", "Machine Learning", "Scikit-learn"],
      image: "/images/cyber-shield-dashboard.jpg",
      github: "https://github.com",
      showIcons: true,
    },
    {
      title: "Radar-CME",
      category: "Space Weather Prediction",
      description:
        "ML system predicting coronal mass ejections using real-time NOAA space weather data.",
      technologies: ["Python", "PyTorch", "Scikit-learn", "Pandas"],
      image: "/images/radar-cme-space-weather.jpg",
      github: "https://github.com",
      showIcons: true,
    },
    {
      title: "Finlytics",
      category: "AI Financial Analytics",
      description:
        "Financial dashboard with AI-driven investment predictions and spending analysis.",
      technologies: ["React", "Next.js", "Python", "LLM APIs"],
      image: "/images/finlytics-financial-dashboard.jpg",
      github: "https://github.com",
      showIcons: true,
    },
    {
      title: "Mode Metric",
      category: "AI-Powered Analytics",
      description:
        "Predicts user churn and enables proactive retention through behavior analysis.",
      technologies: ["Python", "PyTorch", "FastAPI", "Docker"],
      image: "/images/mode-metric-analytics.png",
      github: "https://github.com",
      showIcons: true,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={itemVariants}>
              <a
                href={project.github}
                className="group relative overflow-hidden bg-card rounded-lg border border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg h-full flex flex-col block"
              >
                {/* Image Container - Smaller height */}
                <div className="relative w-full h-48 bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden flex-shrink-0">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    priority={false}
                  />
                </div>

                {/* Content Container */}
                <div className="relative z-10 p-4 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-base lg:text-lg group-hover:text-primary transition-colors leading-tight mb-0.5">
                        {project.title}
                      </h3>
                      <p className="text-xs text-primary/70 font-medium">{project.category}</p>
                    </div>
                    {project.showIcons && (
                      <Github className="w-4 h-4 text-primary/50 group-hover:text-primary transition-colors flex-shrink-0 mt-0.5" />
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-muted-foreground mb-3 leading-snug line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className="px-2 py-0.5 bg-background/50 border border-primary/20 text-foreground text-xs rounded font-medium hover:border-primary/40 hover:bg-primary/5 transition-all"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
