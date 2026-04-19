import type { MetadataRoute } from "next";
import {
  services,
  brand,
  cityLandingPages,
  regionalLandingPages,
  countyOverviews,
} from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${brand.domain}`;
  const now = new Date();

  const staticRoutes = [
    "",
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
