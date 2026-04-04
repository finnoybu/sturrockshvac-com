import Link from "next/link";
import Image from "next/image";
import PhoneCTA from "@/components/PhoneCTA";
import { brand } from "@/lib/content";

export default function Header() {
  return (
    <header className="header-calibration text-white relative z-50">
      <div
        className="mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-12 lg:px-33 
                   py-3 md:py-4 flex items-center justify-between"
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

        {/* Primary Phone CTA (mobile call / desktop modal) */}
        <PhoneCTA />
      </div>
    </header>
  );
}