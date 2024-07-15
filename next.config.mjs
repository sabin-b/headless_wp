/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
      },
      {
        hostname: "dev-sabin-headless-wp.pantheonsite.io",
      },
    ],
  },
};

export default nextConfig;
