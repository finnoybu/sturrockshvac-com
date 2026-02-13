import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sturrockhvac.com"),
  title: "Sturrock HVAC - Professional Heating & Cooling Services",
  description: "Expert HVAC services for your home and business. 24/7 emergency service available.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sturrockhvac.com",
    siteName: "Sturrock HVAC",
    title: "Sturrock HVAC - Professional Heating & Cooling Services",
    description: "Expert HVAC services for your home and business. 24/7 emergency service available.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sturrock HVAC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sturrock HVAC - Professional Heating & Cooling Services",
    description: "Expert HVAC services for your home and business. 24/7 emergency service available.",
    images: ["/og-image.jpg"],
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
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
