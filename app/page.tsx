import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesGrid from "@/components/ServicesGrid";
import BrandLogoStrip from "@/components/BrandLogoStrip";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <BrandLogoStrip />
      <FinalCTA />
      <Footer />
    </main>
  );
}
