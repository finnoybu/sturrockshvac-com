import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request Service",
  description:
    "Request HVAC service or an estimate with Sturrocks HVAC Solutions serving Fairfax and Loudoun, VA and Montgomery and Frederick, MD. 24/7 emergency support available.",
};

export default function RequestServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
