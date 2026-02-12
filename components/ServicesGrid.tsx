import Link from "next/link";
import { services } from "@/lib/content";

export default function ServicesGrid() {
  // Sort services by demand (ascending)
  const sortedServices = [...services].sort((a, b) => a.demand - b.demand);

  return (
    <section className="bg-navy-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-navy-600 max-w-2xl mx-auto">
            Comprehensive HVAC solutions for all your heating and cooling needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {sortedServices.map((service) => (
            <article
              key={service.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border border-navy-100"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">
                {service.title}
              </h3>
              <p className="text-navy-600 leading-relaxed">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold text-lg transition-colors"
          >
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
