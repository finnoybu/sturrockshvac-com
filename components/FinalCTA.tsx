import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import PrimaryCTA from "@/components/PrimaryCTA";

import { finalCTA } from "@/lib/content";

export default function FinalCTA() {
  return (
    <section className="bg-linear-to-r from-accent-500 to-accent-600 text-white py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {finalCTA.title}
        </h2>

        <p className="text-lg md:text-xl mb-8 opacity-90">
          {finalCTA.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <PrimaryCTA
            href="/request-service"
            className="bg-primary-900 hover:bg-primary-800"
          >
            {finalCTA.buttonText}
          </PrimaryCTA>
        </div>
      </div>
    </section>
  );
}
