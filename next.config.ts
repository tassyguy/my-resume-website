/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // ensures /about/ → /about/index.html
  images: {
    unoptimized: true, // disable image optimization for static export
  },
  // optional: customize output directory if needed
  // distDir: 'build',
};

module.exports = nextConfig;
