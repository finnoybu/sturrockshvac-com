import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "HVAC Services",
  description:
    "Explore HVAC repair, installation, maintenance, heat pump, furnace, and air conditioning services from Sturrocks HVAC Solutions in Virginia and Maryland.",
};

export default function ServicesDirectory() {
  return (
    <div className="min-h-screen bg-primary-50 border-t border-primary-200">
      <main className="container mx-auto px-4 pt-10 pb-20">
        {/* Section Title */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-0.5 w-20 md:w-40 2xl:w-60 bg-linear-to-r from-transparent via-primary-300 to-primary-300" />
          <h1 className="text-3xl md:text-4xl 2xl:text-5xl italic font-serif text-primary-900 whitespace-nowrap">
            Our Services
          </h1>
          <div className="h-0.5 w-20 md:w-40 2xl:w-60 bg-linear-to-l from-transparent via-primary-300 to-primary-300" />
        </div>

        {/* Intro Paragraph */}
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
          We provide residential and commercial HVAC services throughout Loudoun
          and Fairfax counties in Virginia, as well as Montgomery and Frederick
          counties in Maryland. From seasonal maintenance to full system
          replacement, our team delivers reliable comfort solutions built for
          long-term performance.
        </p>

        <div className="text-center mb-14">
          <Link
            href="/request-service"
            className="
      bg-accent-500 hover:bg-accent-600
      text-white
      text-sm sm:text-base md:text-lg
      px-4 sm:px-5 md:px-6
      py-2 sm:py-2.5
      rounded-md
      shadow-md
      transition-colors
      inline-block
    "
          >
            Request Service
          </Link>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.slug}
              className="
                bg-white
                rounded-xl
                border border-primary-200
                shadow-[0_6px_18px_rgba(0,0,0,0.05)]
                px-7 py-7
                transition duration-200
                hover:shadow-[0_12px_26px_rgba(0,0,0,0.10)]
              "
            >
              {/* Title */}
              <h2 className="text-2xl font-serif text-primary-900 mb-3">
                {service.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 mb-5 leading-relaxed">
                {service.description}
              </p>

              {/* Common Calls */}
              {service.commonRequests && service.commonRequests.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm uppercase tracking-wide font-semibold text-primary-700 mb-2">
                    Common Calls
                  </h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    {service.commonRequests.slice(0, 4).map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Learn More */}
              <Link
                href={`/services/${service.slug}`}
                className="text-accent-600 hover:text-accent-700 font-semibold transition-colors"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
