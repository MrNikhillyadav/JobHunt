/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {  protocol:"https",
        hostname: "iy050ak8qgbpsthz.public.blob.vercel-storage.com",
        port: '',
        pathname: '/company_logos/**',
      },
    ],
  },
};

module.exports = nextConfig;
