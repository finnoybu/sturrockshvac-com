import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import WhySturrocks from "@/components/WhySturrocks";
import BrandLogoStrip from "@/components/BrandLogoStrip";
import FinalCTA from "@/components/FinalCTA";

export const metadata = {
  title: "HVAC Repair & Installation | Sturrocks HVAC Solutions",
  description:
    "Sturrocks HVAC Solutions provides heating and cooling repair, installation, and maintenance in Fairfax and Loudoun, VA and Montgomery and Frederick, MD.",
};

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesGrid />
      <WhySturrocks />
      <BrandLogoStrip />
      <FinalCTA />
    </>
  );
}