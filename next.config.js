/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    transpilePackages: ['firebase', '@firebase/.*'],
  },
};

module.exports = nextConfig;
