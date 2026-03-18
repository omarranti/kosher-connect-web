/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.kosherconnect.com' },
      { protocol: 'https', hostname: '**.kosherconnect.app' },
    ],
  },
  typedRoutes: true,
  // Avoid stale cached HTML/JS after auth changes — browsers/CDNs were serving old admin shell
  async headers() {
    return [
      {
        source: "/admin",
        headers: [
          {
            key: "Cache-Control",
            value: "private, no-cache, no-store, max-age=0, must-revalidate",
          },
        ],
      },
      {
        source: "/admin/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "private, no-cache, no-store, max-age=0, must-revalidate",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
