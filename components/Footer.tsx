import Link from "next/link";
import Image from "next/image";
import { memo } from "react";
import {
  brand,
  companyInfo,
  cityLandingPages,
  countyOverviews,
  serviceAreas,
} from "@/lib/content";
import FooterPhoneLink from "@/components/FooterPhoneLink";

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

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div
        className="
          max-w-screen-2xl mx-auto px-6 md:px-12 py-14
          grid gap-x-12 gap-y-12
          grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5
        "
      >
        <nav className="flex flex-col gap-10">
          <CompanySection />
          <div className="md:hidden">
            <LegalSection />
          </div>
          <div className="lg:hidden flex flex-col gap-10">
            <QuickLinksSection />
            <div className="md:hidden">
              <ServicesSection />
            </div>
          </div>
        </nav>

        <nav className="hidden md:flex flex-col gap-10">
          <LegalSection />
          <div className="xl:hidden flex flex-col gap-10">
            <div className="hidden lg:flex">
              <QuickLinksSection />
            </div>
            <div className="lg:hidden">
              <ServicesSection />
            </div>
          </div>
        </nav>

        <nav className="hidden lg:flex flex-col gap-10">
          <div className="hidden xl:flex">
            <QuickLinksSection />
          </div>
          <div className="xl:hidden">
            <ServicesSection />
          </div>
        </nav>

        <nav className="hidden xl:flex flex-col gap-10 2xl:col-span-2">
          <ServicesSection />
        </nav>
      </div>

      <ServiceAreasStrip />
      <FooterBottom />
    </footer>
  );
}

function ServiceAreasStrip() {
  // One column per county. Tier-1 city names link to their landing pages;
  // county headers link to the county overview. This gives every footer
  // a comprehensive "we service these places" signal for both users and
  // search engines.
  const counties = countyOverviews.map((county) => ({
    ...county,
    cities: cityLandingPages.filter(
      (c) =>
        c.stateSlug === county.stateSlug &&
        c.countySlug === county.slug &&
        !c.isIndependentCity,
    ),
  }));

  const independentCities = cityLandingPages.filter((c) => c.isIndependentCity);

  return (
    <div className="border-t border-primary-700 bg-primary-900/60">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-10">
        <h3 className="text-center text-sm uppercase tracking-wider font-semibold text-primary-200 mb-6">
          We Service These Cities
        </h3>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-sm">
          {counties.map((county) => (
            <div key={county.slug}>
              <h4 className="font-semibold text-white mb-3">
                <Link
                  href={`/service-areas/${county.stateSlug}/${county.slug}`}
                  className="hover:text-accent-400 transition-colors"
                >
                  {county.name}, {county.state}
                </Link>
              </h4>
              <ul className="space-y-1 text-primary-200">
                {county.cities.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/service-areas/${c.stateSlug}/${c.countySlug}/${c.slug}`}
                      className="hover:text-accent-400 transition-colors"
                    >
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {independentCities.length > 0 && (
            <div>
              <h4 className="font-semibold text-white mb-3">
                Independent Cities
              </h4>
              <ul className="space-y-1 text-primary-200">
                {independentCities.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/service-areas/${c.stateSlug}/${c.countySlug}`}
                      className="hover:text-accent-400 transition-colors"
                    >
                      {c.name}, {c.state}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <p className="text-center text-xs text-primary-300 mt-6">
          <Link
            href="/service-areas"
            className="underline hover:text-accent-400 transition-colors"
          >
            See all service areas &rarr;
          </Link>
        </p>
      </div>
    </div>
  );
}

/* ===== REUSABLE COMPONENTS ===== */

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg font-semibold pb-2 mb-4 border-b border-primary-300">
      {children}
    </h3>
  );
}

function CompanySection() {

  const handlePhoneClick = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    if (window.innerWidth >= 768) {
      e.preventDefault();
    }
  };

  return (
    <div>
      <SectionHeader>{companyInfo.name}</SectionHeader>

      <ul className="space-y-2 text-sm">
        <li className="text-primary-200 mb-3">{companyInfo.tagline}</li>

        <li className="mb-1">
          <span className="font-semibold">Phone: </span>
<FooterPhoneLink
  phone={companyInfo.phone}
  phoneE164={companyInfo.phoneE164}
  className="hover:text-accent-400 transition-colors"
/>
        </li>

        <li>
          <span className="font-semibold">Email: </span>
          <Link
            className="hover:text-accent-400 transition-colors"
            href={`mailto:${companyInfo.email}`}
          >
            {companyInfo.email}
          </Link>
        </li>

        <li className="text-primary-200 mb-3 max-w-xs">
          {serviceAreas.short}
        </li>

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
          <FooterLink href="/service-areas">Service Areas</FooterLink>
        </li>
        <li>
          <FooterLink href="/testimonials">Customer Reviews</FooterLink>
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

const FooterBottom = memo(function FooterBottom() {
  return (
    <div className="border-t border-primary-700 py-8">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex items-start gap-6 text-sm text-primary-300">
        <div className="flex-shrink-0 pt-0.5">
          <a
            href="https://finnoybu.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:opacity-80 transition-opacity"
            aria-label="Finnoybu - Site designed and developed by Ken Tannenbaum"
          >
            <Image
              src="/images/finnoybu-gray.svg"
              alt="Finnoybu Logo"
              width={100}
              height={40}
              className="h-10 w-auto"
              unoptimized
            />
          </a>
        </div>

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
              Virginia (#{brand.licenses.VA.number}) & Maryland (#
              {brand.licenses.MD.number})
            </Link>
          </p>
          <p>
            Site designed & developed by{" "}
            <a
              href="https://finnoybu.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-400 transition-colors"
            >
              Ken Tannenbaum
            </a>
          </p>
          <p className="opacity-60 text-sm">
            Updated {process.env.NEXT_PUBLIC_BUILD_TIMESTAMP} (
            {process.env.NEXT_PUBLIC_BUILD_ID})
          </p>
        </div>
      </div>
    </div>
  );
});