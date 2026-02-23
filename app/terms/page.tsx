

export const metadata = {
  title: "Terms & Conditions",
  description:
    "Review the Terms and Conditions governing use of Sturrock's HVAC-Solutions website and HVAC services in Virginia and Maryland.",
};

export default function Terms() {
  return (
    <>
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-3xl font-serif mb-8">
          Terms & Conditions
        </h1>

        <p><strong>Effective Date:</strong> January 1, 2026</p>

        <p className="mt-6">
          By accessing or using this website, you agree to these
          Terms & Conditions.
        </p>

        <h2 className="mt-10 text-xl font-semibold">1. Website Use</h2>
        <p className="mt-3">
          This website is intended solely for informational purposes related to
          HVAC services provided in Virginia and Maryland. Unauthorized use may
          result in legal action.
        </p>

        <h2 className="mt-10 text-xl font-semibold">2. No Professional Advice</h2>
        <p className="mt-3">
          Content on this website is provided for general informational purposes
          only. HVAC services require on-site evaluation and formal service
          agreements.
        </p>

        <h2 className="mt-10 text-xl font-semibold">
          3. Service Requests & Scheduling
        </h2>
        <p className="mt-3">
          Submitting a service request does not create a service contract.
          Service appointments are confirmed only after direct communication
          and acceptance by Sturrock's HVAC-Solutions.
        </p>
        <p className="mt-3">
          We reserve the right to decline service requests at our discretion.
        </p>

        <h2 className="mt-10 text-xl font-semibold">4. Estimates & Pricing</h2>
        <p className="mt-3">
          Any pricing, estimates, or promotional information presented on this
          website are subject to change and are not binding until confirmed in
          writing after on-site evaluation.
        </p>

        <h2 className="mt-10 text-xl font-semibold">5. Limitation of Liability</h2>
        <p className="mt-3">
          To the fullest extent permitted by law, Sturrock's HVAC-Solutions shall
          not be liable for:
        </p>
        <ul className="list-disc ml-6 mt-3 space-y-1">
          <li>Indirect, incidental, or consequential damages</li>
          <li>
            Service delays due to weather, supply chain disruptions, or events
            beyond our control
          </li>
          <li>Errors or omissions in website content</li>
          <li>Technical interruptions or website unavailability</li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold">6. Intellectual Property</h2>
        <p className="mt-3">
          All website content, including text, graphics, logos, and layout, is
          the property of Sturrock's HVAC-Solutions and may not be reproduced
          without written consent.
        </p>

        <h2 className="mt-10 text-xl font-semibold">7. Indemnification</h2>
        <p className="mt-3">
          You agree to indemnify and hold harmless Sturrock's HVAC-Solutions from
          claims arising from misuse of the website.
        </p>

        <h2 className="mt-10 text-xl font-semibold">
          8. Governing Law & Venue
        </h2>
        <p className="mt-3">
          These Terms are governed by the laws of the Commonwealth of Virginia
          and the State of Maryland, as applicable.
        </p>
        <p className="mt-3">
          Any disputes shall be resolved in courts located within Virginia or
          Maryland, as determined by Sturrock's HVAC-Solutions.
        </p>

        <h2 className="mt-10 text-xl font-semibold">9. Modifications</h2>
        <p className="mt-3">
          We reserve the right to update these Terms at any time. Continued use
          of the website constitutes acceptance of any updates.
        </p>

        <h2 className="mt-10 text-xl font-semibold">10. Contact</h2>
        <p className="mt-3">
          Sturrock's HVAC-Solutions<br />
          Phone: (571) 258-7983<br />
          Email: andy@hvac-solutions.com
        </p>
      </main>
    </>
  );
}