import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    inlineCss: true,
  },
  // Output modern ES2017+ to avoid shipping unnecessary polyfills
  // for Array.prototype.at, Object.fromEntries, String.trimEnd, etc.
  compiler: {
    // SWC targets the browsers in .browserslistrc; no legacy transforms needed
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
