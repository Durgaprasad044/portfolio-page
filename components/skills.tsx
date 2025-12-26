"use client"

import { motion } from "framer-motion"
import { Code2, Database, Zap, Brain } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Vue.js"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-950",
    },
    {
      title: "Backend",
      icon: Database,
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Firebase", "REST APIs"],
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-100 dark:bg-pink-950",
    },
    {
      title: "DevOps & Tools",
      icon: Zap,
      skills: ["Git", "Docker", "AWS", "Vercel", "GitHub", "CI/CD"],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-100 dark:bg-orange-950",
    },
    {
      title: "AI & ML",
      icon: Brain,
      skills: ["LLMs", "OpenAI API", "Prompt Engineering", "RAG Systems", "Embeddings", "AI Integration"],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-100 dark:bg-green-950",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Tools & <span className="text-primary">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <motion.div key={category.title} variants={itemVariants}>
                <motion.div
                  className="relative h-full p-6 bg-card rounded-lg border-2 border-primary/50 hover:border-primary overflow-hidden group cursor-pointer transition-all"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    <motion.div
                      className="flex items-center gap-3 mb-6"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    >
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color}`}>
                        <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                      </div>
                      <h3 className="font-bold text-lg text-foreground">{category.title}</h3>
                    </motion.div>

                    <ul className="space-y-3">
                      {category.skills.map((skill, idx) => (
                        <motion.li
                          key={skill}
                          className="text-sm text-muted-foreground flex items-center gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05, duration: 0.4 }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
                          {skill}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
