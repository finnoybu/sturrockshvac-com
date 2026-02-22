import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { brands } from "@/lib/content";

export const dynamic = "force-static";

export const metadata = {
  title: "Brands We Service | Sturrocks HVAC Solutions",
  description:
    "See the HVAC brands we service and recommend for new installations and replacements throughout Fairfax and Loudoun, VA and Montgomery and Frederick, MD.",
};

export default function BrandsPage() {
  const sortedBrands = [...brands].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="min-h-screen bg-white border-t border-primary-200">
      <Header />

      <main className="container mx-auto px-4 pt-10 pb-20">
        {/* Section Title */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-0.5 w-20 md:w-40 2xl:w-60 bg-linear-to-r from-transparent via-primary-300 to-primary-300" />
          <h1 className="text-3xl md:text-4xl 2xl:text-5xl italic font-serif text-primary-900 whitespace-nowrap">
            Brands We Service
          </h1>
          <div className="h-0.5 w-20 md:w-40 2xl:w-60 bg-linear-to-l from-transparent via-primary-300 to-primary-300" />
        </div>

{/* Subtitle */}
<p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
  We service and repair equipment from most major HVAC manufacturers and recommend trusted brands we rely on for new installations and system replacements. Every recommendation is based on performance, efficiency, and long-term reliability.
</p>

{/* CTA */}
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

        {/* 5 x 4 Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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
                className="object-contain w-auto max-h-10 md:max-h-16 max-w-[85%] md:max-w-[75%]"
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
