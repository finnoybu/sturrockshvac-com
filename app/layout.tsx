import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModalProvider from "@/components/ContactModalProvider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sturrockshvac.com"),

  title: {
    default:
      "Sturrocks HVAC Solutions - Professional Heating & Cooling Services",
    template: "%s | Sturrocks HVAC Solutions",
  },

  description:
    "Professional HVAC repair, installation, and maintenance serving Fairfax and Loudoun Counties, VA and Montgomery and Frederick Counties, MD. 24/7 emergency service available.",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sturrockshvac.com",
    siteName: "Sturrocks HVAC Solutions",
    title:
      "Sturrocks HVAC Solutions - Professional Heating & Cooling Services",
    description:
      "Professional HVAC repair, installation, and maintenance serving Fairfax and Loudoun Counties, VA and Montgomery and Frederick Counties, MD. 24/7 emergency service available.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sturrocks HVAC Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sturrocks HVAC Solutions - Professional Heating & Cooling Services",
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
          <main className="flex-1">{children}</main>
          <Footer />
        </ContactModalProvider>
      </body>
    </html>
  );
}