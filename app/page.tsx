import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import BrandLogoStrip from "@/components/BrandLogoStrip";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <BrandLogoStrip />
      <FinalCTA />
      <Footer />
    </>
  );
}