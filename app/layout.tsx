import type { Metadata } from "next";
import "./globals.css";

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
  },
  twitter: {
    card: "summary_large_image",
    title: "Sturrock HVAC - Professional Heating & Cooling Services",
    description: "Expert HVAC services for your home and business. 24/7 emergency service available.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
