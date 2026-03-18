/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.kosherconnect.com' },
      { protocol: 'https', hostname: '**.kosherconnect.app' },
    ],
  },
  typedRoutes: true,
};

module.exports = nextConfig;
