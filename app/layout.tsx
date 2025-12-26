import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Script from "next/script"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Durga Prasad Seelam | Full Stack Developer & AI Engineer | Portfolio",
  description:
    "Full Stack Developer & AI Engineer with 9.5+ years of experience building scalable, high-performance applications. Specializing in React, Node.js, Python, and AI-powered solutions.",
  keywords: [
    "Full Stack Developer",
    "AI Engineer",
    "React Developer",
    "Node.js",
    "Python",
    "Web Development",
    "AI Solutions",
    "Machine Learning",
    "Pune",
    "Durga Prasad",
    "durga prasad seelam",
    "durga prasad portfolio",
  ],
  generator: "v0.app",
  openGraph: {
    title: "Durga Prasad Seelam | Full Stack Developer & AI Engineer",
    description:
      "Full Stack Developer & AI Engineer with 9.5+ years of experience building scalable, high-performance applications.",
    type: "website",
    locale: "en_US",
    url: "https://durgaprasadseelam.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Durga Prasad Seelam | Full Stack Developer & AI Engineer",
    description:
      "Full Stack Developer & AI Engineer with 9.5+ years of experience building scalable, high-performance applications.",
  },
  alternates: {
    canonical: "https://durgaprasadseelam.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-L3XQRP3SR9" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-L3XQRP3SR9', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Durga Prasad Seelam",
              url: "https://durgaprasadseelam.com",
              jobTitle: "Full Stack Developer & AI Engineer",
              email: "seelamdurgaprasad5442@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Pune",
                addressCountry: "IN",
              },
              sameAs: ["https://www.linkedin.com/in/durga-prasad/", "https://github.com/durgaprasad"],
              knowsAbout: [
                "React.js",
                "Node.js",
                "Python",
                "TypeScript",
                "Full Stack Development",
                "AI Engineering",
                "Machine Learning",
              ],
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
