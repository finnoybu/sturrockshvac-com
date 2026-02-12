import { brandLogos } from "@/lib/content";

export default function BrandLogoStrip() {
  return (
    <section className="bg-white py-12 border-y border-navy-100">
      <div className="container mx-auto px-4">
        <p className="text-center text-navy-600 font-medium mb-8">
          We service all major brands
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {brandLogos.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-24 h-12 md:w-32 md:h-16 bg-navy-50 rounded-lg p-4 hover:bg-navy-100 transition-colors"
            >
              <span className="text-navy-700 font-bold text-sm md:text-base text-center">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
