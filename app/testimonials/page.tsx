import type { Metadata } from "next";
import Link from "next/link";
import { brand, companyInfo, testimonials } from "@/lib/content";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description: `Read ${testimonials.length}+ customer reviews for ${brand.marketingName}. First-party reviews from Yelp, Angi, Nextdoor, and Yahoo covering HVAC service across Loudoun, Fairfax, and Frederick counties.`,
  alternates: {
    canonical: "/testimonials",
  },
};

function StarRow({ count }: { count: number }) {
  return (
    <div
      className="flex gap-0.5 text-accent-500"
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className="h-4 w-4"
          fill={i < count ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <path d="M10 1.5l2.6 5.3 5.9.85-4.25 4.14 1 5.85L10 14.8l-5.25 2.76 1-5.85L1.5 7.65l5.9-.85L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  const totalCount = testimonials.length;
  const avgRating =
    totalCount > 0
      ? (
          testimonials.reduce((sum, t) => sum + t.rating, 0) / totalCount
        ).toFixed(1)
      : "0.0";

  // Count reviews per platform for the source strip.
  const sourceCounts = testimonials.reduce<Record<string, number>>(
    (acc, t) => {
      if (t.source) {
        acc[t.source.name] = (acc[t.source.name] ?? 0) + 1;
      }
      return acc;
    },
    {},
  );

  return (
    <div className="min-h-screen bg-primary-50 border-t border-primary-200">
      <main className="max-w-5xl mx-auto px-6 pt-10 pb-16">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-accent-500 transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-primary-900">Customer Reviews</span>
        </nav>

        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-0.5 w-16 md:w-32 bg-linear-to-r from-transparent via-primary-300 to-primary-300" />
          <h1 className="text-3xl md:text-4xl italic font-serif text-primary-900 whitespace-nowrap">
            Customer Reviews
          </h1>
          <div className="h-0.5 w-16 md:w-32 bg-linear-to-l from-transparent via-primary-300 to-primary-300" />
        </div>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
          Real reviews from homeowners and businesses we&apos;ve served across
          Loudoun, Fairfax, and Frederick counties, collected from the review
          platforms where our customers posted them.
        </p>

        {/* Rating summary */}
        <div className="bg-white border border-primary-200 rounded-xl px-8 py-6 mb-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <StarRow count={5} />
            <span className="text-2xl font-serif text-primary-900">
              {avgRating}
            </span>
          </div>
          <p className="text-sm text-gray-600">
            Average rating across {totalCount} reviews
            {Object.keys(sourceCounts).length > 0 && (
              <>
                {" "}&middot;{" "}
                {Object.entries(sourceCounts)
                  .map(([name, count]) => `${count} from ${name}`)
                  .join(", ")}
              </>
            )}
          </p>
        </div>

        {/* Call to action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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

        {/* All reviews */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="bg-white border border-primary-200 rounded-xl p-6 shadow-[0_6px_18px_rgba(0,0,0,0.05)] flex flex-col"
            >
              <StarRow count={t.rating} />
              {t.serviceType && (
                <p className="mt-3 text-xs uppercase tracking-wider font-semibold text-accent-600">
                  {t.serviceType}
                </p>
              )}
              <blockquote className="mt-3 text-gray-700 leading-relaxed italic grow">
                &ldquo;{t.body}&rdquo;
              </blockquote>
              <footer className="mt-4 text-sm text-primary-900">
                <p className="font-semibold">{t.author}</p>
                <p className="text-gray-500">{t.location}</p>
                {t.source && (
                  <p className="text-xs text-gray-400 mt-1">
                    via{" "}
                    {t.source.url ? (
                      <a
                        href={t.source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-accent-600 transition-colors"
                      >
                        {t.source.name}
                      </a>
                    ) : (
                      t.source.name
                    )}
                    {t.datePublished && (
                      <>
                        {" "}&middot;{" "}
                        <time dateTime={t.datePublished}>
                          {new Date(t.datePublished).toLocaleDateString(
                            "en-US",
                            { year: "numeric", month: "short" },
                          )}
                        </time>
                      </>
                    )}
                  </p>
                )}
              </footer>
            </article>
          ))}
        </div>

        {/* Closing CTA */}
        <section className="bg-primary-900 text-white rounded-xl px-8 py-10 text-center mt-14">
          <h2 className="text-3xl font-serif mb-3">
            Ready to see why our customers keep coming back?
          </h2>
          <p className="mb-6 text-primary-100">
            Call us directly or request service online &mdash; we&apos;ll get
            back to you fast.
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
      </main>
    </div>
  );
}
