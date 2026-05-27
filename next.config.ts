/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: false, // Disable unoptimized images for production
    domains: ["your-image-domain.com"] // Replace with actual image domains in production
  },
  output: "standalone", // Use standalone output for Cloudflare Pages
  experimental: {
    outputFileTracingRoot: process.cwd(), // Set the root for output file tracing
  },
}

export default nextConfig

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
