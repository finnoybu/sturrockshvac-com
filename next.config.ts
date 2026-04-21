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
    // NOTE: keep this list minimal. Each rule runs a path-to-regexp match
    // on every response. PR #28 added 3 extra Cache-Control rules and
    // Lighthouse started returning Cloudflare Error 1102 (Worker CPU
    // budget, 10ms on Free tier). Reverted to just nosniff to stay under
    // budget. If we need explicit cache-control on static assets again,
    // set them at the Cloudflare zone level (Page Rules) or upgrade to
    // Workers Paid.
    return [
      {
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