/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // Static export
  trailingSlash: true,     // Ensure /about/ maps to /about/index.html
};

module.exports = nextConfig;
