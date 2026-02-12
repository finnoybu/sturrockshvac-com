import { heroContent } from "@/lib/content";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-navy-800 to-navy-900 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {heroContent.title}
            </h1>
            <p className="text-lg md:text-xl text-navy-200">
              {heroContent.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg text-center"
              >
                {heroContent.primaryCTA}
              </a>
              <a
                href="tel:(555) 123-4567"
                className="bg-white hover:bg-navy-50 text-navy-900 font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg text-center"
              >
                {heroContent.secondaryCTA}
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-navy-700 rounded-2xl shadow-2xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-6xl bg-gradient-to-br from-orange-400 to-orange-600">
                ❄️
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
