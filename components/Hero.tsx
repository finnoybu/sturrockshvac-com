import { heroContent, companyInfo } from "@/lib/content";

export default function Hero() {
  return (
    <section className="bg-primary-50 text-primary-900">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {heroContent.title}
            </h1>

            <p className="text-lg md:text-xl text-primary-700">
              {heroContent.subtitle}
            </p>

            <div className="flex flex-col gap-4 max-w-sm">
              <a
                href="#contact"
                className="bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg text-center"
              >
                {heroContent.primaryCTA}
              </a>

              <a
                href={`tel:${companyInfo.phoneE164}`}
                className="border-2 border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white font-semibold px-8 py-4 rounded-lg transition-colors text-center"
              >
                {heroContent.secondaryCTA}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-white rounded-2xl shadow-xl border border-primary-100 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-6xl text-primary-400">
                ❄️
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
