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
        "Cyber Shield is a machine-learning-driven platform that uses NLP to detect fraudulent transactions and phishing emails.",
      technologies: ["Python", "NLP", "Machine Learning", "Scikit-learn", "Text Classification", "Threat Detection"],
      image: "/images/cyber-shield-dashboard.jpg",
      github: "https://github.com/Durgaprasad044/CyberShield",
      showIcons:"https://cybershield-2.onrender.com",
    },
    {
      title: "Radar-CME",
      category: "Space Weather Prediction",
      description:
        "Radar-CME is a machine learning system that predicts coronal mass ejections (CMEs) using real-time and historical space weather data from NOAA.",
      technologies: ["Python", "Scikit-learn", "PyTorch", "NOAA datasets", "Pandas", "NumPy"],
      image: "/images/radar-cme-space-weather.jpg",
      github: "https://github.com",
      showIcons: true,
    },
    {
      title: "Finlytics",
      category: "AI Financial Analytics",
      description:
        "Financial insights dashboard with AI-driven investment predictions and spending analysis using machine learning and data visualizations.",
      technologies: ["React", "Next.js", "Python", "LLM APIs", "SQL", "Data Visualization"],
      image: "/images/finlytics-financial-dashboard.jpg",
      github: "https://github.com",
      showIcons: true,
    },
    {
      title: "Mode Metric",
      category: "AI-Powered Analytics",
      description:
        "Mode Metric predicts user churn and enables proactive retention strategies by analyzing user behavior, engagement patterns, and historical data to identify at-risk customers.",
      technologies: [
        "Python",
        "Scikit-learn",
        "PyTorch",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "FastAPI",
        "Docker",
      ],
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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={itemVariants}>
              <a
                href={project.github}
                className="group relative overflow-hidden bg-card rounded-lg border-2 border-primary/50 hover:border-primary transition-all hover:shadow-xl h-full flex flex-col block"
              >
                {/* Image Container - Fixed aspect ratio (16:9) */}
                <div className="relative w-full aspect-video bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden flex-shrink-0">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    priority={false}
                  />
                </div>

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content Container - Grows to fill available space */}
                <div className="relative z-10 p-6 flex flex-col flex-1">
                  <div className="flex-1 mb-3">
                    <div className="flex items-start gap-3">
                      <div className="flex-1">
                        <h3 className="font-bold text-xl lg:text-2xl group-hover:text-primary transition-colors leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-xs lg:text-sm text-primary font-medium mt-1">{project.category}</p>
                      </div>
                      {project.showIcons && (
                        <div className="flex items-center gap-2 flex-shrink-0 mt-1">
                          <Github className="w-5 h-5 lg:w-6 lg:h-6 text-primary/60 group-hover:text-primary transition-colors" />
                          <svg
                            className="w-5 h-5 lg:w-6 lg:h-6 text-primary/60 group-hover:text-primary transition-colors"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M7 17V7m0 0L3 3m0 0L7 7m0 0L3 3m0 0h8m4 0v10m0 0l4 4m0 0l-4-4m0 0l4 4m0 0h-8" />
                            <path d="M14 7h7M7 14h7" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Description - Limited to 2-3 lines */}
                  <p className="text-sm lg:text-base text-muted-foreground mb-6 leading-relaxed line-clamp-3 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags - Wrapping layout */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-transparent border border-green-500/50 text-foreground text-xs lg:text-sm rounded font-medium hover:border-green-500 hover:bg-green-500/10 transition-all whitespace-nowrap"
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
