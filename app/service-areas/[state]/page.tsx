import { notFound } from "next/navigation";
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

// State-level overview page at /service-areas/virginia or /service-areas/maryland.

const STATES = {
  virginia: {
    slug: "virginia",
    name: "Virginia",
    abbr: "VA",
    intro:
      "Sturrock's HVAC Solutions has been serving homeowners and businesses across Northern Virginia for over 14 years, with a team of NATE-certified technicians operating out of our Hillsboro base in western Loudoun County. We are Virginia DPOR licensed (#2705144397), fully insured, and available 24/7 for emergency HVAC service across Loudoun and Fairfax counties as well as the City of Fairfax and the City of Falls Church.",
    metaDescription:
      "HVAC services across Northern Virginia — Loudoun County, Fairfax County, Fairfax City, and Falls Church. NATE-certified, licensed, and insured. 24/7 emergency service.",
  },
  maryland: {
    slug: "maryland",
    name: "Maryland",
    abbr: "MD",
    intro:
      "Sturrock's HVAC Solutions is Maryland-licensed (HVACR #85109) and serves Frederick County from our Hillsboro, Virginia base — close enough to respond quickly, and properly credentialed for jurisdictional work across the Potomac. Our NATE-certified technicians handle residential and light commercial HVAC across the county, from the city of Frederick itself to small towns and rural communities north toward the Pennsylvania border.",
    metaDescription:
      "HVAC services across Frederick County, Maryland. Maryland-licensed, NATE-certified, and based just south in Hillsboro, VA. 24/7 emergency service.",
  },
} as const;

export async function generateStaticParams() {
  return Object.keys(STATES).map((state) => ({ state }));
}

interface Props {
  params: Promise<{ state: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state } = await params;
  const data = STATES[state as keyof typeof STATES];

  if (!data) {
    return { title: "Service Area Not Found" };
  }

  return {
    title: `HVAC Services in ${data.name}`,
    description: data.metaDescription,
    alternates: {
      canonical: `https://${brand.domain}/service-areas/${data.slug}`,
    },
  };
}

export default async function StatePage({ params }: Props) {
  const { state } = await params;
  const data = STATES[state as keyof typeof STATES];

  if (!data) return notFound();

  const canonicalUrl = `https://${brand.domain}/service-areas/${data.slug}`;

  const countiesInState = countyOverviews.filter(
    (c) => c.stateSlug === data.slug,
  );

  const independentCitiesInState = cityLandingPages.filter(
    (c) => c.stateSlug === data.slug && c.isIndependentCity,
  );

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
          <span className="text-primary-900">{data.name}</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-serif text-primary-900 mb-6">
          HVAC Services in {data.name}
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          {data.intro}
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

        {/* Counties */}
        {countiesInState.length > 0 && (
          <section className="mb-14">
            <h2 className="text-3xl font-serif text-primary-900 mb-6">
              Counties We Serve in {data.name}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {countiesInState.map((county) => {
                const tier1Count = cityLandingPages.filter(
                  (c) =>
                    c.stateSlug === county.stateSlug &&
                    c.countySlug === county.slug &&
                    !c.isIndependentCity,
                ).length;
                const tier2Count = regionalLandingPages.filter(
                  (r) =>
                    r.stateSlug === county.stateSlug &&
                    r.countySlug === county.slug,
                ).length;

                return (
                  <Link
                    key={county.slug}
                    href={`/service-areas/${county.stateSlug}/${county.slug}`}
                    className="block bg-white border border-primary-200 rounded-lg px-5 py-4 hover:border-accent-500 hover:shadow-md transition-all"
                  >
                    <h3 className="font-semibold text-primary-900 text-lg">
                      {county.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {tier1Count} cities · {tier2Count} regional pages
                    </p>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* Independent cities */}
        {independentCitiesInState.length > 0 && (
          <section className="mb-14">
            <h2 className="text-3xl font-serif text-primary-900 mb-6">
              Independent Cities We Serve
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {independentCitiesInState.map((city) => (
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
          </section>
        )}

        <section className="bg-primary-900 text-white rounded-xl px-8 py-10 text-center">
          <h2 className="text-3xl font-serif mb-3">Ready for Service?</h2>
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
          id={`state-overview-schema-${data.slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "@id": `${canonicalUrl}#service`,
              name: `HVAC Services in ${data.name}`,
              description: data.metaDescription,
              serviceType: "HVAC",
              url: canonicalUrl,
              provider: {
                "@type": "HVACBusiness",
                "@id": `https://${brand.domain}#business`,
              },
              areaServed: {
                "@type": "AdministrativeArea",
                name: data.name,
              },
            }),
          }}
        />
      </main>
    </div>
  );
}
