import type { NextConfig } from "next";
import { execSync } from "child_process";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

initOpenNextCloudflareForDev();

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

  async headers() {
    return [
      {
        // Apply to every route.
        source: "/:path*",
        headers: [
          // Prevent MIME-type sniffing — mitigates a class of XSS that
          // relies on the browser ignoring Content-Type and executing a
          // response as a different type (e.g. JS served as image).
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
    ];
  },
};

export default nextConfig;