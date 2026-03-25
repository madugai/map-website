import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/app',
        destination: 'https://play.google.com/store/apps/details?id=com.madugai.user',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
