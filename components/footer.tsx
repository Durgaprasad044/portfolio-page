"use client"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear} Durga Prasad Seelam. All rights reserved.</p>
          <p>Crafted with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
