import Header from "@/components/Header";
import Link from "next/link";
import { services } from "@/lib/content";

export default function ServicesDirectory() {
  return (
    <div className="min-h-screen bg-primary-50">
      <Header />

      <main className="max-w-6xl mx-auto px-6 py-16">

        <h1 className="text-4xl md:text-5xl font-serif text-primary-900 mb-10">
          Our Services
        </h1>

        <div className="space-y-10">
          {services.map((service) => (
            <div
              key={service.slug}
              className="bg-white rounded-xl shadow-md p-8"
            >
              <h2 className="text-2xl font-serif text-primary-900 mb-4">
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
                className="text-accent-600 hover:text-accent-700 font-semibold"
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