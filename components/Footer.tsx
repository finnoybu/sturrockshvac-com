import Link from "next/link";
import { memo } from "react";
import { brand, companyInfo, serviceAreas } from "@/lib/content";

/* ===== CONSTANTS ===== */
const SERVICE_GROUPS = [
  {
    links: [
      { href: "/services/air-conditioning", label: "Air Conditioning" },
      { href: "/services/heating", label: "Heating & Furnace" },
      { href: "/services/heat-pumps", label: "Heat Pump Services" },
      { href: "/services/ductwork", label: "Ductwork & Venting" },
    ],
  },
  {
    links: [
      { href: "/services/thermostats", label: "Thermostats" },
      { href: "/services/plumbing", label: "Plumbing Services" },
      {
        href: "/services/preventative-maintenance",
        label: "Preventative Maintenance",
      },
      { href: "/services/commercial-hvac", label: "Commercial HVAC" },
    ],
  },
];

export default function Footer2() {
  return (
    <footer className="bg-primary-900 text-white">
      <div
        className="
          max-w-screen-2xl mx-auto px-6 md:px-12 py-14
          grid gap-x-12 gap-y-12
          grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5
        "
      >
        {/* MOBILE (all sections visible in one column) */}
        {/* TABLET MD-LG (split across 2 columns) */}
        {/* DESKTOP LG+ (split across 3-5 columns) */}

        {/* ===== COLUMN 1: Company Info (always visible) ===== */}
        <nav className="flex flex-col gap-10">
          <CompanySection />
          {/* Legal appears here on mobile only */}
          <div className="md:hidden">
            <LegalSection />
          </div>
          {/* Quick Links & Services appear here on mobile-lg */}
          <div className="lg:hidden flex flex-col gap-10">
            <QuickLinksSection />
            <div className="md:hidden">
              <ServicesSection />
            </div>
          </div>
        </nav>

        {/* ===== COLUMN 2: Legal Section (MD+) ===== */}
        <nav className="hidden md:flex flex-col gap-10">
          <LegalSection />
          {/* Quick Links & Services appear here on md-xl */}
          <div className="xl:hidden flex flex-col gap-10">
            <div className="hidden lg:flex">
              <QuickLinksSection />
            </div>
            <div className="lg:hidden">
              <ServicesSection />
            </div>
          </div>
        </nav>

        {/* ===== COLUMN 3: Quick Links or Services (LG+) ===== */}
        <nav className="hidden lg:flex flex-col gap-10">
          {/* Quick Links appear here on xl+ */}
          <div className="hidden xl:flex">
            <QuickLinksSection />
          </div>
          {/* Services appear here on lg-xl */}
          <div className="xl:hidden">
            <ServicesSection />
          </div>
        </nav>

        {/* ===== COLUMNS 4-5: Services (XL+) ===== */}
        <nav className="hidden xl:flex flex-col gap-10 2xl:col-span-2">
          <ServicesSection />
        </nav>
      </div>

      {/* ===== FOOTER BOTTOM STRIP ===== */}
      <FooterBottom />
    </footer>
  );
}

/* ===== REUSABLE COMPONENTS ===== */

/**
 * SectionHeader - Reusable header for footer sections
 * Features a bottom border for visual separation
 */
function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg font-semibold pb-2 mb-4 border-b border-primary-300">
      {children}
    </h3>
  );
}

/**
 * CompanySection - Main company info, contact, and service areas
 */
function CompanySection() {
  return (
    <div>
      <SectionHeader>{companyInfo.name}</SectionHeader>

      <ul className="space-y-2 text-sm">
        <li className="text-primary-200 mb-3">{companyInfo.tagline}</li>
        <li className="mb-1">
          <span className="font-semibold">Phone:</span>{" "}
          <Link
            className="hover:text-accent-400 transition-colors"
            href={`tel:${companyInfo.phoneE164}`}
          >
            {companyInfo.phone}
          </Link>
        </li>
        <li>
          <span className="font-semibold">Email:</span>{" "}
          <Link
            className="hover:text-accent-400 transition-colors"
            href={`mailto:${companyInfo.email}`}
          >
            {companyInfo.email}
          </Link>
        </li>
        <li className="text-primary-200 mb-3 max-w-xs">{serviceAreas.short}</li>
        <li className="mb-3">
          <Link
            href="/licenses"
            className="text-primary-200 hover:text-accent-400 transition-colors"
          >
            Licensed & Insured in VA & MD
          </Link>
        </li>
      </ul>
    </div>
  );
}

/**
 * LegalSection - Privacy, terms, accessibility, and sitemap links
 */
function LegalSection() {
  return (
    <nav>
      <SectionHeader>Legal & Compliance</SectionHeader>

      <ul className="space-y-2 text-sm">
        <li>
          <FooterLink href="/licenses">Professional Licenses</FooterLink>
        </li>
        <li>
          <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
        </li>
        <li>
          <FooterLink href="/terms">Terms & Conditions</FooterLink>
        </li>
        <li>
          <FooterLink href="/accessibility">Accessibility Statement</FooterLink>
        </li>
        <li>
          <FooterLink href="/sitemap.xml">Sitemap</FooterLink>
        </li>
      </ul>
    </nav>
  );
}

/**
 * QuickLinksSection - Main navigation links (Home, Services, Brands, Contact)
 */
function QuickLinksSection() {
  return (
    <nav className="w-full">
      <SectionHeader>Quick Links</SectionHeader>

      <ul className="space-y-2 text-sm">
        <li>
          <FooterLink href="/">Home</FooterLink>
        </li>
        <li>
          <FooterLink href="/services">Services</FooterLink>
        </li>
        <li>
          <FooterLink href="/brands">Brands</FooterLink>
        </li>
        <li>
          <FooterLink href="/request-service">Request Service</FooterLink>
        </li>
      </ul>
    </nav>
  );
}

/**
 * ServicesSection - All HVAC and plumbing service links
 * Displays in 1 or 2 columns depending on screen size
 */
function ServicesSection() {
  return (
    <nav>
      <SectionHeader>Our Services</SectionHeader>

      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-y-2 gap-x-6">
        {SERVICE_GROUPS.map((group, idx) => (
          <ul key={idx} className="space-y-2 text-sm">
            {group.links.map((link) => (
              <li key={link.href}>
                <FooterLink href={link.href}>{link.label}</FooterLink>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </nav>
  );
}

/**
 * FooterLink - Consistent styling for all footer links
 */
const FooterLink = memo(function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="hover:text-accent-400 transition-colors">
      {children}
    </Link>
  );
});

/**
 * FooterBottom - Copyright, licensing, and credits
 */
const FooterBottom = memo(function FooterBottom() {
  return (
    <div className="border-t border-primary-700 py-8">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex items-start gap-6 text-sm text-primary-300">
        {/* Finnoybu Logo & Credit */}
        <div className="flex-shrink-0 pt-0.5">
          <a
            href="https://finnoybu.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:opacity-80 transition-opacity"
            aria-label="Finnoybu - Site designed and developed by Kenneth Tannenbaum"
          >
            <img
              src="/images/finnoybu-gray.svg"
              alt="Finnoybu Logo"
              className="h-10 w-auto"
            />
          </a>
        </div>

        {/* Company Info & Credits */}
        <div className="flex flex-col gap-1 leading-relaxed">
          <p className="mb-1">
            © {new Date().getFullYear()} {brand.legalName}
          </p>
          <p>
            Licensed in{" "}
            <Link
              href="/licenses"
              className="hover:text-accent-400 transition-colors"
            >
              VA (#{brand.licenses.VA.number}) & MD (#
              {brand.licenses.MD.number})
            </Link>
          </p>
          <p>Site designed & developed by Kenneth Tannenbaum</p>
          <p className="opacity-60 text-[11px]">
            Build #{process.env.NEXT_PUBLIC_BUILD_ID} (
            {process.env.NEXT_PUBLIC_BUILD_TIMESTAMP})
          </p>
        </div>
      </div>
    </div>
  );
});
