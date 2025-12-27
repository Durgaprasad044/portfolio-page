"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github, Twitter } from "lucide-react"

export default function Contact() {
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
      transition: { duration: 0.6 },
    },
  }

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Durgaprasad044",
      color: "hover:text-gray-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/seelam-durga-prasad/",
      color: "hover:text-blue-400",
    },
    
    {
      icon: Mail,
      label: "Email",
      href: "mailto:seelamdurgaprasad5442@gmail.com",
      color: "hover:text-red-400",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have a project in mind or just want to chat? I'd love to hear from you! Drop me a message and I'll get
              back to you as soon as possible.
            </p>

            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full px-4 py-2.5 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-2.5 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                  className="w-full px-4 py-2.5 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-primary"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Connect With Me */}
          <motion.div variants={itemVariants}>
            <div className="p-8 bg-card rounded-lg border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-3">Connect With Me</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Feel free to reach out through any of these platforms. I'm always open to discussing new projects,
                creative ideas, or opportunities.
              </p>

              <div className="space-y-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-4 p-4 bg-background rounded-lg border border-border hover:border-primary transition-all group"
                    >
                      <Icon className={`w-6 h-6 text-muted-foreground ${social.color} transition-colors`} />
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {social.label}
                      </span>
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
