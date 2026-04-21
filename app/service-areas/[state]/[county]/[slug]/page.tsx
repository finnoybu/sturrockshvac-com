import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import {
  brand,
  companyInfo,
  cityLandingPages,
  regionalLandingPages,
  services,
} from "@/lib/content";
import { buildBreadcrumbList } from "@/lib/schema";

// This route handles 3-segment URLs for both tier-1 cities and tier-2
// regional pages under a county, e.g.:
//   /service-areas/virginia/loudoun-county/lovettsville     (tier 1)
//   /service-areas/virginia/loudoun-county/western-villages (tier 2)

export async function generateStaticParams() {
  const cityParams = cityLandingPages
    .filter((city) => !city.isIndependentCity)
    .map((city) => ({
      state: city.stateSlug,
      county: city.countySlug,
      slug: city.slug,
    }));

  const regionalParams = regionalLandingPages.map((r) => ({
    state: r.stateSlug,
    county: r.countySlug,
    slug: r.slug,
  }));

  return [...cityParams, ...regionalParams];
}

interface Props {
  params: Promise<{ state: string; county: string; slug: string }>;
}

function findCity(state: string, county: string, slug: string) {
  return cityLandingPages.find(
    (c) =>
      c.stateSlug === state && c.countySlug === county && c.slug === slug,
  );
}

function findRegion(state: string, county: string, slug: string) {
  return regionalLandingPages.find(
    (r) =>
      r.stateSlug === state && r.countySlug === county && r.slug === slug,
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state, county, slug } = await params;

  const city = findCity(state, county, slug);
  if (city) {
    return {
      title: `HVAC Services in ${city.name}, ${city.state}`,
      description: city.metaDescription,
      alternates: {
        canonical: `https://${brand.domain}/service-areas/${city.stateSlug}/${city.countySlug}/${city.slug}`,
      },
    };
  }

  const region = findRegion(state, county, slug);
  if (region) {
    return {
      title: `HVAC Services — ${region.name}, ${region.state}`,
      description: region.metaDescription,
      alternates: {
        canonical: `https://${brand.domain}/service-areas/${region.stateSlug}/${region.countySlug}/${region.slug}`,
      },
    };
  }

  return {
    title: "Service Area Not Found",
    description:
      "The service area page you requested is not available. Explore HVAC services from Sturrock's HVAC Solutions across Loudoun, Fairfax, and Frederick counties.",
  };
}

export default async function ServiceAreaDeepPage({ params }: Props) {
  const { state, county, slug } = await params;

  const city = findCity(state, county, slug);
  if (city) return <CityPage city={city} />;

  const region = findRegion(state, county, slug);
  if (region) return <RegionalPage region={region} />;

  return notFound();
}

// ---------- Tier 1: city page ----------

function CityPage({
  city,
}: {
  city: (typeof cityLandingPages)[number];
}) {
  const canonicalUrl = `https://${brand.domain}/service-areas/${city.stateSlug}/${city.countySlug}/${city.slug}`;

  return (
    <div className="min-h-screen bg-primary-50 border-t border-primary-200">
      <main className="max-w-4xl mx-auto px-6 pt-10 pb-16">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-accent-500 transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link
            href="/service-areas"
            className="hover:text-accent-500 transition-colors"
          >
            Service Areas
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={`/service-areas/${city.stateSlug}`}
            className="hover:text-accent-500 transition-colors"
          >
            {city.state === "VA" ? "Virginia" : "Maryland"}
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={`/service-areas/${city.stateSlug}/${city.countySlug}`}
            className="hover:text-accent-500 transition-colors"
          >
            {city.county}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-primary-900">{city.name}</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-serif text-primary-900 mb-6">
          HVAC Services in {city.name}, {city.state}
        </h1>

        <p className="text-sm uppercase tracking-wider text-accent-600 font-semibold mb-6">
          {city.distanceNote}
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          {city.intro}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-14">
          <a
            href={`tel:${companyInfo.phoneE164}`}
            className="inline-block text-center bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-md shadow-md transition-colors font-semibold"
          >
            Call {companyInfo.phone}
          </a>
          <Link
            href={`/request-service?city=${encodeURIComponent(city.name)}`}
            className="inline-block text-center bg-white hover:bg-primary-100 border border-primary-300 text-primary-900 px-6 py-3 rounded-md transition-colors font-semibold"
          >
            Request Service Online
          </Link>
        </div>

        <section className="mb-14">
          <h2 className="text-3xl font-serif text-primary-900 mb-4">
            HVAC Services We Provide in {city.name}
          </h2>
          <p className="text-gray-700 mb-6">
            From routine seasonal maintenance to urgent emergency repair, our
            team handles every part of your home or business HVAC system:
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-gray-700">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-primary-800 hover:text-accent-600 transition-colors"
                >
                  • {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-14">
          <h2 className="text-3xl font-serif text-primary-900 mb-4">
            A Local Contractor for {city.name} Homeowners
          </h2>
          <p className="text-gray-700 leading-relaxed">{city.localContext}</p>
        </section>

        <section className="mb-14">
          <h2 className="text-3xl font-serif text-primary-900 mb-4">
            Why {city.name} Homeowners Choose Sturrock&apos;s
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li>
              <strong className="text-primary-900">
                NATE-certified technicians.
              </strong>{" "}
              NATE is the HVAC industry&apos;s most rigorous independent
              certification — it means our team has passed technical exams
              covering everything from refrigerant handling to combustion
              safety.
            </li>
            <li>
              <strong className="text-primary-900">Licensed in VA and MD.</strong>{" "}
              Virginia DPOR #{brand.licenses.VA.number} and Maryland HVACR #
              {brand.licenses.MD.number}. Fully insured.
            </li>
            <li>
              <strong className="text-primary-900">
                14+ years in the area.
              </strong>{" "}
              We&apos;re not a franchise dispatched from hours away — we live
              and work in the same communities we serve.
            </li>
            <li>
              <strong className="text-primary-900">
                24/7 emergency service.
              </strong>{" "}
              When heat or cooling fails at 2 a.m., we answer the phone.
            </li>
            <li>
              <strong className="text-primary-900">
                ENERGY STAR partner.
              </strong>{" "}
              We specialize in high-efficiency system replacements that lower
              long-term utility costs.
            </li>
          </ul>
        </section>

        <section className="bg-primary-900 text-white rounded-xl px-8 py-10 text-center">
          <h2 className="text-3xl font-serif mb-3">
            Ready for Service in {city.name}?
          </h2>
          <p className="mb-6 text-primary-100">
            Call us directly or request service online — we&apos;ll get back to
            you fast.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:${companyInfo.phoneE164}`}
              className="inline-block bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-md shadow-md transition-colors font-semibold"
            >
              Call {companyInfo.phone}
            </a>
            <Link
              href={`/request-service?city=${encodeURIComponent(city.name)}`}
              className="inline-block bg-white hover:bg-primary-100 text-primary-900 px-6 py-3 rounded-md transition-colors font-semibold"
            >
              Request Service
            </Link>
          </div>
        </section>

        <Script
          id={`breadcrumb-schema-city-${city.slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              buildBreadcrumbList([
                { name: "Home", path: "/" },
                { name: "Service Areas", path: "/service-areas" },
                {
                  name: city.state === "VA" ? "Virginia" : "Maryland",
                  path: `/service-areas/${city.stateSlug}`,
                },
                {
                  name: city.county,
                  path: `/service-areas/${city.stateSlug}/${city.countySlug}`,
                },
                {
                  name: city.name,
                  path: `/service-areas/${city.stateSlug}/${city.countySlug}/${city.slug}`,
                },
              ]),
            ),
          }}
        />

        <Script
          id={`city-service-schema-${city.slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "@id": `${canonicalUrl}#service`,
              name: `HVAC Services in ${city.name}, ${city.state}`,
              description: city.metaDescription,
              serviceType: "HVAC",
              url: canonicalUrl,
              provider: {
                "@type": "HVACBusiness",
                "@id": `https://${brand.domain}#business`,
              },
              areaServed: {
                "@type": "City",
                name: `${city.name}, ${city.state}`,
              },
            }),
          }}
        />
      </main>
    </div>
  );
}

// ---------- Tier 2: regional page ----------

function RegionalPage({
  region,
}: {
  region: (typeof regionalLandingPages)[number];
}) {
  const canonicalUrl = `https://${brand.domain}/service-areas/${region.stateSlug}/${region.countySlug}/${region.slug}`;

  return (
    <div className="min-h-screen bg-primary-50 border-t border-primary-200">
      <main className="max-w-4xl mx-auto px-6 pt-10 pb-16">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-accent-500 transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link
            href="/service-areas"
            className="hover:text-accent-500 transition-colors"
          >
            Service Areas
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={`/service-areas/${region.stateSlug}`}
            className="hover:text-accent-500 transition-colors"
          >
            {region.state === "VA" ? "Virginia" : "Maryland"}
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={`/service-areas/${region.stateSlug}/${region.countySlug}`}
            className="hover:text-accent-500 transition-colors"
          >
            {region.county}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-primary-900">{region.name}</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-serif text-primary-900 mb-6">
          HVAC Services — {region.name}, {region.state}
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          {region.intro}
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          {region.overview}
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

        {/* Communities in this region */}
        <section className="mb-14">
          <h2 className="text-3xl font-serif text-primary-900 mb-6">
            Communities We Serve in {region.name}
          </h2>
          <div className="space-y-8">
            {region.places.map((place) => (
              <div key={place.slug} id={place.slug} className="scroll-mt-20">
                <h3 className="text-xl font-semibold text-primary-900 mb-2">
                  {place.name}
                </h3>
                <p className="text-gray-700 leading-relaxed">{place.blurb}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Service list */}
        <section className="mb-14">
          <h2 className="text-3xl font-serif text-primary-900 mb-4">
            HVAC Services We Provide
          </h2>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-gray-700">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-primary-800 hover:text-accent-600 transition-colors"
                >
                  • {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Closing CTA */}
        <section className="bg-primary-900 text-white rounded-xl px-8 py-10 text-center">
          <h2 className="text-3xl font-serif mb-3">
            Ready for Service?
          </h2>
          <p className="mb-6 text-primary-100">
            Call us directly or request service online — we&apos;ll get back to
            you fast.
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
          id={`breadcrumb-schema-region-${region.slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              buildBreadcrumbList([
                { name: "Home", path: "/" },
                { name: "Service Areas", path: "/service-areas" },
                {
                  name: region.state === "VA" ? "Virginia" : "Maryland",
                  path: `/service-areas/${region.stateSlug}`,
                },
                {
                  name: region.county,
                  path: `/service-areas/${region.stateSlug}/${region.countySlug}`,
                },
                {
                  name: region.name,
                  path: `/service-areas/${region.stateSlug}/${region.countySlug}/${region.slug}`,
                },
              ]),
            ),
          }}
        />

        <Script
          id={`regional-service-schema-${region.slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "@id": `${canonicalUrl}#service`,
              name: `HVAC Services — ${region.name}, ${region.state}`,
              description: region.metaDescription,
              serviceType: "HVAC",
              url: canonicalUrl,
              provider: {
                "@type": "HVACBusiness",
                "@id": `https://${brand.domain}#business`,
              },
              areaServed: region.places.map((p) => ({
                "@type": "City",
                name: `${p.name}, ${region.state}`,
              })),
            }),
          }}
        />
      </main>
    </div>
  );
}
