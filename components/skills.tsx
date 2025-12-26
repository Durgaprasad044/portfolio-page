"use client"

import { motion } from "framer-motion"

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "HTML/CSS", "Redux", "Framer Motion"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL", "Express", "FastAPI"],
    },
    {
      title: "AI/ML",
      skills: [
        "OpenAI API",
        "TensorFlow",
        "PyTorch",
        "LangChain",
        "Hugging Face",
        "Vector Databases",
        "Prompt Engineering",
        "RAG",
      ],
    },
    {
      title: "Tools",
      skills: ["Git", "Docker", "AWS", "Vercel", "CI/CD", "Jest", "Figma", "Linux"],
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
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={itemVariants}>
              <motion.div
                className="relative h-full p-8 bg-card rounded-lg border-2 border-primary/50 hover:border-primary overflow-hidden group cursor-pointer transition-all"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
                    <h3 className="font-bold text-2xl text-foreground">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 bg-card border border-primary/30 text-foreground rounded text-sm font-medium hover:border-primary transition-colors"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
