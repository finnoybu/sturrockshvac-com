import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import {
  brand,
  companyInfo,
  cityLandingPages,
  countyOverviews,
  regionalLandingPages,
} from "@/lib/content";
import { buildBreadcrumbList } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Sturrock's HVAC Solutions serves Loudoun County, Fairfax County, and the City of Fairfax and Falls Church in Virginia, plus Frederick County in Maryland. NATE-certified, licensed, and local.",
  alternates: {
    canonical: `https://${brand.domain}/service-areas`,
  },
};

export default function ServiceAreasIndex() {
  const virginiaCounties = countyOverviews.filter(
    (c) => c.stateSlug === "virginia",
  );
  const marylandCounties = countyOverviews.filter(
    (c) => c.stateSlug === "maryland",
  );
  const independentCities = cityLandingPages.filter(
    (c) => c.isIndependentCity,
  );

  return (
    <div className="min-h-screen bg-primary-50 border-t border-primary-200">
      <main className="max-w-4xl mx-auto px-6 pt-10 pb-16">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-accent-500 transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-primary-900">Service Areas</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-serif text-primary-900 mb-6">
          Service Areas
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          Sturrock&apos;s HVAC Solutions is based in Hillsboro, Virginia —
          tucked against the Blue Ridge in western Loudoun County — and we
          have been serving homeowners and businesses across Northern Virginia
          and Frederick County, Maryland for over 14 years. We are licensed in
          both Virginia (DPOR #{brand.licenses.VA.number}) and Maryland (HVACR
          #{brand.licenses.MD.number}), NATE-certified, and fully insured.
          Explore by state, county, or city below.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-14">
          <a
            href={`tel:${companyInfo.phoneE164}`}
            className="inline-block text-center bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-md shadow-md transition-colors font-semibold"
          >
            Call {companyInfo.phone}
          </a>
          <Link
            href="/request-service"
            className="inline-block text-center bg-white hover:bg-primary-100 border border-primary-300 text-primary-900 px-6 py-3 rounded-md transition-colors font-semibold"
          >
            Request Service Online
          </Link>
        </div>

        {/* Virginia */}
        <section className="mb-12">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-3xl font-serif text-primary-900">Virginia</h2>
            <Link
              href="/service-areas/virginia"
              className="text-sm text-accent-600 hover:text-accent-700 transition-colors"
            >
              View all Virginia areas →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            {virginiaCounties.map((county) => (
              <Link
                key={county.slug}
                href={`/service-areas/${county.stateSlug}/${county.slug}`}
                className="block bg-white border border-primary-200 rounded-lg px-5 py-4 hover:border-accent-500 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-primary-900 text-lg">
                  {county.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  View all cities and communities
                </p>
              </Link>
            ))}
          </div>
          {independentCities.length > 0 && (
            <>
              <h3 className="text-lg font-semibold text-primary-800 mb-3 mt-6">
                Independent Cities
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {independentCities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/service-areas/${city.stateSlug}/${city.countySlug}`}
                    className="block bg-white border border-primary-200 rounded-lg px-5 py-4 hover:border-accent-500 hover:shadow-md transition-all"
                  >
                    <h3 className="font-semibold text-primary-900 text-lg">
                      {city.name}, {city.state}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {city.distanceNote}
                    </p>
                  </Link>
                ))}
              </div>
            </>
          )}
        </section>

        {/* Maryland */}
        <section className="mb-14">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-3xl font-serif text-primary-900">Maryland</h2>
            <Link
              href="/service-areas/maryland"
              className="text-sm text-accent-600 hover:text-accent-700 transition-colors"
            >
              View all Maryland areas →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {marylandCounties.map((county) => (
              <Link
                key={county.slug}
                href={`/service-areas/${county.stateSlug}/${county.slug}`}
                className="block bg-white border border-primary-200 rounded-lg px-5 py-4 hover:border-accent-500 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-primary-900 text-lg">
                  {county.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  View all cities and communities
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Stats strip */}
        <section className="bg-white border border-primary-200 rounded-xl px-8 py-6 mb-14 text-center">
          <p className="text-sm uppercase tracking-wider text-accent-600 font-semibold mb-2">
            Total Coverage
          </p>
          <p className="text-2xl font-serif text-primary-900">
            {cityLandingPages.length} cities &middot;{" "}
            {regionalLandingPages.length} regions &middot;{" "}
            {countyOverviews.length} counties &middot; 2 states
          </p>
        </section>

        {/* Closing CTA */}
        <section className="bg-primary-900 text-white rounded-xl px-8 py-10 text-center">
          <h2 className="text-3xl font-serif mb-3">Not sure if we cover you?</h2>
          <p className="mb-6 text-primary-100">
            If you&apos;re in Loudoun, Fairfax, or Frederick County — we do.
            Call or request service and we&apos;ll confirm.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:${companyInfo.phoneE164}`}
              className="inline-block bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-md shadow-md transition-colors font-semibold"
            >
              Call {companyInfo.phone}
            </a>
            <Link
              href="/request-service"
              className="inline-block bg-white hover:bg-primary-100 text-primary-900 px-6 py-3 rounded-md transition-colors font-semibold"
            >
              Request Service
            </Link>
          </div>
        </section>

        <Script
          id="breadcrumb-schema-service-areas-index"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              buildBreadcrumbList([
                { name: "Home", path: "/" },
                { name: "Service Areas", path: "/service-areas" },
              ]),
            ),
          }}
        />

        <Script
          id="service-areas-index-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "@id": `https://${brand.domain}/service-areas#service`,
              name: "HVAC Services Across Northern Virginia and Frederick County, MD",
              description:
                "Sturrock's HVAC Solutions service-area index covering Loudoun and Fairfax counties, City of Fairfax, Falls Church, and Frederick County, MD.",
              serviceType: "HVAC",
              url: `https://${brand.domain}/service-areas`,
              provider: {
                "@type": "HVACBusiness",
                "@id": `https://${brand.domain}#business`,
              },
            }),
          }}
        />
      </main>
    </div>
  );
}
