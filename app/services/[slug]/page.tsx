import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services, brand } from "@/lib/content";
import Link from "next/link";
import Script from "next/script";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

type Service = (typeof services)[number];

/* =============================
   Metadata (SEO)
============================= */

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
      description:
        "The service you requested is not available. Explore HVAC repair, installation, and maintenance across Fairfax and Loudoun Counties, VA and Montgomery and Frederick Counties, MD.",
    };
  }

  const summary = (service.summary ?? `${service.title} HVAC service`).replace(
    /[.!?]$/,
    "",
  );

  const description = `${summary}. Serving Fairfax and Loudoun Counties, VA and Montgomery and Frederick Counties, MD.`;

  return {
    title: service.title,
    description,
  };
}

/* =============================
   Page Component
============================= */

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service: Service | undefined = services.find((s) => s.slug === slug);

  if (!service) return notFound();

  return (
    <div className="min-h-screen bg-primary-50 border-t border-primary-200">
      <main className="max-w-6xl mx-auto px-6 pt-10 pb-16">
        <div className="mb-6">
          <Link
            href="/services"
            className="text-sm text-gray-500 hover:text-accent-500 transition-colors"
          >
            ← Back to Services
          </Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-serif text-primary-900 mb-6">
          {service.title}
        </h1>

        {service.summary && (
          <p className="text-xl text-gray-700 mb-6">{service.summary}</p>
        )}

        <p className="text-gray-700 leading-relaxed mb-12">
          {service.description}
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {service.subservices?.length > 0 && (
            <section>
              <h2 className="text-3xl font-serif text-primary-900 mb-4">
                What We Offer
              </h2>
              <ul className="space-y-2 text-gray-700">
                {service.subservices.map((sub) => (
                  <li key={sub.key}>• {sub.name}</li>
                ))}
              </ul>
            </section>
          )}

          {service.commonRequests?.length > 0 && (
            <section>
              <h2 className="text-3xl font-serif text-primary-900 mb-4">
                Common Issues We Address
              </h2>
              <ul className="space-y-2 text-gray-700">
                {service.commonRequests.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-serif text-primary-900 mb-4">
            Our Approach
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We diagnose the root cause, explain your options clearly, and
            recommend solutions based on performance, efficiency, and long-term
            reliability — not quick fixes.
          </p>
        </section>

        <p className="text-sm text-gray-500 text-center mb-8">
          Serving Loudoun & Fairfax Counties in Virginia and Montgomery &
          Frederick Counties in Maryland.
        </p>

        <div className="text-center">
          <Link
            href={`/request-service?service=${service.slug}`}
            className="inline-block bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-md shadow-md transition-colors"
          >
            Request Service
          </Link>
        </div>

        {/* =============================
            Structured Data: Service
        ============================== */}
        <Script
          id={`service-schema-${service.slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "@id": `https://${brand.domain}/services/${service.slug}#service`,
              name: service.title,
              description: service.description,
              serviceType: service.title,
              provider: {
                "@type": "HVACBusiness",
                "@id": `https://${brand.domain}#business`,
              },
              areaServed: [
                { "@type": "AdministrativeArea", name: "Virginia" },
                { "@type": "AdministrativeArea", name: "Maryland" },
              ],
              url: `https://${brand.domain}/services/${service.slug}`,
            }),
          }}
        />
      </main>
    </div>
  );
}