"use client"

import { motion } from "framer-motion"
import { Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Cyber Shield",
      category: "Security & Fraud Detection",
      description:
        "Cyber Shield is a machine-learning-driven platform that uses NLP to detect fraudulent transactions and phishing emails.",
      technologies: ["Python", "NLP", "Machine Learning", "Scikit-learn", "Text Classification", "Threat Detection"],
      icon: "🛡️",
      github: "#",
    },
    {
      title: "Radar-CME",
      category: "Space Weather Prediction",
      description:
        "Radar-CME is a machine learning system that predicts coronal mass ejections (CMEs) using real-time and historical space weather data from NOAA.",
      technologies: ["Python", "Scikit-learn", "PyTorch", "NOAA datasets", "Pandas", "NumPy"],
      icon: "🌍",
      github: "#",
    },
    {
      title: "Finlytics",
      category: "AI Financial Analytics",
      description:
        "Financial insights dashboard with AI-driven investment predictions and spending analysis using machine learning and data visualizations.",
      technologies: ["React", "Next.js", "Python", "LLM APIs", "SQL", "Data Visualization"],
      icon: "📊",
      github: "#",
    },
    {
      title: "QuantumFin",
      category: "AI Finance Assistant",
      description:
        "QuantumFin is a full-stack AI-powered financial assistant that tracks expenses, manages budgets, and provides conversational insights with automated categorization.",
      technologies: ["React", "Next.js", "Node.js", "Python", "LLM APIs", "SQL / NoSQL"],
      icon: "💰",
      github: "#",
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
      <div className="max-w-6xl mx-auto">
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
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project, idx) => (
            <motion.div key={project.title} variants={itemVariants}>
              <div className="group relative p-6 bg-card rounded-lg border-2 border-primary/50 hover:border-primary transition-all hover:shadow-xl h-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-xs text-primary font-medium">{project.category}</p>
                    </div>
                    <span className="text-2xl">{project.icon}</span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className="px-2.5 py-1 bg-primary/10 text-primary text-xs rounded font-medium hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <motion.div whileHover={{ x: 4 }} className="inline-flex items-center gap-2">
                    <a
                      href={project.github}
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
