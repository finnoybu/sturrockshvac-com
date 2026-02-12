import Link from "next/link";
import { companyInfo } from "@/lib/content";

export default function Header() {
  return (
    <header className="text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <div className="bg-accent-500 p-2 rounded-lg">
            <span className="text-2xl font-bold">{companyInfo.name.substring(0, 1)}</span>
          </div>
          <span className="text-xl font-bold">{companyInfo.name}</span>
        </Link>
        
        <a 
          href={`tel:${companyInfo.phone}`}
          className="bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md flex items-center gap-2"
        >
          <span className="text-xl">📞</span>
          <span>{companyInfo.phone}</span>
        </a>
      </div>
    </header>
  );
}
