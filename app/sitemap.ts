import type { MetadataRoute } from "next";
import {
  services,
  brand,
  cityLandingPages,
  regionalLandingPages,
  countyOverviews,
} from "@/lib/content";

// Required for `output: "export"` — without it, Next.js refuses to
// statically generate sitemap.xml because the function is technically
// ambiguous about static-vs-dynamic.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${brand.domain}`;
  // Use a fixed date — build timestamp — instead of `new Date()` so the
  // generated sitemap is fully deterministic per build.
  const now = new Date(
    process.env.NEXT_PUBLIC_BUILD_TIMESTAMP || Date.now(),
  );

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/brands",
    "/request-service",
    "/testimonials",
    "/privacy-policy",
    "/terms",
    "/accessibility",
    "/service-areas",
    "/service-areas/virginia",
    "/service-areas/maryland",
  ];

  const staticEntries = staticRoutes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
  }));

  const serviceEntries = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: now,
  }));

  const cityEntries = cityLandingPages.map((city) => ({
    url: city.isIndependentCity
      ? `${baseUrl}/service-areas/${city.stateSlug}/${city.countySlug}`
      : `${baseUrl}/service-areas/${city.stateSlug}/${city.countySlug}/${city.slug}`,
    lastModified: now,
  }));

  const regionalEntries = regionalLandingPages.map((region) => ({
    url: `${baseUrl}/service-areas/${region.stateSlug}/${region.countySlug}/${region.slug}`,
    lastModified: now,
  }));

  const countyEntries = countyOverviews.map((county) => ({
    url: `${baseUrl}/service-areas/${county.stateSlug}/${county.slug}`,
    lastModified: now,
  }));

  return [
    ...staticEntries,
    ...serviceEntries,
    ...cityEntries,
    ...regionalEntries,
    ...countyEntries,
  ];
}
