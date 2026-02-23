/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  poweredByHeader: false,
  images: {
    unoptimized: true, // REQUIRED for static export
  },
};

export default nextConfig;