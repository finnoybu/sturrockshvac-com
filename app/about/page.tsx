import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { brand, companyInfo } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Andy",
  description:
    "Andy Sturrock, the NATE-certified owner of Sturrock's HVAC Solutions, has been keeping Loudoun County homes comfortable for 15+ years. Licensed in VA and MD, A+ rated with the BBB, and based in Hillsboro.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-primary-50 border-t border-primary-200">
      <main className="max-w-5xl mx-auto px-6 pt-10 pb-16">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-accent-500 transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-primary-900">About Andy</span>
        </nav>

        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-0.5 w-16 md:w-32 bg-linear-to-r from-transparent via-primary-300 to-primary-300" />
          <h1 className="text-3xl md:text-4xl italic font-serif text-primary-900 whitespace-nowrap">
            About Andy
          </h1>
          <div className="h-0.5 w-16 md:w-32 bg-linear-to-l from-transparent via-primary-300 to-primary-300" />
        </div>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          The technician, the owner, and the neighbor behind Sturrock&apos;s
          HVAC Solutions.
        </p>

        {/* Photo + bio */}
        <div className="grid md:grid-cols-[280px_1fr] gap-10 mb-14 items-start">
          <div className="mx-auto md:mx-0">
            <div className="w-64 aspect-4/5 rounded-xl border border-primary-200 shadow-sm overflow-hidden bg-primary-50">
              <Image
                src="/images/andrew_sturrock.png"
                alt="Andy Sturrock, owner of Sturrock's HVAC Solutions"
                width={458}
                height={619}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs text-gray-500 text-center mt-2 max-w-[256px]">
              Andy Sturrock
              <br />
              Owner, Sturrock&apos;s HVAC Solutions
            </p>
          </div>

          <div className="text-gray-700 leading-relaxed space-y-5">
            <p>
              Andy Sturrock has been keeping homes in Loudoun County
              comfortable for more than fifteen years. What started as one
              technician with a van and a commitment to doing right by his
              neighbors has grown into Sturrock&apos;s HVAC Solutions, a small
              family-owned business now operating out of Hillsboro, Virginia,
              and serving customers across Lovettsville, Purcellville,
              Waterford, Round Hill, and the surrounding western Loudoun
              communities.
            </p>
            <p>
              Andy is a fully licensed HVAC contractor in both Virginia and
              Maryland, holding credentials from the Virginia Department of
              Professional and Occupational Regulation and the Maryland
              Department of Labor, Licensing and Regulation. His expertise
              covers the full range of residential heating and cooling work
              &mdash; central air conditioning installation, service, and
              repair; heat pumps; furnaces and forced-air systems; thermostats;
              humidifiers and air cleaners; ducts and vents &mdash; along with
              related home comfort needs like water heaters and sump pumps.
            </p>
            <p>
              What sets Andy apart isn&apos;t just the license numbers on the
              truck. It&apos;s the way he works. He shows up when he says he
              will. He explains what&apos;s actually wrong, in plain language,
              and tells you honestly whether a repair will do the job or
              whether it&apos;s time for a new unit. He&apos;ll squeeze you in
              on a Sunday when your AC goes out in August. And he charges a
              fair price whether it&apos;s your first visit or your tenth.
            </p>
            <p>
              The A+ rating with the Better Business Bureau and fifteen years
              of repeat customers tell the rest of the story. In a business
              where trust is everything, Andy has earned his by treating every
              home like it&apos;s a neighbor&apos;s &mdash; because in western
              Loudoun, it usually is.
            </p>
          </div>
        </div>

        {/* Credentials / trust bar */}
        <section className="bg-white border border-primary-200 rounded-xl px-6 py-6 mb-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-gray-700">
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-accent-600 mb-1">
                Virginia License
              </p>
              <p className="font-semibold text-primary-900">
                DPOR #{brand.licenses.VA.number}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-accent-600 mb-1">
                Maryland License
              </p>
              <p className="font-semibold text-primary-900">
                HVACR #{brand.licenses.MD.number}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-accent-600 mb-1">
                BBB Rating
              </p>
              <p className="font-semibold text-primary-900">A+ Accredited</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-accent-600 mb-1">
                Experience
              </p>
              <p className="font-semibold text-primary-900">
                15+ years in the area
              </p>
            </div>
          </div>
        </section>

        {/* Internal link block */}
        <section className="mb-14 text-center">
          <p className="text-gray-700">
            See what <Link href="/testimonials" className="text-accent-600 hover:text-accent-700 font-semibold transition-colors">Andy&apos;s customers say</Link>,
            browse our <Link href="/services" className="text-accent-600 hover:text-accent-700 font-semibold transition-colors">services</Link>,
            or find your town in our{" "}
            <Link href="/service-areas" className="text-accent-600 hover:text-accent-700 font-semibold transition-colors">service areas</Link>.
          </p>
        </section>

        {/* Closing CTA */}
        <section className="bg-primary-900 text-white rounded-xl px-8 py-10 text-center">
          <h2 className="text-3xl font-serif mb-3">Work with Andy directly.</h2>
          <p className="mb-6 text-primary-100">
            Give Andy a call &mdash; or request service online and he&apos;ll
            get back to you fast.
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

        {/* Structured Data: Person + AboutPage */}
        <Script
          id="about-andy-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "AboutPage",
                  "@id": `https://${brand.domain}/about#page`,
                  url: `https://${brand.domain}/about`,
                  name: "About Andy Sturrock",
                  isPartOf: {
                    "@id": `https://${brand.domain}#business`,
                  },
                  mainEntity: {
                    "@id": `https://${brand.domain}/about#andy`,
                  },
                },
                {
                  "@type": "Person",
                  "@id": `https://${brand.domain}/about#andy`,
                  name: "Andy Sturrock",
                  jobTitle: "Owner & Lead HVAC Technician",
                  worksFor: {
                    "@type": "HVACBusiness",
                    "@id": `https://${brand.domain}#business`,
                  },
                  hasCredential: [
                    {
                      "@type": "EducationalOccupationalCredential",
                      name: brand.licenses.VA.label,
                      identifier: brand.licenses.VA.number,
                      recognizedBy: {
                        "@type": "Organization",
                        name: "Virginia Department of Professional and Occupational Regulation",
                      },
                    },
                    {
                      "@type": "EducationalOccupationalCredential",
                      name: brand.licenses.MD.label,
                      identifier: brand.licenses.MD.number,
                      recognizedBy: {
                        "@type": "Organization",
                        name: "Maryland Department of Labor, Licensing and Regulation",
                      },
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </main>
    </div>
  );
}
