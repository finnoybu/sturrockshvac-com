import Link from "next/link";
import { companyInfo, serviceAreas } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white relative">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-14 grid md:grid-cols-5 gap-10">
        {/* Column 1 — Company */}
        <div>
          <h3 className="text-lg font-semibold border-b border-primary-300 pb-2 mb-4">
            {companyInfo.name}
          </h3>

          <p className="text-sm text-primary-200 mb-3">
            {companyInfo.tagline}
          </p>

          <p className="text-sm mb-1">
            <span className="font-semibold">Phone:</span>{" "}
            <a
              href={`tel:${companyInfo.phoneE164}`}
              className="hover:text-accent-400 transition-colors"
            >
              {companyInfo.phone}
            </a>
          </p>

          <p className="text-sm mb-2">
            <span className="font-semibold">Email:</span>{" "}
            <a
              href={`mailto:${companyInfo.email}`}
              className="hover:text-accent-400 transition-colors"
            >
              {companyInfo.email}
            </a>
          </p>

          <p className="text-sm text-primary-200 mt-3">
            {serviceAreas.short}
          </p>

          <p className="text-sm text-primary-200 mt-3">
            Licensed & Insured in VA & MD
          </p>
        </div>

        {/* Column 2 — Quick Links */}
        <div>
          <h3 className="text-lg font-semibold border-b border-primary-300 pb-2 mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-accent-400 transition-colors">Home</Link></li>
            <li><Link href="/services" className="hover:text-accent-400 transition-colors">Services</Link></li>
            <li><Link href="/brands" className="hover:text-accent-400 transition-colors">Brands</Link></li>
            <li><Link href="/request-service" className="hover:text-accent-400 transition-colors">Request Service</Link></li>
          </ul>
        </div>

        {/* Services Group (2 Columns) */}
        <div className="md:col-span-2">
          <h3 className="text-lg font-semibold border-b border-primary-300 pb-2 mb-4">
            Our Services
          </h3>

          <div className="grid grid-cols-2 gap-x-10">
            <ul className="space-y-3 text-sm">
              <li><Link href="/services/air-conditioning" className="hover:text-accent-400 transition-colors">Air Conditioning</Link></li>
              <li><Link href="/services/heating" className="hover:text-accent-400 transition-colors">Heating & Furnace</Link></li>
              <li><Link href="/services/heat-pumps" className="hover:text-accent-400 transition-colors">Heat Pump Services</Link></li>
              <li><Link href="/services/ductwork" className="hover:text-accent-400 transition-colors">Ductwork & Venting</Link></li>
            </ul>

            <ul className="space-y-3 text-sm">
              <li><Link href="/services/thermostats" className="hover:text-accent-400 transition-colors">Thermostats</Link></li>
              <li><Link href="/services/plumbing" className="hover:text-accent-400 transition-colors">Plumbing Services</Link></li>
              <li><Link href="/services/preventative-maintenance" className="hover:text-accent-400 transition-colors whitespace-nowrap">Preventative Maintenance</Link></li>
              <li><Link href="/services/commercial-hvac" className="hover:text-accent-400 transition-colors">Commercial HVAC</Link></li>
            </ul>
          </div>
        </div>

        {/* Column 5 — Legal */}
        <div>
          <h3 className="text-lg font-semibold border-b border-primary-300 pb-2 mb-4">
            Legal & Compliance
          </h3>

          <ul className="space-y-2 text-sm">
            <li><Link href="/privacy-policy" className="hover:text-accent-400 transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-accent-400 transition-colors">Terms & Conditions</Link></li>
            <li><Link href="/accessibility" className="hover:text-accent-400 transition-colors">Accessibility Statement</Link></li>
            <li>
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-400 transition-colors"
              >
                Sitemap
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-primary-700 relative py-8 text-sm text-primary-300">

        {/* Finnoybu Logo Bottom Left */}
        <a
          href="https://finnoybu.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Site designed by Kenneth Tannenbaum"
          className="absolute left-6 bottom-6 text-primary-300 hover:text-accent-500 transition-colors"
        >
          <img
            src="/images/finnoybu-gray.svg"
            alt="Finnoybu Logo"
            className="h-8 w-auto"
          />
        </a>

        {/* Centered Copyright */}
        <div className="text-center">
          © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
          <br />
          <span className="opacity-80">
            Site designed & developed by Kenneth Tannenbaum
          </span>
        </div>
      </div>
    </footer>
  );
}