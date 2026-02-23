import type { MetadataRoute } from "next";
import { services, brand } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${brand.domain}`;
  const now = new Date();

  const staticRoutes = [
    "",
    "/services",
    "/brands",
    "/request-service",
    "/privacy-policy",
    "/terms",
    "/accessibility",
  ];

  const staticEntries = staticRoutes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
  }));

  const serviceEntries = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: now,
  }));

  return [...staticEntries, ...serviceEntries];
}