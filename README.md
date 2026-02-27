<p align="center">
  <img src="public/og-image.jpg" alt="Sturrock's HVAC Solutions Preview" width="800">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/runtime-cloudflare--workers-orange" />
  <img src="https://img.shields.io/badge/framework-nextjs--16-black" />
  <img src="https://img.shields.io/badge/version-v1.2.0-blue" />
  <img src="https://img.shields.io/badge/status-production-green" />
</p>

---

# Production Edge Deployment
## Next.js App Router on Cloudflare Workers

This repository contains the live production deployment of sturrockshvac.com, built with Next.js (App Router) and deployed to Cloudflare Workers via OpenNext.

It demonstrates:

- Edge-native runtime architecture (Workers-only, no Pages)
- Deterministic deployment workflow via Wrangler
- Canonical host enforcement (www → apex)
- SEO-safe infrastructure hardening
- Structured runtime migration patterns

---

## 🌐 Live Site

https://sturrockshvac.com

Canonical host: `sturrockshvac.com`  
`www` permanently redirects to apex.

---

## 🎯 Purpose

This repository exists as a structured reference for:

- Edge-native Next.js App Router runtime
- OpenNext migration patterns
- Cloudflare Workers deployment
- Canonical host and SEO hardening

---

## 🏗 Architecture

### Runtime

-   Next.js 16.1.6 (App Router)
-   OpenNext (`@opennextjs/cloudflare`)
-   Cloudflare Workers (Edge runtime)

### Infrastructure

-   Pure Workers deployment (no Pages)
-   Edge-level canonical redirect (www → apex)
-   Automatic HTTP → HTTPS
-   HSTS enabled (6 months + subdomains)
-   Image optimization via `_next/image`

### Environment

-   WSL2 (canonical development environment)
-   Wrangler CLI deployment

---

## 🚀 Deployment Workflow

This deployment intentionally avoids static export and Cloudflare Pages in favor of a single-runtime Workers architecture.

``` bash
npm run build
npm run cf:build
npx wrangler deploy
```

No static export.\
No Cloudflare Pages.\
Single runtime: Workers.

---

## 📐 Architectural Decisions

- **Workers-Only Runtime**  
  Avoided static export and Cloudflare Pages to maintain a single, edge-native execution environment.

- **Canonical Host Enforcement at Edge**  
  `www` permanently redirects to apex at the infrastructure layer to prevent SEO fragmentation.

- **Deterministic Deployment Pipeline**  
  Explicit `build → cf:build → wrangler deploy` workflow ensures reproducible releases.

- **App Router Architecture**  
  Leveraged Next.js App Router for structured routing and long-term maintainability.

- **Runtime Migration via OpenNext**  
  Adopted OpenNext to bridge Next.js runtime semantics with Cloudflare’s Workers environment.

---

## ⚙ Features

-   Mobile-first responsive layout
-   Optimized hero images (WebP conversion)
-   Structured service directory
-   Dynamic routing (App Router)
-   Edge caching via Cloudflare
-   SEO-safe canonical host configuration

---

## 📍 Service Area

-   Fairfax County, VA
-   Loudoun County, VA
-   Frederick County, MD

---

## 📊 Performance

Lighthouse (post-migration):

-   Performance: 93+
-   Accessibility: 96
-   Best Practices: 100
-   SEO: 100

---

## 🔒 Repository Policy

This repository documents the structured production deployment architecture for sturrockshvac.com.  
Brand assets and client materials are used with permission.

---

© 2012--2026 Sturrock's HVAC-Solutions
