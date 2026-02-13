import { companyInfo } from "@/lib/content";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-primary-900 text-white py-14 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-primary-200 mb-6">
            Call or email {companyInfo.name} to schedule service or request a quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${companyInfo.phoneE164}`}
              className="bg-white text-primary-900 font-semibold px-6 py-3 rounded-lg transition-colors hover:bg-primary-50 shadow-lg text-center"
            >
              {companyInfo.phone}
            </a>
            <a
              href={`mailto:${companyInfo.email}`}
              className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg transition-colors hover:bg-white hover:text-primary-900 text-center"
            >
              {companyInfo.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
