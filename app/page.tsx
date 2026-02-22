import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import WhySturrocks from "@/components/WhySturrocks";
import BrandLogoStrip from "@/components/BrandLogoStrip";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

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
      <Footer />
    </>
  );
}
