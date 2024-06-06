/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  webpack: (config, { isServer }) => {
    // For running the custom server, only apply this configuration for the server build
    if (isServer) {
      config.entry = './server.js'; // Path to your custom server file
      config.output = {
        filename: 'server.js',
        path: __dirname,
      };
    }

    return config;
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              includePaths: [path.join(__dirname, 'styles/styles')],
            },
          },
        },
      ],
    });
    return config;
  },
  basePath: '',
};

module.exports = nextConfig;
