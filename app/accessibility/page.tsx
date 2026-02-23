import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Accessibility Statement for Sturrock's HVAC-Solutions website and digital services.",
};

export default function Accessibility() {
  return (
    <>
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-3xl font-serif mb-8">
          Accessibility Statement
        </h1>

        <p><strong>Effective Date:</strong> January 1, 2026</p>

        <p className="mt-6">
          Sturrock's HVAC-Solutions is committed to ensuring digital
          accessibility for all individuals, including those with
          disabilities. We strive to provide a website experience that
          is inclusive and user-friendly for everyone.
        </p>

        <h2 className="mt-10 text-xl font-semibold">
          Accessibility Standards
        </h2>
        <p className="mt-3">
          We aim to conform, where reasonably feasible, to the Web
          Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.
        </p>

        <h2 className="mt-10 text-xl font-semibold">
          Measures We Take
        </h2>
        <ul className="list-disc ml-6 mt-3 space-y-1">
          <li>Clear and consistent navigation</li>
          <li>Properly labeled forms</li>
          <li>Readable fonts and sufficient color contrast</li>
          <li>Responsive mobile-friendly design</li>
          <li>Keyboard-accessible navigation where practical</li>
          <li>Periodic review of content for accessibility improvements</li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold">
          Ongoing Efforts
        </h2>
        <p className="mt-3">
          Accessibility is an ongoing process. As we update our website,
          we seek to improve usability and accessibility standards.
        </p>

        <h2 className="mt-10 text-xl font-semibold">
          Third-Party Content
        </h2>
        <p className="mt-3">
          Some features (such as embedded maps or scheduling tools) may
          rely on third-party providers. While we strive to ensure
          accessibility, we cannot guarantee accessibility of
          third-party content.
        </p>

        <h2 className="mt-10 text-xl font-semibold">
          Need Assistance?
        </h2>
        <p className="mt-3">
          If you experience difficulty accessing any content on our
          website or require assistance scheduling HVAC services,
          please contact us:
        </p>

        <p className="mt-4">
          Phone: (571) 258-7983<br />
          Email: andy@hvac-solutions.com
        </p>

        <p className="mt-6 text-sm text-gray-600">
          Sturrock's HVAC-Solutions is committed to serving all customers
          equally and without discrimination.
        </p>
      </main>
    </>
  );
}