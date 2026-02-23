import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import WhySturrocks from "@/components/WhySturrocks";
import BrandLogoStrip from "@/components/BrandLogoStrip";
import FinalCTA from "@/components/FinalCTA";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Heating & Cooling Services in VA & MD",
  description:
    "Professional HVAC repair, installation, and maintenance serving Fairfax and Loudoun Counties, VA and Montgomery and Frederick Counties, MD. 24/7 emergency service available.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <WhySturrocks />
      <BrandLogoStrip />
      <FinalCTA />
    </>
  );
}