"use client";

import { useEffect, useState } from "react";

const PHRASES = [
  "Licensed & Insured",
  "NATE-Certified Technicians",
  "Serving Since 2008",
] as const;

const DWELL_MS = 3500;

export default function TrustBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % PHRASES.length);
    }, DWELL_MS);

    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="w-screen relative left-1/2 -ml-[50vw]">

      {/* Top dark HR (primary-900) */}
      <div
        className="
          h-px
          bg-[linear-gradient(to_right,transparent_0%,rgba(28,48,82,0.65)_25%,rgba(28,48,82,0.65)_75%,transparent_100%)]
          md:bg-[linear-gradient(to_right,transparent_20%,rgba(28,48,82,0.65)_30%,rgba(28,48,82,0.65)_70%,transparent_80%)]
          lg:bg-[linear-gradient(to_right,transparent_5%,rgba(28,48,82,0.65)_20%,rgba(28,48,82,0.65)_80%,transparent_95%)]
        "
      />

      {/* Top light HR (primary-200) */}
      <div
        className="
          h-px
          bg-[linear-gradient(to_right,transparent_0%,rgba(169,195,224,0.6)_25%,rgba(169,195,224,0.6)_75%,transparent_100%)]
          md:bg-[linear-gradient(to_right,transparent_20%,rgba(169,195,224,0.6)_30%,rgba(169,195,224,0.6)_70%,transparent_80%)]
          lg:bg-[linear-gradient(to_right,transparent_5%,rgba(169,195,224,0.6)_20%,rgba(169,195,224,0.6)_80%,transparent_95%)]
        "
      />

      {/* Dark translucent band (primary-900 softened) */}
      <div
        className="
          bg-[linear-gradient(to_right,transparent_10%,rgba(28,48,82,0.45)_35%,rgba(28,48,82,0.45)_65%,transparent_90%)]
          md:bg-[linear-gradient(to_right,transparent_30%,rgba(28,48,82,0.45)_40%,rgba(28,48,82,0.45)_60%,transparent_70%)]
          lg:bg-[linear-gradient(to_right,transparent_15%,rgba(28,48,82,0.45)_30%,rgba(28,48,82,0.45)_70%,transparent_85%)]
          py-2 lg:py-2
        "
      >
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 2xl:px-24 flex justify-center">

          {/* MOBILE + MID (rotating single line) */}
          <div className="lg:hidden text-center uppercase text-xs font-medium tracking-normal text-white">
            <span style={{ display: "inline-block", minHeight: "1.25rem" }}>
              {PHRASES[index]}
            </span>
          </div>

          {/* DESKTOP (inline with wrapped bullet logic) */}
          <div className="hidden lg:flex flex-row justify-center items-center gap-4 text-base font-medium tracking-wide text-white uppercase">

            {/* Outer left blue bullet */}
            <span className="h-2 w-2 rounded-full bg-primary-900" />
            <span>Licensed & Insured</span>

            {/* Rust bullet before primary */}
            <span className="h-2 w-2 rounded-full bg-accent-500" />
            <span>NATE-Certified Technicians</span>

            {/* Rust bullet after primary */}
            <span className="h-2 w-2 rounded-full bg-accent-500" />
            <span>Serving Since 2008</span>

            {/* Outer right blue bullet */}
            <span className="h-2 w-2 rounded-full bg-primary-900" />

          </div>
        </div>
      </div>

      {/* Bottom light HR (primary-200) */}
      <div
        className="
          h-px
          bg-[linear-gradient(to_right,transparent_0%,rgba(169,195,224,0.6)_25%,rgba(169,195,224,0.6)_75%,transparent_100%)]
          md:bg-[linear-gradient(to_right,transparent_20%,rgba(169,195,224,0.6)_30%,rgba(169,195,224,0.6)_70%,transparent_80%)]
          lg:bg-[linear-gradient(to_right,transparent_5%,rgba(169,195,224,0.6)_20%,rgba(169,195,224,0.6)_80%,transparent_95%)]
        "
      />

      {/* Bottom dark HR (primary-900) */}
      <div
        className="
          h-px
          bg-[linear-gradient(to_right,transparent_0%,rgba(28,48,82,0.65)_25%,rgba(28,48,82,0.65)_75%,transparent_100%)]
          md:bg-[linear-gradient(to_right,transparent_20%,rgba(28,48,82,0.65)_30%,rgba(28,48,82,0.65)_70%,transparent_80%)]
          lg:bg-[linear-gradient(to_right,transparent_5%,rgba(28,48,82,0.65)_20%,rgba(28,48,82,0.65)_80%,transparent_95%)]
        "
      />

    </div>
  );
}