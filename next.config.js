/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    // domains: ["103.57.220.81", "www.mountaingoatsoftware.com", "eviromet.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eviromet.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "www.eviromet.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "www.mountaingoatsoftware.com",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "103.57.220.81",
        pathname: "**",
      },
    ],
  },
  // experimental: {
  //   serverActions: true,
  // },
};

module.exports = nextConfig;
