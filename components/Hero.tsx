"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import TrustBar from "./TrustBar";

const heroImages = [
  "/hero/spring_hero_2560x1320.png",
  "/hero/sturrock_summer_hero_2560x1320.png",
  "/hero/fall_hero_2560x1320.png",
  "/hero/winter_hero_2560x1320.png",
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 10000);

    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative">
      <div className="relative w-full h-135 md:h-155 lg:h-160 xl:h-175 2xl:h-[85vh] overflow-hidden">
        <Image
          src={heroImages[index]}
          alt="Seasonal home exterior"
          fill
          priority
          className="object-cover object-[right_40%_top_75%]"
        />

        {/* subtle calibration gradients */}
        <div className="absolute inset-x-0 top-0 h-16 bg-linear-to-b from-black/8 via-black/6 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-[55%] bg-linear-to-r from-black/20 via-black/10 to-transparent pointer-events-none" />

        {/* HEADLINE + CTA overlay */}
        <div className="absolute inset-0 z-10">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-14 lg:px-33 pt-10 md:pt-16 2xl:pt-24">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl font-serif text-primary-900 leading-tight">
                Heating & Cooling,
                <br />
                Precisely Done.
              </h1>

              <p className="mt-6 text-lg text-gray-700">
                Serving Northern Virginia & Maryland with expert installation
                and repair.
              </p>

              <button className="mt-8 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-md shadow-md transition-colors">
                Contact Us Today
              </button>
            </div>
          </div>
        </div>

        {/* TRUST BAR anchored symmetrically to lawn band */}
        <div className="absolute inset-x-0 bottom-0 z-20 flex justify-center">
          <div className="mb-1">
            <TrustBar />
          </div>
        </div>
      </div>
    </section>
  );
}