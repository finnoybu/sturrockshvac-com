import Image from "next/image";
import { getSeasonalHero } from "@/lib/season";
import TrustBar from "./TrustBar";
import ServicesGrid from "./ServicesGrid";

export default function HeroSection() {
  const season = getSeasonalHero();
  const imageSrc = `/hero/${season}.jpg`;

  return (
    <section className="relative isolate overflow-hidden">

      {/* Background Image */}
      <Image
        src={imageSrc}
        alt="Seasonal home exterior"
        fill
        priority
        className="object-cover object-right-center brightness-[0.98] saturate-[0.95]"
      />

      {/* Top calibration (under header shadow) */}
      <div className="absolute inset-x-0 top-0 h-20 bg-black/10 pointer-events-none" />

      {/* Bottom calibration (toward services edge) */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-white/60 pointer-events-none" />

      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">

        {/* HERO TEXT BLOCK */}
        <div className="grid lg:grid-cols-2 gap-12 pt-28 md:pt-36 lg:pt-44 pb-20">

          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary-900 leading-tight">
              Heating & Cooling,
              <br />
              Precisely Done.
            </h1>

            <p className="mt-6 text-lg text-gray-700">
              Serving Northern Virginia & Maryland with expert installation and repair.
            </p>

            <button className="mt-8 bg-accent-500 text-white px-6 py-3 rounded-md shadow-md hover:opacity-90 transition">
              Contact Us Today
            </button>
          </div>

          {/* Empty column - image lives in background */}
          <div />
        </div>

        {/* TRUST BAR */}
        <div className="pb-16">
          <TrustBar />
        </div>

        {/* SERVICES */}
        <div className="pb-32">
          <h2 className="text-center text-3xl md:text-4xl font-serif text-primary-900 mb-12">
            Our Services
          </h2>
          <ServicesGrid />
        </div>

      </div>
    </section>
  );
}