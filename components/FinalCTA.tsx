import { finalCTA } from "@/lib/content";

export default function FinalCTA() {
  return (
    <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {finalCTA.title}
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          {finalCTA.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="bg-white hover:bg-navy-50 text-orange-600 font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg"
          >
            {finalCTA.buttonText}
          </a>
          <a
            href={`tel:${finalCTA.phone}`}
            className="bg-navy-900 hover:bg-navy-800 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg flex items-center gap-2"
          >
            <span className="text-xl">📞</span>
            <span>{finalCTA.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
