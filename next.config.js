// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NEXT_DIST_DIR || ".next",
  async redirects() {
    return [
      {
        source: "/attorneys",
        destination: "/our-team",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["cdn.sanity.io", "pbs.twimg.com"]
  }
};

module.exports = nextConfig;
