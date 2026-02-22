import Link from "next/link";
import { companyInfo } from "@/lib/content";

export default function Header() {
  return (
    <header className="header-calibration text-white relative z-50">
      <div
        className="mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-12 lg:px-33 
                  py-3 md:py-4 flex items-center justify-between"
      >
        <Link href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Sturrocks HVAC Solutions Logo"
            className="h-14 sm:h-20 md:h-24 w-auto"
          />
        </Link>

        <a
          href={`tel:${companyInfo.phoneE164}`}
          className="bg-accent-500 hover:bg-accent-600 
                 text-sm sm:text-base md:text-lg
                 px-4 sm:px-5 md:px-6 
                 py-2 sm:py-2.5
                 rounded-md shadow-md transition-colors whitespace-nowrap"
        >
          {companyInfo.phone}
        </a>
      </div>
    </header>
  );
}
