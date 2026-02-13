import Link from "next/link";
import { companyInfo, services } from "@/lib/content";

export const dynamic = "force-static";

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-primary-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <p className="text-primary-200 text-sm uppercase tracking-widest mb-3">Services</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Heating & Cooling Services</h1>
            <p className="text-primary-200">
              {companyInfo.name} provides full-service HVAC solutions for homes and businesses.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <article
                key={service.id}
                className="border border-primary-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h2 className="text-xl font-bold text-primary-900 mb-2">{service.title}</h2>
                <p className="text-primary-600 leading-relaxed">{service.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 font-semibold transition-colors"
            >
              Schedule service with {companyInfo.name} →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
