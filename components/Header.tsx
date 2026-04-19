"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import PhoneCTA from "@/components/PhoneCTA";
import { brand } from "@/lib/content";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/testimonials", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/brands", label: "Brands" },
] as const;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close the mobile menu if the window resizes into desktop-nav territory.
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024 && mobileOpen) {
        setMobileOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileOpen]);

  // Close on Escape.
  useEffect(() => {
    if (!mobileOpen) return;
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [mobileOpen]);

  return (
    <header className="header-calibration text-white relative z-50">
      <div
        className="mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-12 lg:px-33
                   py-3 md:py-4 flex items-center justify-between gap-4"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt={`${brand.marketingName} Logo`}
            width={200}
            height={96}
            className="h-14 sm:h-20 md:h-24 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden lg:flex items-center gap-6"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-primary-900 hover:text-accent-600 font-semibold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side: mobile menu button + phone CTA */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-primary-900 hover:bg-primary-100 transition-colors"
          >
            {mobileOpen ? (
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M6 18L18 6" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          <PhoneCTA />
        </div>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <nav
          id="mobile-nav"
          aria-label="Primary (mobile)"
          className="lg:hidden border-t border-primary-200 bg-white shadow-md"
        >
          <ul className="flex flex-col py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-6 py-3 text-primary-900 hover:bg-primary-50 hover:text-accent-600 font-semibold transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="border-t border-primary-100 mt-2">
              <Link
                href="/request-service"
                onClick={() => setMobileOpen(false)}
                className="block px-6 py-3 text-accent-600 hover:bg-primary-50 font-semibold transition-colors"
              >
                Request Service &rarr;
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
