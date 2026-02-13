/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	output: "standalone",
	poweredByHeader: false,
	allowedDevOrigins: ["localhost", "127.0.0.1"],
};

export default nextConfig;
