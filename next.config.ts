/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: [] // Replace with actual image domains in production
  },
  output: "export"
}

export default nextConfig
