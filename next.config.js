// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'], // Allow images from Cloudinary
  },
  reactStrictMode: true, // Enables strict mode in development
  experimental: {
    serverActions: true, // Enable Server Actions feature
  },
};

module.exports = nextConfig;
