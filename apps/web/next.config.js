const path = require('node:path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export — the site is served as plain files from GitHub Pages.
  output: 'export',
  images: { unoptimized: true },
  // `libs/*` are workspace symlinks outside this app's folder; Next needs the monorepo root
  // to trace and transpile them correctly.
  outputFileTracingRoot: path.join(__dirname, '../..'),
  transpilePackages: ['@portfolio/types'],
}

module.exports = nextConfig
