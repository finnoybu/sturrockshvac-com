const nextConfig = {
  reactStrictMode: true,
  output: "export",
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BUILD_ID: new Date().toISOString(),
  },
};

export default nextConfig;