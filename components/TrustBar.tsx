"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

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

      {/* Top dark HR */}
      <div className="h-px bg-[linear-gradient(to_right,transparent_0%,rgba(28,48,82,0.65)_25%,rgba(28,48,82,0.65)_75%,transparent_100%)]" />

      {/* Top light HR */}
      <div className="h-px bg-[linear-gradient(to_right,transparent_0%,rgba(169,195,224,0.6)_25%,rgba(169,195,224,0.6)_75%,transparent_100%)]" />

      {/* Band */}
      <div className="bg-[linear-gradient(to_right,transparent_10%,rgba(28,48,82,0.45)_35%,rgba(28,48,82,0.45)_65%,transparent_90%)] py-2">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 2xl:px-24 flex justify-center">

          {/* MOBILE (rotating) */}
          <div className="lg:hidden text-center uppercase text-xs font-medium tracking-normal text-white">
            <span style={{ display: "inline-block", minHeight: "1.25rem" }}>
              {PHRASES[index] === "Licensed & Insured" ? (
                <Link
                  href="/licenses"
                  className="hover:underline"
                >
                  {PHRASES[index]}
                </Link>
              ) : (
                PHRASES[index]
              )}
            </span>
          </div>

          {/* DESKTOP */}
          <div className="hidden lg:flex flex-row justify-center items-center gap-4 text-base font-medium tracking-wide text-white uppercase">

            <span className="h-2 w-2 rounded-full bg-primary-900" />

            <Link
              href="/licenses"
              className="hover:underline"
            >
              Licensed & Insured
            </Link>

            <span className="h-2 w-2 rounded-full bg-accent-500" />
            <span>NATE-Certified Technicians</span>

            <span className="h-2 w-2 rounded-full bg-accent-500" />
            <span>Serving Since 2008</span>

            <span className="h-2 w-2 rounded-full bg-primary-900" />

          </div>
        </div>
      </div>

      {/* Bottom light HR */}
      <div className="h-px bg-[linear-gradient(to_right,transparent_0%,rgba(169,195,224,0.6)_25%,rgba(169,195,224,0.6)_75%,transparent_100%)]" />

      {/* Bottom dark HR */}
      <div className="h-px bg-[linear-gradient(to_right,transparent_0%,rgba(28,48,82,0.65)_25%,rgba(28,48,82,0.65)_75%,transparent_100%)]" />

    </div>
  );
}