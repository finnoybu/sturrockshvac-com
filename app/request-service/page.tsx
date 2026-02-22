"use client";

import Header from "@/components/Header";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { services } from "@/lib/content";

type Service = typeof services[number];

export default function RequestServicePage() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");

  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedServiceType, setSelectedServiceType] = useState<string>("");

  // Auto-select from URL
  useEffect(() => {
    if (serviceParam) {
      setSelectedService(serviceParam);
      setSelectedServiceType("");
    }
  }, [serviceParam]);

  const selectedServiceObject: Service | undefined = services.find(
    (s) => s.slug === selectedService
  );

  return (
    <div className="min-h-screen bg-primary-50 border-t border-primary-200">
      <Header />

      <main className="container mx-auto px-4 pt-10 pb-20">

        {/* Section Title */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-0.5 w-20 md:w-40 2xl:w-60 bg-linear-to-r from-transparent via-primary-300 to-primary-300" />
          <h1 className="text-3xl md:text-4xl 2xl:text-5xl italic font-serif text-primary-900 whitespace-nowrap">
            Request Service
          </h1>
          <div className="h-0.5 w-20 md:w-40 2xl:w-60 bg-linear-to-l from-transparent via-primary-300 to-primary-300" />
        </div>

        <p className="text-center text-gray-700 max-w-xl mx-auto mb-12">
          Have questions or ready to schedule? Contact us today.
        </p>

        {/* Call Block */}
        <div className="
          bg-white
          rounded-xl
          border border-primary-200
          shadow-[0_6px_18px_rgba(0,0,0,0.05)]
          p-8
          text-center
          mb-12
        ">
          <h2 className="text-xl md:text-2xl font-serif text-primary-900 mb-4">
            Call for Fastest Service
          </h2>

          <p className="text-gray-700 mb-6">
            Call us directly to discuss your heating and cooling needs.
          </p>

          <a
            href="tel:+15712587983"
            className="inline-block bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-md shadow-md transition-colors"
          >
            (571) 258-7983
          </a>

          <p className="text-sm text-gray-500 mt-4">
            Call now for quick scheduling and service estimates.
          </p>
        </div>

        {/* Service Request Form */}
        <div className="
          bg-white
          rounded-xl
          border border-primary-200
          shadow-[0_6px_18px_rgba(0,0,0,0.05)]
          p-8
        ">
          <h2 className="text-xl md:text-2xl font-serif text-primary-900 mb-6">
            Service Request Form
          </h2>

          <form className="space-y-6">

            {/* Full Name */}
            <div>
              <label className="block font-semibold text-primary-900 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                required
                className="w-full border border-primary-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-400"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block font-semibold text-primary-900 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                className="w-full border border-primary-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-semibold text-primary-900 mb-2">
                Email (optional)
              </label>
              <input
                type="email"
                className="w-full border border-primary-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-400"
              />
            </div>

            {/* Service Needed */}
            <div>
              <label className="block font-semibold text-primary-900 mb-2">
                Service Needed *
              </label>

              <select
                value={selectedService}
                onChange={(e) => {
                  setSelectedService(e.target.value);
                  setSelectedServiceType("");
                }}
                required
                className="w-full border border-primary-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-400"
              >
                <option value="">-- Select a service --</option>

                {services.map((service) => (
                  <option key={service.slug} value={service.slug}>
                    {service.title}
                  </option>
                ))}
              </select>

              {serviceParam && (
                <p className="text-sm text-accent-600 mt-2">
                  Service preselected from previous page.
                </p>
              )}
            </div>

            {/* Service Type */}
            {selectedServiceObject &&
              selectedServiceObject.subservices &&
              selectedServiceObject.subservices.length > 0 && (
                <div>
                  <label className="block font-semibold text-primary-900 mb-2">
                    Type of Service Needed *
                  </label>

                  <select
                    value={selectedServiceType}
                    onChange={(e) => setSelectedServiceType(e.target.value)}
                    required
                    className="w-full border border-primary-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-400"
                  >
                    <option value="">-- Select service type --</option>

                    {selectedServiceObject.subservices.map((sub) => (
                      <option key={sub.key} value={sub.key}>
                        {sub.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

            {/* Details */}
            <div>
              <label className="block font-semibold text-primary-900 mb-2">
                Details About Your Request *
              </label>
              <textarea
                rows={4}
                required
                className="w-full border border-primary-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-400"
                placeholder="Tell us what you need..."
              />
            </div>

            {/* Submit */}
            <div className="pt-4 text-center">
              <button
                type="submit"
                className="bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-3 rounded-md shadow-md transition-colors"
              >
                Send Request
              </button>
            </div>

          </form>
        </div>

      </main>
    </div>
  );
}