import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModalProvider from "@/components/ContactModalProvider";
import { brand, companyInfo, serviceAreas, testimonials } from "@/lib/content";
import "./globals.css";

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  metadataBase: new URL(`https://${brand.domain}`),

  title: {
    default: `${brand.marketingName} - Professional Heating & Cooling Services`,
    template: `%s | ${brand.marketingName}`,
  },

  description:
    "Professional HVAC repair, installation, and maintenance serving Fairfax and Loudoun Counties, VA and Frederick County, MD. 24/7 emergency service available.",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: `https://${brand.domain}`,
    siteName: brand.marketingName,
    title: `${brand.marketingName} - Professional Heating & Cooling Services`,
    description:
      "Professional HVAC repair, installation, and maintenance serving Fairfax and Loudoun Counties, VA and Frederick County, MD. 24/7 emergency service available.",
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
      "Professional HVAC repair, installation, and maintenance serving Fairfax and Loudoun Counties, VA and Frederick County, MD. 24/7 emergency service available.",
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
  // AggregateRating + individual Reviews are emitted only when real
  // testimonials are present. Adding these to the LocalBusiness schema
  // without first-party review data violates Google's structured-data
  // guidelines and risks a manual penalty.
  const ratingFields =
    testimonials.length > 0
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: (
              testimonials.reduce((sum, t) => sum + t.rating, 0) /
              testimonials.length
            ).toFixed(1),
            reviewCount: testimonials.length,
            bestRating: 5,
            worstRating: 1,
          },
          review: testimonials.map((t) => ({
            "@type": "Review",
            author: { "@type": "Person", name: t.author },
            datePublished: t.datePublished,
            reviewBody: t.body,
            reviewRating: {
              "@type": "Rating",
              ratingValue: t.rating,
              bestRating: 5,
              worstRating: 1,
            },
          })),
        }
      : {};

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-9999 focus:bg-primary-900 focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg"
        >
          Skip to main content
        </a>
        <ContactModalProvider>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </ContactModalProvider>

        {gaMeasurementId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}');
              `}
            </Script>
          </>
        )}

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
              description:
                "HVAC repair, installation, and maintenance serving Loudoun and Fairfax Counties in Virginia and Frederick County in Maryland. 24/7 emergency service.",
              image: `https://${brand.domain}/og-image.jpg`,
              logo: `https://${brand.domain}/logo.svg`,

              address: {
                "@type": "PostalAddress",
                streetAddress: companyInfo.address.street,
                addressLocality: companyInfo.address.locality,
                addressRegion: companyInfo.address.region,
                postalCode: companyInfo.address.postalCode,
                addressCountry: companyInfo.address.country,
              },

              geo: {
                "@type": "GeoCoordinates",
                latitude: companyInfo.geo.latitude,
                longitude: companyInfo.geo.longitude,
              },

              openingHoursSpecification: companyInfo.businessHours.map((h) => ({
                "@type": "OpeningHoursSpecification",
                dayOfWeek: `https://schema.org/${h.day}`,
                opens: h.opens,
                closes: h.closes,
              })),

              areaServed: [
                { "@type": "AdministrativeArea", name: "Loudoun County, VA" },
                { "@type": "AdministrativeArea", name: "Fairfax County, VA" },
                { "@type": "AdministrativeArea", name: "Frederick County, MD" },
                ...serviceAreas.cities.map((c) => ({
                  "@type": "City",
                  name: `${c.name}, ${c.state}`,
                })),
              ],

              sameAs: Object.values(companyInfo.socialProfiles).filter(Boolean),

              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "HVAC Services",
                itemListElement: [
                  "Air Conditioning Repair",
                  "Air Conditioning Installation",
                  "Furnace Repair",
                  "Furnace Installation",
                  "Heat Pump Services",
                  "Ductwork & Venting",
                  "Thermostat Installation",
                  "Preventative Maintenance",
                  "Commercial HVAC",
                ].map((name) => ({
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name },
                })),
              },

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

              ...ratingFields,
            }),
          }}
        />
      </body>
    </html>
  );
}
