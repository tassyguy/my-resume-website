// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // <-- this is what replaces `next export`
  output: "export",

  // optional: emit `/foo/index.html` instead of `/foo.html`
  // trailingSlash: true,

  // optional: change the export folder name (defaults to "out")
  // distDir: "dist",
};

module.exports = nextConfig;
