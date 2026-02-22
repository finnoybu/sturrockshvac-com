import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { brands } from "@/lib/content";

export const dynamic = "force-static";

export default function BrandsPage() {
  const sortedBrands = [...brands].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div className="min-h-screen bg-white border-t border-primary-200">
      <Header />

      <main className="container mx-auto px-4 pt-10 pb-20">

        {/* Section Title */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-0.5 w-20 md:w-40 2xl:w-60 bg-linear-to-r from-transparent via-primary-300 to-primary-300" />
          <h1 className="text-3xl md:text-4xl 2xl:text-5xl italic font-serif text-primary-900 whitespace-nowrap">
            Brands We Service
          </h1>
          <div className="h-0.5 w-20 md:w-40 2xl:w-60 bg-linear-to-l from-transparent via-primary-300 to-primary-300" />
        </div>

        {/* Subtitle */}
        <p className="text-center text-gray-600 max-w-xl mx-auto mb-16">
          Our technicians are experienced with equipment from all major HVAC manufacturers.
        </p>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {sortedBrands.map((brand) => (
            <a
              key={brand.name}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-primary-50
                rounded-xl
                border border-primary-200
                flex justify-center items-center
                h-20 md:h-24
                transition duration-200
                hover:border-accent-500
                hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)]
              "
            >
              <Image
                src={`/brands/${brand.file}`}
                alt={`${brand.name} logo`}
                width={200}
                height={80}
                className="object-contain w-auto max-h-10 md:max-h-16"
              />
            </a>
          ))}
        </div>

        {/* Back Link */}
        <div className="text-center mt-16">
          <Link
            href="/"
            className="text-accent-600 hover:text-accent-700 font-semibold transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

      </main>
    </div>
  );
}