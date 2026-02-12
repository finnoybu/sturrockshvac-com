import { companyInfo } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-bold text-lg mb-1">{companyInfo.name}</p>
            <p className="text-primary-300 text-sm">{companyInfo.tagline}</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-primary-300 text-sm">
              © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
