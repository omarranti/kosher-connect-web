/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.kosherconnect.com',
      },
    ],
  },
  typedRoutes: true,
};

module.exports = nextConfig;
