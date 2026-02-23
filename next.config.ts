import type { NextConfig } from "next";
import { execSync } from "child_process";

const commitHash = execSync("git rev-parse --short HEAD")
  .toString()
  .trim();

const buildTimestamp = new Date().toISOString();

const nextConfig: NextConfig = {
  reactStrictMode: true,

  poweredByHeader: false,

  env: {
    NEXT_PUBLIC_BUILD_ID: commitHash,
    NEXT_PUBLIC_BUILD_TIMESTAMP: buildTimestamp,
  },
};

export default nextConfig;