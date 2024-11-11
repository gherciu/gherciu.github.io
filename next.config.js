/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Generate static pages for each route
  output: "export",
  images: { unoptimized: true },
}

module.exports = nextConfig
