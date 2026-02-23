```{=html}
<p align="center">
```
`<img src="public/og-image.jpg" alt="Sturrock HVAC Solutions Preview" width="800">`{=html}
```{=html}
</p>
```
```{=html}
<p align="center">
```
`<strong>`{=html}Official Website
Codebase`</strong>`{=html}`<br>`{=html} Production Deployment -- v1.2
Infrastructure Stable
```{=html}
</p>
```
```{=html}
<p align="center">
```
`<img src="https://img.shields.io/badge/runtime-cloudflare--workers-orange" />`{=html}
`<img src="https://img.shields.io/badge/framework-nextjs--16-black" />`{=html}
`<img src="https://img.shields.io/badge/version-v1.2-blue" />`{=html}
`<img src="https://img.shields.io/badge/status-production-green" />`{=html}
`<img src="https://img.shields.io/badge/license-private-red" />`{=html}
```{=html}
</p>
```

------------------------------------------------------------------------

# Sturrock's HVAC Solutions Website

Production marketing website for **Sturrock's HVAC Solutions**,
serving Northern Virginia and Maryland.

This repository contains the live application deployed on Cloudflare
Workers using OpenNext.

------------------------------------------------------------------------

## 🌐 Live Site

https://sturrockshvac.com

Canonical host: - `sturrockshvac.com` - `www` permanently redirects to
apex

------------------------------------------------------------------------

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

------------------------------------------------------------------------

## 🚀 Deployment Workflow

``` bash
npm run build
npm run cf:build
npx wrangler deploy
```

No static export.\
No Cloudflare Pages.\
Single runtime: Workers.

------------------------------------------------------------------------

## ⚙ Features

-   Mobile-first responsive layout
-   Optimized hero images (WebP conversion)
-   Structured service directory
-   Dynamic routing (App Router)
-   Edge caching via Cloudflare
-   SEO-safe canonical host configuration

------------------------------------------------------------------------

## 📍 Service Area

-   Fairfax County, VA\
-   Loudoun County, VA\
-   Frederick County, MD

------------------------------------------------------------------------

## 📊 Performance

Lighthouse (post-migration):

-   Performance: 93+
-   Accessibility: 96
-   Best Practices: 100
-   SEO: 100

------------------------------------------------------------------------

## 🔒 Repository Policy

This repository is private and contains proprietary branding, marketing,
and operational materials.

Unauthorized use or distribution is prohibited.

------------------------------------------------------------------------

© 2012--2026 Sturrock's HVAC-Solutions
