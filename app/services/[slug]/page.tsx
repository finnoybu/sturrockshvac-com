import { notFound } from "next/navigation";
import { services } from "@/lib/content";
import Header from "@/components/Header";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

type Service = typeof services[number];

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  const service: Service | undefined = services.find(
    (s) => s.slug === slug
  );

  if (!service) return notFound();

  return (
    <div className="min-h-screen bg-primary-50">
      <Header />

      <main className="max-w-6xl mx-auto px-6 py-16">

        {/* Service Title */}
        <h1 className="text-4xl md:text-5xl font-serif text-primary-900 mb-6">
          {service.title}
        </h1>

        {/* Long Description */}
        <p className="text-lg text-gray-700 mb-12">
          {service.description}
        </p>

        {/* Subservices */}
        {service.subservices?.length > 0 && (
          <section className="space-y-10 mb-16">
            {service.subservices.map((sub) => (
              <div key={sub.key}>
                <h2 className="text-2xl font-serif text-primary-900 mb-3">
                  {sub.name}
                </h2>
                <p className="text-gray-700">
                  {sub.description}
                </p>
              </div>
            ))}
          </section>
        )}

        {/* CTA */}
        <div className="text-center">
          <Link
            href={`/request-service?service=${service.slug}`}
            className="inline-block bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-4 rounded-md shadow-md transition-colors"
          >
            {service.ctaText}
          </Link>
        </div>

      </main>
    </div>
  );
}