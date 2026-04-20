import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/content";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "HVAC Services",
  description:
    "Explore HVAC repair, installation, maintenance, heat pump, furnace, and air conditioning services from Sturrock's HVAC Solutions in Virginia and Maryland.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesDirectory() {
  return (
    <div className="min-h-screen bg-primary-50 border-t border-primary-200">
      <main className="container mx-auto px-4 pt-10 pb-20">
        <SectionTitle as="h1">Our Services</SectionTitle>

        {/* Intro Paragraph */}
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
          We provide residential and commercial HVAC services throughout Loudoun
          and Fairfax counties in Virginia, as well as Frederick
          County in Maryland. From seasonal maintenance to full system
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
