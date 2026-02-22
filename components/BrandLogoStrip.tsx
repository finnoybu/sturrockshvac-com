import Image from "next/image";
import Link from "next/link";
import { brands, type Brand } from "@/lib/content";

export default function BrandLogoStrip() {
  const primaryBrands: Brand[] = brands.filter(
    (b: Brand) => b.tier === "primary",
  );

  return (
    <section className="bg-white border-t border-primary-200 pt-10 pb-14 md:pt-12 md:pb-20">
      <div className="container mx-auto px-4">

        {/* Section Title */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-0.5 w-20 md:w-40 2xl:w-60 bg-linear-to-r from-transparent via-primary-300 to-primary-300" />
          <h2 className="text-3xl md:text-4xl 2xl:text-5xl italic font-serif text-primary-900 whitespace-nowrap">
            <span className="md:hidden">Trusted Brands</span>
            <span className="hidden md:inline">Trusted Brands We Service</span>
          </h2>
          <div className="h-0.5 w-20 md:w-40 2xl:w-60 bg-linear-to-l from-transparent via-primary-300 to-primary-300" />
        </div>

        {/* Subtitle */}
        <p className="text-center text-gray-600 max-w-xl mx-auto mb-10">
          We install, repair, and maintain equipment from leading HVAC manufacturers.
        </p>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-14 gap-x-10 items-center">
          {primaryBrands.map((brand: Brand) => (
            <a
              key={brand.name}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center h-16 md:h-24 transition duration-300 hover:scale-[1.03]"
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

        {/* View All */}
        <div className="text-center mt-8">
          <Link
            href="/brands"
            className="text-accent-600 hover:text-accent-700 font-semibold transition-colors"
          >
            View All Brands →
          </Link>
        </div>

      </div>
    </section>
  );
}