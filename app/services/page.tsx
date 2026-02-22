import Header from "@/components/Header";
import Link from "next/link";
import { services } from "@/lib/content";

export default function ServicesDirectory() {
  return (
    <div className="min-h-screen bg-primary-50 border-t border-primary-200">
      <Header />

      <main className="container mx-auto px-4 pt-10 pb-20">

        {/* Section Title */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-0.5 w-20 md:w-40 2xl:w-60 bg-linear-to-r from-transparent via-primary-300 to-primary-300" />
          <h1 className="text-3xl md:text-4xl 2xl:text-5xl italic font-serif text-primary-900 whitespace-nowrap">
            Our Services
          </h1>
          <div className="h-0.5 w-20 md:w-40 2xl:w-60 bg-linear-to-l from-transparent via-primary-300 to-primary-300" />
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {services.map((service) => (
            <div
              key={service.slug}
              className="
                bg-white
                rounded-xl
                border border-primary-200
                shadow-[0_6px_18px_rgba(0,0,0,0.05)]
                px-6 py-6
                transition duration-200
                hover:shadow-[0_12px_26px_rgba(0,0,0,0.10)]
              "
            >
              <h2 className="text-xl md:text-2xl font-serif text-primary-900 mb-4">
                {service.title}
              </h2>

              {service.subservices?.length > 0 && (
                <ul className="grid md:grid-cols-2 gap-2 text-gray-700 mb-6">
                  {service.subservices.map((sub) => (
                    <li key={sub.key}>• {sub.name}</li>
                  ))}
                </ul>
              )}

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