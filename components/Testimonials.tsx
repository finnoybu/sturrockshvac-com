import Link from "next/link";
import { testimonials } from "@/lib/content";
import SectionTitle from "./SectionTitle";

// Homepage testimonials section. Shows the 3 most-recent reviews (array is
// kept in reverse-chronological order in lib/content.ts) with a link to
// the dedicated /testimonials page for all reviews.
// Returns null when the testimonials array is empty so we never display a
// thin/empty section.

const HOMEPAGE_LIMIT = 3;

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

export default function Testimonials() {
  if (testimonials.length === 0) return null;

  const featured = testimonials.slice(0, HOMEPAGE_LIMIT);
  const hasMore = testimonials.length > HOMEPAGE_LIMIT;

  return (
    <section className="bg-primary-50 border-t border-primary-200 py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <SectionTitle
          size="md"
          wrapperClassName="flex items-center justify-center gap-3 mb-4"
        >
          What Our Customers Say
        </SectionTitle>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Real feedback from homeowners and businesses across Loudoun, Fairfax,
          and Frederick counties.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((t, i) => (
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

        {hasMore && (
          <div className="text-center mt-10">
            <Link
              href="/testimonials"
              className="inline-block text-accent-600 hover:text-accent-700 font-semibold transition-colors"
            >
              Read all {testimonials.length} reviews &rarr;
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
