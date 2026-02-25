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
                  <strong>Issued:</strong>
                  {new Date(license.issued).toLocaleDateString()}
                </p>
              )}

              <p className="text-primary-800">
                <strong>Expiration:</strong>
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
        <section className="max-w-4xl mx-auto mt-16 text-sm text-primary-700 leading-relaxed space-y-4 border-t pt-8">
          <h3 className="font-semibold text-primary-900">
            Important Notice Regarding License Information
          </h3>

          <p>
            The license information presented on this website is provided for
            general informational purposes only and does not constitute an
            official public record.
          </p>

          <p>
            Official public records for Virginia licenses are maintained by the
            <a
              href="https://www.dpor.virginia.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-600 hover:underline font-medium"
            >
              Virginia Department of Professional and Occupational Regulation
              (DPOR)
            </a>
            . Physical public records are maintained at: 9960 Mayland Drive,
            Suite 400, Richmond, VA 23233.
          </p>

          <p>
            Official public records for Maryland HVACR licenses are maintained
            by the
            <a
              href="https://www.labor.maryland.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-600 hover:underline font-medium"
            >
              Maryland Department of Labor
            </a>
            .
          </p>

          <p>
            While reasonable efforts are made to ensure the accuracy of the
            information displayed here, license data may not reflect the most
            current status due to administrative processing times, technical
            maintenance, or other delays.
          </p>

          <p>
            No warranties, express or implied, are made regarding the accuracy,
            completeness, reliability, or suitability of the information
            provided. Sturrock HVAC Solutions assumes no liability for errors,
            omissions, or reliance on the information displayed. For the most
            current and authoritative license status, please use the official
            verification links provided above.
          </p>

          <p>
            The presentation of license information on this website does not
            imply endorsement by any state regulatory authority.
          </p>
        </section>
      </main>
    </div>
  );
}
