import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sturrockshvac.com"),
  title:
    "Sturrocks HVAC Solutions - Professional Heating & Cooling Services",
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
        url: "/hero/sturrock_summer_hero_2560x1320.png",
        width: 2560,
        height: 1320,
        alt: "Sturrocks HVAC Solutions HVAC services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Sturrocks HVAC Solutions - Professional Heating & Cooling Services",
    description:
      "Professional HVAC repair, installation, and maintenance serving Fairfax and Loudoun Counties, VA and Montgomery and Frederick Counties, MD. 24/7 emergency service available.",
    images: ["/hero/sturrock_summer_hero_2560x1320.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased flex flex-col min-h-screen`}>
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}