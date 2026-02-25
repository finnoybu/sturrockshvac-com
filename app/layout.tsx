import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModalProvider from "@/components/ContactModalProvider";
import { brand, companyInfo } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${brand.domain}`),

  title: {
    default: `${brand.marketingName} - Professional Heating & Cooling Services`,
    template: `%s | ${brand.marketingName}`,
  },

  description:
    "Professional HVAC repair, installation, and maintenance serving Fairfax and Loudoun Counties, VA and Montgomery and Frederick Counties, MD. 24/7 emergency service available.",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: `https://${brand.domain}`,
    siteName: brand.marketingName,
    title: `${brand.marketingName} - Professional Heating & Cooling Services`,
    description:
      "Professional HVAC repair, installation, and maintenance serving Fairfax and Loudoun Counties, VA and Montgomery and Frederick Counties, MD. 24/7 emergency service available.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: brand.marketingName,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${brand.marketingName} - Professional Heating & Cooling Services`,
    description:
      "Professional HVAC repair, installation, and maintenance serving Fairfax and Loudoun Counties, VA and Montgomery and Frederick Counties, MD. 24/7 emergency service available.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <ContactModalProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ContactModalProvider>

        {/* =============================
            Structured Data: Business
        ============================== */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HVACBusiness",
              "@id": `https://${brand.domain}#business`,
              name: brand.marketingName,
              legalName: brand.legalName,
              url: `https://${brand.domain}`,
              telephone: companyInfo.phoneE164,
              priceRange: "$$",

              address: {
                "@type": "PostalAddress",
                streetAddress: "11592 Harpers Ferry Rd",
                addressLocality: "Hillsboro",
                addressRegion: "VA",
                postalCode: "20132",
                addressCountry: "US",
              },

              areaServed: [
                { "@type": "AdministrativeArea", name: "Virginia" },
                { "@type": "AdministrativeArea", name: "Maryland" },
              ],

              identifier: [
                {
                  "@type": "PropertyValue",
                  name: brand.licenses.VA.label,
                  value: brand.licenses.VA.number,
                },
                {
                  "@type": "PropertyValue",
                  name: brand.licenses.MD.label,
                  value: brand.licenses.MD.number,
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
