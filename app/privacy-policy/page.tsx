import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Sturrock's HVAC-Solutions collects, uses, and protects personal information for customers in Virginia and Maryland.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-3xl font-serif mb-8">Privacy Policy</h1>

        <p><strong>Effective Date:</strong> April 19, 2026</p>

        <p className="mt-6">
          Sturrock&apos;s HVAC-Solutions (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed
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
        <p className="mt-3">
          We use the following third-party service providers to operate this
          website and deliver our services. Each processes limited personal
          information only to the extent necessary for its function and is
          contractually required to protect that information:
        </p>
        <ul className="list-disc ml-6 mt-3 space-y-1">
          <li>
            <strong>Cloudflare, Inc.</strong> &mdash; website hosting, content
            delivery, DDoS protection, and inbound email routing for
            sturrockshvac.com addresses.
          </li>
          <li>
            <strong>Resend, Inc.</strong> &mdash; transactional email delivery
            for service request form submissions. Information you submit via
            the request-service form (name, phone, email, service details) is
            transmitted through Resend to our business inbox.
          </li>
          <li>
            <strong>Google LLC</strong> &mdash; Google Analytics 4 (website
            usage analytics) and Google Maps Embed (the location map on the
            Request Service page). See Section 6 for details and opt-out
            options.
          </li>
          <li>
            <strong>Legal or regulatory authorities</strong> when required by
            law, legal process, or court order.
          </li>
        </ul>
        <p className="mt-4">
          We do not sell personal information, and we do not share personal
          information with third parties for their own independent marketing
          purposes.
        </p>

        <h2 className="mt-10 text-xl font-semibold">
          5. SMS Communications (If Enabled in the Future)
        </h2>
        <p className="mt-3">
          Sturrock&apos;s HVAC-Solutions does not currently use SMS marketing.
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

        <h3 className="mt-6 font-semibold">A. Google Analytics 4</h3>
        <p className="mt-3">
          When enabled, this website uses Google Analytics 4 (&quot;GA4&quot;),
          a service provided by Google LLC, to understand how visitors use the
          site. GA4 sets cookies (such as <code>_ga</code> and
          <code>_ga_*</code>) in your browser and collects information
          including IP address (truncated for IP anonymization where
          supported), device and browser information, pages visited, session
          duration, and referring URLs. We use this information only in
          aggregate to improve the site.
        </p>
        <p className="mt-3">
          You may opt out of Google Analytics by installing the{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Google Analytics Opt-out Browser Add-on
          </a>{" "}
          or by using your browser&apos;s &quot;Do Not Track&quot; settings or
          private/incognito mode.
        </p>

        <h3 className="mt-6 font-semibold">B. Google Maps</h3>
        <p className="mt-3">
          Our Request Service page includes an embedded Google Maps location
          map. When this page loads, Google may set cookies and collect
          information according to its own privacy policy. If you prefer not
          to load Google Maps content, you may navigate to the service
          request form without scrolling to the map, or use browser
          extensions that block third-party iframes.
        </p>

        <h3 className="mt-6 font-semibold">C. Managing Cookies</h3>
        <p className="mt-3">
          You may disable or clear cookies in your browser settings. Disabling
          cookies may affect some site functionality, but core functions
          (browsing, reading content, submitting the service request form)
          will continue to work.
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

        <h2 className="mt-10 text-xl font-semibold">10. Children&apos;s Privacy</h2>
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
          Sturrock&apos;s HVAC-Solutions<br />
          Phone: (571) 258-7983<br />
          Email: andy@hvac-solutions.com
        </p>

        <p className="mt-4 text-sm text-gray-600">
          Serving Fairfax & Loudoun Counties (VA) and Frederick County (MD)
        </p>
      </main>
    </>
  );
}