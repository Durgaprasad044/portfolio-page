/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Vercel will automatically optimize images
    // Remove unoptimized to enable Vercel's image optimization
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
