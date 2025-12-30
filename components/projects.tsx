"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {title: "Mediscan",
      category: "AI Medical Imaging & Diagnostics",
      description:
        "AI-powered medical imaging platform for disease detection and clinical decision support, enabling analysis of X-rays, CT scans, and MRI images with deep learning models and intelligent report generation.",
      technologies: ["Python",
              "PyTorch",
              "FastAPI",
              "Computer Vision",
              "Deep Learning",
              "React",
              "LLM APIs"],
      image: "/images/Mediscan.png",
      github: "https://github.com/Durgaprasad044/CyberShield",

    },
    {
      title: "Cyber Shield",
      category: "Security & Fraud Detection",
      description:
        "Cyber Shield is a machine-learning-driven platform that uses NLP to detect fraudulent transactions and phishing emails.",
      technologies: ["Python", "NLP", "Machine Learning", "Scikit-learn", "Text Classification", "Threat Detection"],
      image: "/images/Cyber-sheild-dashboard.png",
      github: "https://github.com/Durgaprasad044/CyberShield",
      liveDemo:"https://cybershield-2.onrender.com",
    },
    {
      title: "Radar-CME",
      category: "Space Weather Prediction",
      description:
        "Radar-CME is a machine learning system that predicts coronal mass ejections (CMEs) using real-time and historical space weather data from NOAA.",
      technologies: ["Python", "Scikit-learn", "PyTorch", "NOAA datasets", "Pandas", "NumPy"],
      image: "/images/radar-cme-space-weather.jpg",
      github: "https://github.com/Ravitheja1289-dot/RADAR-CME",
    },
    {
      title: "Finlytics",
      category: "AI Financial Analytics",
      description:
        "Financial insights dashboard with AI-driven investment predictions and spending analysis using machine learning and data visualizations.",
      technologies: ["React", "Next.js", "Python", "LLM APIs", "SQL", "Data Visualization"],
      image: "/images/Finlytics.png",
      github: "https://github.com/Durgaprasad044/AD-01/tree/main/project",
      liveDemo: "https://finlytics-2cgt.onrender.com",
    },
    {
      title: "Retain Rover",
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
      github: "https://github.com/Ravitheja1289-dot/RetainRover",
      liveDemo: "https://retainrover.streamlit.app/",
    },
    {
  title: "MetAI",
  category: "AI-Powered Cryptocurrency Portfolio",
  description:
    "A modern, minimal cryptocurrency portfolio and AI assistant application that enables users to track crypto holdings, analyze market trends, visualize portfolio performance, and interact with an AI-powered assistant using real-time market data and voice input.",
  technologies: [
    "React 19",
    "Tailwind CSS v4",
    "React Router",
    "Recharts",
    "CoinGecko API",
    "Axios",
    "Lucide React",
    "Speech Recognition"
  ],
  image: "/images/Meta-ai.png",
  github: "https://github.com/Durgaprasad044/GDG",
  liveDemo:"https://gdg-cpnd.vercel.app",
}

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
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={itemVariants}>
              <div
                className="group relative overflow-hidden bg-card rounded-lg border-2 border-primary/50 hover:border-primary transition-all hover:shadow-xl h-full flex flex-col"
              >
                {/* Image Container - Fixed aspect ratio (16:9) */}
                <div className="relative w-full aspect-video bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden flex-shrink-0">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
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
                      <div className="flex items-center gap-3 flex-shrink-0 mt-1">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary/60 hover:text-primary transition-colors"
                          title="View Code"
                        >
                          <Github className="w-5 h-5 lg:w-6 lg:h-6" />
                        </a>
                        {project.liveDemo && (
                          <a
                            href={typeof project.liveDemo === "string" ? project.liveDemo : "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold hover:bg-primary/20 transition-all border border-primary/20"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>LIVE DEMO</span>
                          </a>
                        )}
                      </div>
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
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
