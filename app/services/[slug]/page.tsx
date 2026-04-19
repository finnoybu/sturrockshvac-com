import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services, brand } from "@/lib/content";
import { serviceDepth } from "@/lib/service-depth";
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
        "The service you requested is not available. Explore HVAC repair, installation, and maintenance across Fairfax and Loudoun Counties, VA and Frederick County, MD.",
    };
  }

  const summary = (service.summary ?? `${service.title} HVAC service`).replace(
    /[.!?]$/,
    "",
  );

  const description = `${summary}. Serving Fairfax and Loudoun Counties, VA and Frederick County, MD.`;

  return {
    title: service.title,
    description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

/* =============================
   Page Component
============================= */

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service: Service | undefined = services.find((s) => s.slug === slug);

  if (!service) return notFound();

  const depth = serviceDepth[service.slug];

  return (
    <div className="min-h-screen bg-primary-50 border-t border-primary-200">
      <main className="max-w-4xl mx-auto px-6 pt-10 pb-16">
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

        <p className="text-gray-700 leading-relaxed mb-10">
          {service.description}
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-14">
          <a
            href="tel:+15712587983"
            className="inline-block text-center bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-md shadow-md transition-colors font-semibold"
          >
            Call (571) 258-7983
          </a>
          <Link
            href={`/request-service?service=${service.slug}`}
            className="inline-block text-center bg-white hover:bg-primary-100 border border-primary-300 text-primary-900 px-6 py-3 rounded-md transition-colors font-semibold"
          >
            Request Service Online
          </Link>
        </div>

        {/* What we offer + common issues (two columns) */}
        <div className="grid md:grid-cols-2 gap-12 mb-14">
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

        {/* Symptoms → likely causes */}
        {depth && depth.symptoms.length > 0 && (
          <section className="mb-14">
            <h2 className="text-3xl font-serif text-primary-900 mb-4">
              Symptoms &amp; Likely Causes
            </h2>
            <p className="text-gray-600 mb-6">
              If you&apos;re seeing one of these, here&apos;s what it usually
              means. A proper diagnosis still requires hands-on testing, but
              this gives you a sense of what you&apos;re dealing with before
              we arrive.
            </p>
            <div className="space-y-6">
              {depth.symptoms.map((s, i) => (
                <div
                  key={i}
                  className="bg-white border border-primary-200 rounded-lg p-5"
                >
                  <h3 className="font-semibold text-primary-900 mb-2">
                    {s.symptom}
                  </h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    {s.likelyCauses.map((cause, j) => (
                      <li key={j}>• {cause}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Our process */}
        {depth && depth.process.length > 0 && (
          <section className="mb-14">
            <h2 className="text-3xl font-serif text-primary-900 mb-4">
              Our Process
            </h2>
            <ol className="space-y-5">
              {depth.process.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-accent-500 text-white font-semibold flex items-center justify-center text-sm">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-primary-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* Pricing approach */}
        {depth && (
          <section className="mb-14">
            <h2 className="text-3xl font-serif text-primary-900 mb-4">
              What to Expect on Pricing
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {depth.pricingApproach}
            </p>
          </section>
        )}

        {/* FAQ */}
        {depth && depth.faq.length > 0 && (
          <section className="mb-14">
            <h2 className="text-3xl font-serif text-primary-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {depth.faq.map((q, i) => (
                <details
                  key={i}
                  className="bg-white border border-primary-200 rounded-lg group"
                >
                  <summary className="cursor-pointer list-none px-5 py-4 font-semibold text-primary-900 flex items-center justify-between hover:bg-primary-50 transition-colors">
                    <span>{q.question}</span>
                    <span
                      aria-hidden="true"
                      className="ml-4 text-accent-600 transition-transform group-open:rotate-45 text-xl leading-none"
                    >
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-gray-700 leading-relaxed">
                    {q.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Our approach (fallback / retained) */}
        <section className="mb-14">
          <h2 className="text-3xl font-serif text-primary-900 mb-4">
            Our Approach
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We diagnose the root cause, explain your options clearly, and
            recommend solutions based on performance, efficiency, and long-term
            reliability — not quick fixes.
          </p>
        </section>

        {/* Closing CTA */}
        <section className="bg-primary-900 text-white rounded-xl px-8 py-10 text-center">
          <h2 className="text-3xl font-serif mb-3">
            Ready for {service.title} Service?
          </h2>
          <p className="mb-6 text-primary-100">
            Call us directly or request service online — we&apos;ll get back to
            you fast.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+15712587983"
              className="inline-block bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-md shadow-md transition-colors font-semibold"
            >
              Call (571) 258-7983
            </a>
            <Link
              href={`/request-service?service=${service.slug}`}
              className="inline-block bg-white hover:bg-primary-100 text-primary-900 px-6 py-3 rounded-md transition-colors font-semibold"
            >
              Request Service
            </Link>
          </div>
        </section>

        <p className="text-sm text-gray-500 text-center mt-10">
          Serving Loudoun &amp; Fairfax Counties in Virginia and Frederick
          County in Maryland.
        </p>

        {/* Structured Data: Service */}
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

        {/* Structured Data: FAQPage (rich-result eligible) */}
        {depth && depth.faq.length > 0 && (
          <Script
            id={`faq-schema-${service.slug}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: depth.faq.map((q) => ({
                  "@type": "Question",
                  name: q.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: q.answer,
                  },
                })),
              }),
            }}
          />
        )}
      </main>
    </div>
  );
}
