"use client";

import Image from "next/image";
import TrustBar from "./TrustBar";
import ContactCTA from "@/components/ContactCTA";
import { getCurrentSeason } from "@/lib/season";

export default function HeroSection() {
  const season = getCurrentSeason();

  const heroImageMap: Record<string, string> = {
    spring: "/hero/spring_hero_2560x1320.png",
    summer: "/hero/sturrock_summer_hero_2560x1320.png",
    fall: "/hero/fall_hero_2560x1320.png",
    winter: "/hero/winter_hero_2560x1320.png",
  };

  const heroImage = heroImageMap[season];

  return (
    <section className="relative">
      <div className="relative w-full h-135 md:h-155 lg:h-160 xl:h-175 2xl:h-[85vh] overflow-hidden">
        <Image
          src={heroImage}
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
          <div className="max-w-screen-2xl mx-auto px-6 md:px-14 lg:px-33 pt-6 md:pt-10 lg:pt-12 2xl:pt-24">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-5xl 2xl:text-7xl font-serif text-primary-900 leading-tight">
                Heating & Cooling,
                <br />
                Precisely Done.
              </h1>

              <p className="mt-4 text-md md:text-lg 2xl:text-2xl text-gray-700">
                Serving Northern Virginia & Maryland with expert installation
                and repair.
              </p>

              <div className="mt-8">
                <ContactCTA>Contact Us Today</ContactCTA>
              </div>
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