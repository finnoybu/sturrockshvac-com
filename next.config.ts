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
      {
        // Long cache for versioned static assets under /_next/static
        // (content-hashed filenames, safe to cache immutably). Next.js
        // usually sets this automatically but OpenNext + Cloudflare
        // Workers serve from KV asset bindings where defaults may not
        // apply — be explicit.
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Static image assets under /public/images and /public/hero.
        // Not content-hashed, so use a shorter max-age but still cache
        // for a day at the edge and in browsers.
        source: "/:path(images|hero|brands)/:file*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        // Favicon / logo PNG. Small files, fine to cache aggressively.
        source: "/:file(favicon.ico|icon.svg|icon.png|apple-icon.png|logo.png|og-image.jpg)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=2592000",
          },
        ],
      },
    ];
  },
};

export default nextConfig;