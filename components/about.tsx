"use client"

import { motion } from "framer-motion"
import { Code2, Users, Shield, Zap, Lightbulb, BookOpen, MapPin, Mail, Phone } from "lucide-react"

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const highlights = [
    {
      title: "Full Stack Development",
      description:
        "Building scalable web applications with React, Next.js, Node.js, and modern web technologies for production environments.",
      icon: <Code2 size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "AI & Machine Learning",
      description:
        "Developing AI-powered solutions using LLMs, TensorFlow, Scikit-learn, and prompt engineering for intelligent applications.",
      icon: <Lightbulb size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "Database Design",
      description:
        "Designing and managing databases with MongoDB, Firebase, and PostgreSQL for optimal data storage and retrieval.",
      icon: <Shield size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "DevOps & Deployment",
      description:
        "Deploying applications on Vercel, Render, Netlify, and AWS with Git workflows and CI/CD integration.",
      icon: <Zap size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "Responsive Design",
      description:
        "Creating beautiful, responsive UIs with Tailwind CSS and modern design principles for all device sizes.",
      icon: <Users size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "Problem Solving",
      description:
        "Solving complex technical challenges with innovative approaches and a focus on clean, maintainable code.",
      icon: <BookOpen size={28} strokeWidth={1.5} className="text-primary" />,
    },
  ]

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              About{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16 max-w-3xl">
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              I'm a <span className="font-semibold text-foreground">Full Stack Developer and AI Engineer</span> with
              expertise in building{" "}
              <span className="font-semibold text-foreground">scalable, high-performance applications</span> that
              integrate modern web technologies with intelligent, data-driven solutions. Focused on clean architecture,
              reliable systems, and AI-powered features designed for real-world impact.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm committed to <span className="font-semibold text-foreground">continuous learning</span> and staying at
              the forefront of emerging technologies, frameworks, and AI advancements. Beyond development, I'm
              passionate about{" "}
              <span className="font-semibold text-foreground">
                innovation, problem-solving, and creating solutions that matter
              </span>
              .
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-foreground">Core Expertise</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors"
                  whileHover={{ y: -4 }}
                >
                  <div className="text-primary mb-3">{item.icon}</div>
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8 text-foreground">Quick Info</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { label: "Location", value: "Hyderabad, India", icon: <MapPin size={24} strokeWidth={1.5} /> },
                {
                  label: "Email",
                  value: "seelamdurgaprasad5442@gmail.com",
                  link: "mailto:seelamdurgaprasad5442@gmail.com",
                  icon: <Mail size={24} strokeWidth={1.5} />,
                },
                {
                  label: "Phone",
                  value: "+91 7680840845",
                  link: "tel:+917680840845",
                  icon: <Phone size={24} strokeWidth={1.5} />,
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-primary mb-2">{item.icon}</div>
                  <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                  {item.link ? (
                    <a href={item.link} className="font-semibold text-primary hover:underline text-sm break-all">
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-semibold text-foreground text-sm">{item.value}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
