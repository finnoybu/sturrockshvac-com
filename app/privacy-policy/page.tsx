import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Sturrocks HVAC Solutions collects, uses, and protects personal information for customers in Virginia and Maryland.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-3xl font-serif mb-8">Privacy Policy</h1>

        <p><strong>Effective Date:</strong> January 1, 2026</p>

        <p className="mt-6">
          Sturrocks HVAC Solutions ("Company," "we," "our," or "us") is committed
          to protecting your privacy. This Privacy Policy describes how we
          collect, use, disclose, and safeguard information when you visit our
          website or request HVAC services in Virginia and Maryland.
        </p>

        <h2 className="mt-10 text-xl font-semibold">1. Scope</h2>
        <p className="mt-3">
          This Privacy Policy applies to information collected through:
        </p>
        <ul className="list-disc ml-6 mt-3 space-y-1">
          <li>Our website</li>
          <li>Online service request forms</li>
          <li>Email or phone communications initiated through our website</li>
        </ul>
        <p className="mt-3">
          It does not apply to third-party websites or services not controlled by us.
        </p>

        <h2 className="mt-10 text-xl font-semibold">2. Information We Collect</h2>

        <h3 className="mt-6 font-semibold">
          A. Information You Provide Voluntarily
        </h3>
        <ul className="list-disc ml-6 mt-3 space-y-1">
          <li>Full name</li>
          <li>Phone number</li>
          <li>Email address</li>
          <li>Service address</li>
          <li>Details about HVAC systems or service needs</li>
          <li>Communications sent to us</li>
        </ul>

        <h3 className="mt-6 font-semibold">
          B. Automatically Collected Information
        </h3>
        <ul className="list-disc ml-6 mt-3 space-y-1">
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Device information</li>
          <li>Pages visited and time spent</li>
          <li>Referring URLs</li>
          <li>Cookie and analytics data</li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold">3. How We Use Information</h2>
        <p className="mt-3">We use collected information to:</p>
        <ul className="list-disc ml-6 mt-3 space-y-1">
          <li>Respond to inquiries and schedule services</li>
          <li>Provide estimates and perform contracted services</li>
          <li>Improve website performance and user experience</li>
          <li>Maintain business and service records</li>
          <li>Comply with legal, regulatory, and tax obligations</li>
          <li>Protect against fraud or unauthorized activity</li>
        </ul>
        <p className="mt-4">
          We do not sell personal information.
        </p>

        <h2 className="mt-10 text-xl font-semibold">
          4. Data Sharing & Service Providers
        </h2>
        <p className="mt-3">We may share information with:</p>
        <ul className="list-disc ml-6 mt-3 space-y-1">
          <li>Hosting providers</li>
          <li>Scheduling or CRM software providers</li>
          <li>Payment processors (if applicable)</li>
          <li>Legal or regulatory authorities when required by law</li>
        </ul>
        <p className="mt-4">
          All service providers are required to implement reasonable safeguards.
        </p>

        <h2 className="mt-10 text-xl font-semibold">
          5. SMS Communications (If Enabled in the Future)
        </h2>
        <p className="mt-3">
          Sturrocks HVAC Solutions does not currently use SMS marketing.
        </p>
        <p className="mt-3">
          If SMS communications are implemented in the future:
        </p>
        <ul className="list-disc ml-6 mt-3 space-y-1">
          <li>Message frequency may vary</li>
          <li>Message and data rates may apply</li>
          <li>You may opt out at any time by replying STOP</li>
          <li>For assistance, reply HELP or contact us directly</li>
        </ul>
        <p className="mt-4">
          SMS consent will not be shared or sold.
        </p>

        <h2 className="mt-10 text-xl font-semibold">6. Cookies & Analytics</h2>
        <p className="mt-3">
          We may use cookies and third-party analytics tools (such as Google
          Analytics) to improve functionality and understand user behavior.
        </p>
        <p className="mt-3">
          You may disable cookies in your browser settings. Disabling cookies may
          affect site functionality.
        </p>

        <h2 className="mt-10 text-xl font-semibold">7. Data Retention</h2>
        <p className="mt-3">
          We retain personal information only as long as reasonably necessary
          for business, legal, tax, or compliance purposes.
        </p>

        <h2 className="mt-10 text-xl font-semibold">8. Data Security</h2>
        <p className="mt-3">
          We implement reasonable administrative, technical, and physical
          safeguards to protect personal information. However, no method of
          transmission over the Internet can be guaranteed to be completely secure.
        </p>

        <h2 className="mt-10 text-xl font-semibold">9. Your Rights</h2>
        <p className="mt-3">
          Residents of Virginia and Maryland may request:
        </p>
        <ul className="list-disc ml-6 mt-3 space-y-1">
          <li>Access to personal information we maintain</li>
          <li>Correction of inaccurate information</li>
          <li>Deletion of information where legally permitted</li>
        </ul>
        <p className="mt-3">
          Requests may be submitted using the contact information below.
        </p>

        <h2 className="mt-10 text-xl font-semibold">10. Children's Privacy</h2>
        <p className="mt-3">
          Our services are not directed to children under 13, and we do not
          knowingly collect personal information from children.
        </p>

        <h2 className="mt-10 text-xl font-semibold">11. Governing Law</h2>
        <p className="mt-3">
          This Privacy Policy is governed by the laws of the Commonwealth of
          Virginia and the State of Maryland, as applicable, without regard to
          conflict-of-law principles.
        </p>

        <h2 className="mt-10 text-xl font-semibold">12. Contact Information</h2>
        <p className="mt-3">
          Sturrocks HVAC Solutions<br />
          Phone: (571) 258-7983<br />
          Email: andy@hvac-solutions.com
        </p>

        <p className="mt-4 text-sm text-gray-600">
          Serving Fairfax & Loudoun Counties (VA) and Montgomery & Frederick
          Counties (MD)
        </p>
      </main>
    </>
  );
}