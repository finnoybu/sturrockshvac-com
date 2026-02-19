import Link from "next/link";
import { companyInfo } from "@/lib/content";

export default function Header() {
  return (
    <header className="header-calibration text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-33 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Sturrock HVAC Solutions Logo"
            className="h-21 w-auto block"
          />
        </Link>

        <a
          href={`tel:${companyInfo.phoneE164}`}
          className="bg-accent-500 hover:bg-accent-600 text-white font-semibold text-xl px-6.5 py-2.5 rounded-md shadow-md transition-colors"
        >
          {companyInfo.phone}
        </a>
      </div>
    </header>
  );
}
