/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.ashyo.fullstackdev.uz",
      },
    ],
  },
};

module.exports = nextConfig;
