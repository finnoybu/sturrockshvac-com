import type { NextConfig } from "next";
import { execSync } from "child_process";

const commitHash = execSync("git rev-parse --short HEAD")
  .toString()
  .trim();

const buildTimestamp = new Date().toISOString();

const nextConfig: NextConfig = {
  // Static export — every page builds to a plain .html file, served from
  // Cloudflare Pages' CDN edge. No Worker runs on page loads, so we are
  // immune to the 10ms CPU budget that caused Error 1102 in the
  // OpenNext + Workers setup. The single dynamic endpoint
  // (/api/request-service) lives as a Pages Function in functions/api/.
  output: "export",

  reactStrictMode: true,

  poweredByHeader: false,

  // No Image Optimization API in static export — every <Image> must be
  // unoptimized. Setting this globally avoids needing the prop on every
  // usage site.
  images: {
    unoptimized: true,
  },

  // Trailing-slash matters for Pages: with output: "export" + this flag
  // off, /about builds to out/about.html. Pages serves out/about.html
  // for /about (no redirect), and out/about/index.html for /about/. We
  // pick the .html-file form; Cloudflare Pages handles either.
  trailingSlash: false,

  env: {
    NEXT_PUBLIC_BUILD_ID: commitHash,
    NEXT_PUBLIC_BUILD_TIMESTAMP: buildTimestamp,
  },

  // headers() is unsupported in static export. Security headers are set
  // via the Cloudflare Pages _headers file at the project root.
};

export default nextConfig;
