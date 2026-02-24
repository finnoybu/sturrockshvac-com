import Link from "next/link";
import { licenses } from "@/lib/licenses";

export default function LicensesPage() {
  return (
    <div className="min-h-screen bg-primary-50 border-t border-primary-200">
      <main className="container mx-auto px-4 pt-12 pb-20">
        <h1 className="text-3xl md:text-4xl font-serif italic text-primary-900 mb-10 text-center">
          Professional Licenses
        </h1>

        <div className="space-y-8 max-w-4xl mx-auto">
          {licenses.map((license, index) => (
            <div
              key={index}
              className="bg-white shadow-sm border border-primary-200 rounded-2xl p-6"
            >
              <h2 className="text-xl font-semibold text-primary-900 mb-2">
                {license.state} — {license.type}
              </h2>

              <p className="text-primary-800">
                <strong>Holder:</strong> {license.holder}
              </p>

              <p className="text-primary-800">
                <strong>License Number:</strong> {license.licenseNumber}
              </p>

              {license.issued && (
                <p className="text-primary-800">
                  <strong>Issued:</strong>{" "}
                  {new Date(license.issued).toLocaleDateString()}
                </p>
              )}

              <p className="text-primary-800">
                <strong>Expiration:</strong>{" "}
                {new Date(license.expires).toLocaleDateString()}
              </p>

              <p className="text-primary-800">
                <strong>Specialties:</strong> {license.specialties.join(", ")}
              </p>

              {"insured" in license && license.insured && (
                <p className="text-primary-800">
                  <strong>Status:</strong> Active & Insured
                </p>
              )}

              <div className="mt-4">
                <Link
                  href={license.verifyUrl}
                  target="_blank"
                  className="text-accent-600 hover:underline font-medium"
                >
                  Verify with Official Source →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer section unchanged */}
      </main>
    </div>
  );
}