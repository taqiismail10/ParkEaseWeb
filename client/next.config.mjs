/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://park-ease-web-final.vercel.app/api/:path*", // your backend
      },
    ];
  },
};

export default nextConfig;
