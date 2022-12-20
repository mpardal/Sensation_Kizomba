/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    transpilePackages: ['firebase', '@firebase/.*'],
  },
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },
};

module.exports = nextConfig;
